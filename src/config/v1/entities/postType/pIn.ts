import {TParam} from "../../../dataTypes";
import {PostType, PostTypeFields} from "./model";
import {activeOnly} from "../../../pIn";

export type TIn = PostTypeFields | 'activeOnly'
export const pIn : {[k in TIn]?: TParam} = {
    label: PostType.label,
    badge: PostType.badge,
    active: PostType.active,
    icon: PostType.icon,

    activeOnly,
}