import {TParam} from "../../dataTypes";

export type PostTypeFields = "id" | "label" | "badge" | "icon" | "active"
export const PostType : {[k in PostTypeFields]: TParam} = {
    "id": {k : "id", type: "MongoId", name: "ID"},
    "label": {k : "label", type: "string", name: "название"},
    "badge": {k : "badge", type: "string", name: "бэйдж", isHUserOnly: true},
    "icon": {k : "icon", type: "MongoId", name: "картинка", isOptional: true},
    "active": {k : "active", type: "bool", name: "активный", isHUserOnly: true},
}