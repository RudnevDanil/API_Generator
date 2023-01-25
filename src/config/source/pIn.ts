import {TParam} from "../dataTypes";
import {Source, SourceFields} from "./model";
import {activeOnly} from "../pIn";

export type TIn = SourceFields | 'activeOnly'
export const pIn : {[k in TIn]?: TParam} = {
    label: Source.label,
    active: Source.active,
    icon: Source.icon,

    activeOnly,
}