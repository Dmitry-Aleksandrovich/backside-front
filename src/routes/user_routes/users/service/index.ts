import UserPointsModel from "../db/model"
import { user_route } from "../dto/user_route.dto"

export async function getUserRoutes(routeId: number): Promise<user_route[]> {

    const db_data = await UserPointsModel.findAll()
    const route_points = db_data.map((val) => {
        return {
            startPoint: { lat: val.startPointLat, lon: val.startPointLon },
            destPoint: { lat: val.destPointLat, lon: val.destPointLon }
        }
    })

    return route_points
}

export async function addUserRoute(user_route: user_route) {

    console.log(user_route);
    

    await UserPointsModel.create({
        startPointLat: user_route.startPoint.lat,
        startPointLon: user_route.startPoint.lon,
        destPointLat: user_route.destPoint.lat,
        destPointLon: user_route.destPoint.lat
    })
}