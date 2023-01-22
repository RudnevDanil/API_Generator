import {TInParam} from "./dataTypes";

export const allOptional = (arr: TInParam[]) => (arr || []).map(el => ({...el, isOptional: true}))