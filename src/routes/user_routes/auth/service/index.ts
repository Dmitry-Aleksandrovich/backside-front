import { User } from "../db/model";
import * as cry from "crypto"
import {InvalidUserDataError, UserNotFoundError, UserIsExistError} from "../exceptions/AuthExceptions";
import { MyLogService } from "../../../utils/CustomLog";
import { sign } from "jsonwebtoken";
import { env } from "../../../../env";



export async function LoginUser(userEmail: string, userPassword: string): Promise<string> {
    const hasUser = await User.findOne({where: {email: userEmail}})

    if (!hasUser) {
        throw new UserNotFoundError();
    }

    const passHash = cry.createHash("sha256").update(userPassword).digest("hex");

    if (passHash !== hasUser!.password) {
        throw new InvalidUserDataError();
    }

    const token = sign({ id: hasUser!.id, email: hasUser!.email }, env.TOKEN_SECRET, { expiresIn: "1d" });
    
    // MyLogService("user login")
    
    return token;
}

export async function regisUser(userEmail: string, userPassword: string, name: string): Promise<string> {
    const hasUser = await User.findOne({where: {email: userEmail}});
    const sName = name.split(" ");

    if (hasUser) {
        throw new UserIsExistError();
    }

    const hash = cry.createHash('sha256');
    userPassword = hash.update(userPassword).digest("hex");

    let dbUser = await User.create({ firstName: sName[0], secondName: sName[1], email: userEmail, password: userPassword })

    const token = sign({ id: dbUser!.id, email: dbUser!.email }, env.TOKEN_SECRET, { expiresIn: "1d" });
    

    MyLogService(`create new user ${dbUser.email}`);
    return token;
}
