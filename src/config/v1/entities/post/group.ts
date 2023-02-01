import {TMethodGroup, TResponse} from "../../../dataTypes";
import { all } from "./methods/all";
import { announce } from "./methods/announce";
import { byFilter } from "./methods/byFilter";
import { suggest } from "./methods/suggest";


export let post: TMethodGroup = {
    k: "post",
    name: "Пост",
    items: [all, announce, byFilter, suggest]
}