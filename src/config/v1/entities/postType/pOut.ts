import {TParam} from "../../dataTypes";
import {PostType} from "./model";

export type TPOutKeys = "postType" | "flags"
export const pOut : {[k in TPOutKeys] : TParam} =  {
    postType: {
        k: "postType",
        name: "тип точки",
        type: "object",
        inner: [
            PostType.id,
            PostType.label,
            PostType.badge,
            PostType.icon,
        ]
    },
    flags: {
        k: "flags",
        name: "флаги",
        type: "object",
        inner: [
            PostType.active,
        ],
        isHUserOnly: true
    },
}