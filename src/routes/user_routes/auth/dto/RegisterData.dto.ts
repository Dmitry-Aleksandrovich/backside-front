import * as Joi from "joi"

const UserRegisterScheme = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().min(6).regex(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
    password: Joi.string().min(8).required()
})


export { UserRegisterScheme }