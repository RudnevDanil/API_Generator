import {TParam} from "../dataTypes";

const fArray = [
    "water", "spring", "shower", "playground", "cafe",
    "trash", "toilet", "socket", "shadow", "surfspot",
    "lake", "waterfall", "altitude", "forest", "viewpoint",
    "fishing", "sea", "city", "parking", "camp",
    "wild", "nature", "laundry", "river", "lte",
    "wifi", "shop", "hunting", "sauna", "pool",
    "gas"
] as const;

type facilitiesField = typeof fArray[number];
type TCommonPayments = {[k in facilitiesField]: TParam};
export const commonPayments: TCommonPayments =
    fArray.reduce((s: {}, k) => {
        (s as TCommonPayments)[k] = {
            k,
            name: k,
            type: "bool",
        };
        return s;
    }, {}) as TCommonPayments;

export const commonFacilities : TParam = {
    k: "facilities",
    type: "object",
    name: "инфраструктура",
    inner: Object.values(commonPayments)
}