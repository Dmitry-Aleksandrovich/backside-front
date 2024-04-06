import { NonAttribute, Optional } from "sequelize";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import UserPointsModel from "../../users/db/model";


// export interface UserAttributes {
//     id: number
//     firstName: string
//     secondName: string
//     email: string
//     password: string
// }

// interface UserCreatesAttributes extends Optional<UserAttributes, "id"> {}

@Table({
    tableName: "user"
})
export class User extends Model{
    
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    id: number

    @Column({
        type: DataType.STRING,
        field: "firstName",
        allowNull: false
    })
    firstName: string

    @Column({
        type: DataType.STRING,
        field: "secondName",
        allowNull: false
    })
    secondName: string

    @Column({
        type: DataType.STRING,
        field: "email",
        allowNull: false,
        unique: true
    })
    email: string

    @Column({
        type: DataType.STRING,
        field: "password",
        allowNull: false
    })
    password: string

    @HasMany(()=>UserPointsModel, "userID")
    routs?: NonAttribute<UserPointsModel>
}