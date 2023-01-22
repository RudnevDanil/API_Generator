import {TMethodGroup} from "../dataTypes";
import {all} from "./all/all";
import {login} from "./login/login";
import {logout} from "./logout/logout";
import {delete_} from "./delete/delete";
import {create} from "./create/create";
import {update} from "./update/update";

export let userGroup: TMethodGroup = {
    k: "user",
    name: "Пользователь",
    items: [all, login, logout, create, update, delete_]
}