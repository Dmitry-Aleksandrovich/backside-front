import { Router } from "express";
import user_route from "./user_routes/users/controller";
import auth from "./user_routes/auth/controller";

const route = Router()

route.use("/tour", user_route);
route.use("/auth", auth);

export default route;

