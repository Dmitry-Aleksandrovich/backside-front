import { Router, Request, Response } from "express";
import { getUserRoutes } from "../service";

const route = Router();

// get user tours
route.get("/:routeId", async ( req: Request, resp: Response)=>{
    const user_route = <string>req.params.routeId;    

    if ( !Number(user_route) ){
        resp.status(404);
        return resp.json({message: "invalide get value"})
    }

    const user_route_save = await getUserRoutes(Number.parseInt(user_route));
    return resp.json(user_route_save).status(200);
})

export default route