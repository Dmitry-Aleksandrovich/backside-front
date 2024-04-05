import { user_route_return } from "../dto/user_route_ret.dto"


export async function getUserRoutes( routeId: number ): Promise<user_route_return[]> {
    
    const user_routes: user_route_return[] = [{pointOne: {lat: 8, lnt: 8}, pointTwo: {lat: 8, lnt: 8}}]

    return user_routes
}