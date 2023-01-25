import {TParam} from "./dataTypes";


export const activeOnly: TParam = {
    k: "activeOnly",
    type: "bool",
    name: "только активные",
    defaultValue: "true"
}
export const isAll: TParam = {
    k: "activeOnly",
    type: "bool",
    name: "Все",
    note: "По умолчанию только активные",
    defaultValue: false,
    isOptional: true,
    isHUserOnly: true,
}