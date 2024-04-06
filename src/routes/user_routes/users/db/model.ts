
import { Optional } from "sequelize";
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../../auth/db/model"

export interface UserAttributes {
    id: number;
    startPointLat: number;
    startPointLon: number;
    destPointLat: number;
    destPointLon: number;
}

interface PersonCreatesAttributes extends Optional<UserAttributes, "id"> {}


@Table({
    tableName: "user_points"
})
class UserPointsModel extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    declare id: number;

    @Column({
        type: DataType.DOUBLE,
        field: "startPointLat"
    })
    declare startPointLat: number;

    @Column({
        type: DataType.DOUBLE,
        field: "startPointLon"
    })
    declare startPointLon: number;

    @Column({
        type: DataType.DOUBLE,
        field: "destPointLat"
    })
    declare destPointLat: number;

    @Column({
        type: DataType.DOUBLE,
        field: "destPointLon"
    })
    declare destPointLon: number;

    @Column({
        type: DataType.INTEGER,
        field: "userID"
    })

    // @BelongsTo(() => User)
    @ForeignKey(() => User)
    declare userID: number
}

export default UserPointsModel