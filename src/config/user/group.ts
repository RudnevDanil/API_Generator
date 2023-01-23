import {TMethodGroup} from "../dataTypes";
import {all} from "./methods/all";
import {login} from "./methods/login";
import {logout} from "./methods/logout";
import {delete_} from "./methods/delete";
import {create} from "./methods/create";
import {update} from "./methods/update";

export let group: TMethodGroup = {
    k: "user",
    name: "Пользователь",
    items: [all, login, logout, create, update, delete_]
}