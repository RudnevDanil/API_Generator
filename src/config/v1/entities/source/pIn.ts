import {TParam} from "../../dataTypes";
import {Source, SourceFields} from "./model";

export type TIn = SourceFields | 'active'
export const pIn : {[k in TIn]?: TParam} = {
    label: Source.label,
    active: Source.active,
    icon: Source.icon,
}