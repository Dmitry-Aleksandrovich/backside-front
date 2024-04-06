import { Router, Request, Response } from "express";
import { addUserRoute, getUserRoutes } from "../service";
import { addRouteValidate } from "../validate";
import { JwtPayload, decode } from "jsonwebtoken"
import cookieParser from "cookie-parser";
import { env } from "../../../../env";

const route = Router();


// add user tours
route.post("/add", cookieParser(), async (req: Request, resp: Response) => {

    const new_route_data = addRouteValidate.validate(req.body)
    const decodetJwt: JwtPayload = <JwtPayload>decode(req.cookies.token)
    const userId = decodetJwt.id

    if (new_route_data.error) {
        resp.status(404);
        return resp.json({ message: "invalide get value" })
    }

    await addUserRoute(new_route_data.value, userId)
    .then( ( ) => {
        resp.json({ message: "new route added" }).status(200);
        return;
    })
    .catch(( err: Error )=> {
        console.error(err)
        resp.json({ message: "error on add new route", detail: err.name }).status(505);
        return;
    })
})

// get user tours
route.get("/", cookieParser(), async (req: Request, resp: Response) => {
    const decodetJwt: JwtPayload = <JwtPayload>decode(req.cookies.token)
    const userId = decodetJwt.id

    // if (!Number(user_route)) {
    //     resp.status(404);
    //     return resp.json({ message: "invalide get value" })
    // }

    await getUserRoutes(Number.parseInt(userId))
    .then( ( user_route_save) => {
        resp.json(user_route_save).status(200);
        return;
    })
    .catch(( err: Error )=> {
        console.error(err)
        resp.json({ message: "error on add new route", detail: err.name }).status(505);
        return;
    })
})

export default route