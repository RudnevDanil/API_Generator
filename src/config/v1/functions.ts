import {TParam} from "./dataTypes";

type TAllArrTParam = (TParam | undefined)[] | undefined;

const all = (
    arr: TAllArrTParam,
    key: "isOptional" | "isAuthOnly" | "isHUserOnly",
    value = true
) : TAllArrTParam =>
    (arr || []).map(el => ({...el, [key]: value})) as TAllArrTParam


export const allOptional = (arr: TAllArrTParam, value = true) : TAllArrTParam =>
    all(arr, "isOptional", value) as TAllArrTParam

export const allHUserOnly = (arr: TAllArrTParam, value = true) : TAllArrTParam =>
    all(arr, "isHUserOnly", value) as TAllArrTParam

export const allAuthOnly = (arr: TAllArrTParam, value = true) : TAllArrTParam =>
    all(arr, "isAuthOnly", value) as TAllArrTParam
