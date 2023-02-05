import {TParam} from "./dataTypes";


export const active: TParam = {
    k: "active",
    type: "bool",
    name: "только активные",
    defaultValue: "true"
}
export const isAll: TParam = {
    k: "isAll",
    type: "bool",
    name: "Все",
    note: "По умолчанию только активные",
    defaultValue: false,
    isOptional: true,
    isHUserOnly: true,
}