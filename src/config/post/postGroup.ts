import {TMethodGroup} from "../dataTypes";
import {create} from "./create/create";

export let postGroup: TMethodGroup = {
    k: "post",
    name: "Пост",
    items: [create]
}