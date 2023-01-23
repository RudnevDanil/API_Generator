import {TMethodGroup} from "../dataTypes";
import {all} from "./methods/all";
import {create} from "./methods/create";
import {update} from "./methods/update";
import {delete_} from "./methods/delete";

export let source: TMethodGroup = {
    k: "source",
    name: "Ресурс",
    items: [all, create, update, delete_]
}