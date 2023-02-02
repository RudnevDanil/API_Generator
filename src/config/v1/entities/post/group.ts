import {TMethodGroup, TResponse} from "../../../dataTypes";
import { all } from "./methods/all";
import { announce } from "./methods/announce";
import { byFilter } from "./methods/byFilter";
import { create } from "./methods/create";
import { delete_ } from "./methods/delete";
import { full } from "./methods/full";
import { suggest } from "./methods/suggest";
import { update } from "./methods/update";


export let post: TMethodGroup = {
    k: "post",
    name: "Пост",
    items: [all, announce, byFilter, suggest, full, delete_, create, update]
}