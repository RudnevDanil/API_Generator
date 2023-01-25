import {TMethodGroup, TResponse} from "../../../dataTypes";
import {get} from "./methods/get";
import {create} from "./methods/create";
import {update} from "./methods/update";
import {delete_} from "./methods/delete";

export let comment: TMethodGroup = {
    k: "comment",
    name: "Коммент",
    items: [get, create, update, delete_]
}