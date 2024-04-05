import { Router } from "express";
import user_route from "./user_routes/controller"

const route = Router()

route.use("/tour", user_route);

export default route;

