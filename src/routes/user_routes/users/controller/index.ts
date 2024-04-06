import { Router, Request, Response } from "express";
import { addUserRoute, getUserRoutes } from "../service";
import { addRouteValidate } from "../validate";

const route = Router();


// get user tours
route.post("/add", async (req: Request, resp: Response) => {

    const new_route_data = addRouteValidate.validate(req.body)

    if (new_route_data.error) {
        resp.status(404);
        return resp.json({ message: "invalide get value" })
    }

    await addUserRoute(new_route_data.value)
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
route.get("/:routeId", async (req: Request, resp: Response) => {
    const user_route = <string>req.params.routeId;

    if (!Number(user_route)) {
        resp.status(404);
        return resp.json({ message: "invalide get value" })
    }

    await getUserRoutes(Number.parseInt(user_route))
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