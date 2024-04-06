import Joi from "joi";
import { user_points, user_route } from "../dto/user_route.dto";

export const addRouteValidate = Joi.object<user_route>({
    destPoint: Joi.object<user_points>({
        lat: Joi.number().required(),
        lon: Joi.number().required()
    }).required(),
    startPoint: Joi.object<user_points>({
        lat: Joi.number().required(),
        lon: Joi.number().required()
    }).required()
})