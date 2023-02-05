import {TParam} from "../../dataTypes";
import {PostType, PostTypeFields} from "./model";

export type TIn = PostTypeFields | 'active'
export const pIn : {[k in TIn]?: TParam} = {
    label: PostType.label,
    badge: PostType.badge,
    active: PostType.active,
    icon: PostType.icon,
}