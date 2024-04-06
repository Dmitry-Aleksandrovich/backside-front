import express, { Router, Request, Response } from "express"
import { UserLoginScheme } from "../dto/loginDto"
import { UserRegisterScheme } from "../dto/RegisterData.dto"
import { LoginUser, regisUser } from "../service"
import { AuthCustomError } from "../exceptions/AuthExceptions"
import cookieParser from "cookie-parser"

const route = Router()

//логин пользователя
route.post("/login", cookieParser(), async (req: Request, resp: Response): Promise<void> => {

  const userReq = UserLoginScheme.validate(req.body);
  const userData = userReq.value;

  console.log(userData);
  

  if (userReq.error) {

    resp.status(400);
    resp.json({ message: "non valide data", detail: userReq.error.message });
    return
  }

  LoginUser(userData.email, userData.password)
  .then( ( token ) => {
    resp.cookie("token", token)
    resp.json({message: "login success"}).status(200);
  })
  .catch( ( err: AuthCustomError ) => {
    resp.statusCode = err.statusCode || 500;
    resp.json({code: err.code, message: err.message, detail: err.detail});
  })

})


//регистрация
route.post("/regis", async (req: Request, resp: Response): Promise<void> => {

  let ValidateData = UserRegisterScheme.validate(req.body)
  const userData = ValidateData.value

  console.log(userData);
  

  if (ValidateData.error) {
    resp.status(400);
    resp.json({ code: 400, message: "non valide data", detail: ValidateData.error.message });
    return
  }

  regisUser(userData!.email, userData!.password, userData!.name)
    .then(( token ) => {
      resp.cookie("token", token)
      resp.json({ code: 204, message: "complete user create" })
    })
    .catch((err: AuthCustomError) => {
      resp.statusCode = err.statusCode || 404;
      resp.json({code: err.code, message: err.message, detail: err.detail, userEmail: userData!.email});
    })

})

export default route;
