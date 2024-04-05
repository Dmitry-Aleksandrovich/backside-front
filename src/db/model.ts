
import { Optional } from "sequelize";
import { Model, Table, Column, DataType } from "sequelize-typescript";

interface PersonAttributes {
    startPointLat: number;
    startPointLon: number;
    destPointLat: number;
    destPointLon: number;
}

// interface PersonCreatesAttributes extends Optional<PersonAttributes, "id"> {}


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
}

export default UserPointsModel