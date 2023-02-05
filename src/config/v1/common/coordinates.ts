import {TParam} from "../dataTypes";

export type CommonCoordinatesFieldLat = 'lat'
export type CommonCoordinatesFieldLon = 'lon'
export type CommonCoordinatesFields = CommonCoordinatesFieldLat | CommonCoordinatesFieldLon
export const commonCoordinates: {[k in CommonCoordinatesFields]: TParam} = {
    lat: {k : "lat", type: "float", name: "долгота"},
    lon: {k : "lon", type: "float", name: "широта"},
}
export const commonCoordinatesObject: TParam = {
    k: "coordinates",
    name: "координаты",
    type: "object",
    inner: [
        commonCoordinates.lat,
        commonCoordinates.lon,
    ]
}
