import {TMethodGroup} from "../../dataTypes";
import {all} from "./methods/all";
import {create} from "./methods/create";
import {update} from "./methods/update";
import {delete_} from "./methods/delete";

export let postType: TMethodGroup = {
    k: "postType",
    name: "Тип точки",
    items: [all, create, update, delete_]
}