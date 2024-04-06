import { Router, Request, Response } from "express"
import { UserScheme } from "../dto/loginDto"
import { LoginUser, regisUser } from "../service"
import { AuthCustomError } from "../exceptions/AuthExceptions"
import { successLoginData } from "../dto/UserDataDto"
import { CustomError } from "../exceptions/ExampleError"
// import cookieParser from "cookie-parser"

const route = Router()

//логин пользователя
//при логине выдаётся jwt токен
route.post("/login", /*cookieParser(),*/ async (req: Request, resp: Response): Promise<void> => {

  const userReq = UserScheme.validate(req.body);
  const userData = userReq.value;

  if (userReq.error) {

    resp.status(400);
    resp.json({ message: "non valide data", detail: userReq.error.message });
    return

  }

  LoginUser(userData.userEmail, userData.userPassword)
  .then( (val) => {
    resp.json({message: "login success"}).status(200);
  })
  .catch( ( err: AuthCustomError ) => {
    resp.statusCode = err.statusCode || 500;
    resp.json({code: err.code, message: err.message, detail: err.detail});
  })

})


//регистрация
route.post("/regis", async (req: Request, resp: Response): Promise<void> => {

  let ValidateData = UserScheme.validate(req.body)
  const userData = ValidateData.value

  if (ValidateData.error) {
    resp.status(400);
    resp.json({ code: 400, message: "non valide data", detail: ValidateData.error.message });
    return
  }

  regisUser(userData!.userEmail, userData!.userPassword)
    .then(( ) => {
      resp.json({ code: 204, message: "complete user create" })
    })
    .catch((err: AuthCustomError) => {
      resp.statusCode = err.statusCode || 500;
      resp.json({code: err.code, message: err.message, detail: err.detail, userEmail: userData!.userEmail});
    })

})

export default route;
