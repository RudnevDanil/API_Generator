import {TParam} from "../dataTypes";

export type SourceFields = "id" | "label" | "icon" | "active"
export const Source : {[k in SourceFields]: TParam} = {
    "id": {k : "id", type: "MongoId", name: "ID"},
    "label": {k : "label", type: "string", name: "название"},
    "icon": {k : "icon", type: "MongoId", name: "картинка", isOptional: true},
    "active": {k : "active", type: "bool", name: "активный"},
}