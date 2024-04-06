import UserPointsModel from "../db/model"
import { user_route } from "../dto/user_route.dto"

export async function getUserRoutes(userId: number): Promise<user_route[]> {

    const db_data = await UserPointsModel.findAll({where: { userID: userId}})
    const route_points = db_data.map((val) => {
        return {
            startPoint: { lat: val.startPointLat, lon: val.startPointLon },
            destPoint: { lat: val.destPointLat, lon: val.destPointLon }
        }
    })

    return route_points
}

export async function getUserRoute(userId: number, routeID: number): Promise<user_route> {

    const db_data = await UserPointsModel.findAll({where: { userID: userId, id: routeID}})
    const route_point = db_data.map((val) => {
        return {
            startPoint: { lat: val.startPointLat, lon: val.startPointLon },
            destPoint: { lat: val.destPointLat, lon: val.destPointLon }
        }
    })

    return route_point[0]
}

export async function addUserRoute(user_route: user_route, userId: number) {

    console.log(user_route);
    

    await UserPointsModel.create({
        startPointLat: user_route.startPoint.lat,
        startPointLon: user_route.startPoint.lon,
        destPointLat: user_route.destPoint.lat,
        destPointLon: user_route.destPoint.lat,
        userID: userId
    })
}
