
import { Sequelize } from "sequelize-typescript";
import { config, dialect} from "./db.config"
import UserPointsModel  from "../routes/user_routes/users/db/model";
import { User } from "../routes/user_routes/auth/db/model";

class Database {
    public sequelize: Sequelize;

    constructor() {
        this.connectToDatabase();
    }

    private async connectToDatabase() {
        this.sequelize = new Sequelize({
            database: config.DB,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            dialect: dialect,
            // pool: {
            //     max: config.pool.max,
            //     min: config.pool.min,
            //     acquire: config.pool.acquire,
            //     idle: config.pool.idle
            // },
            models: [UserPointsModel, User],
            
        });

        await this.sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch((err) => {
                console.error("Unable to connect to the Database:", err);
            });
        await this.sequelize
        .sync()
    }
}

export default Database;