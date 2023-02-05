import {TParam} from "../../dataTypes";
import {Source} from "./model";

export type TPOutKeys = "source" | "flags"
export const pOut : {[k in TPOutKeys] : TParam} =  {
    source: {
        k: "source",
        name: "источник",
        type: "object",
        inner: [
            Source.id,
            Source.label,
            Source.icon,
        ]
    },
    flags: {
        k: "flags",
        name: "флаги",
        type: "object",
        inner: [
            Source.active,
        ],
        isHUserOnly: true
    },
}