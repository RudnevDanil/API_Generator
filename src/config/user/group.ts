import {TMethodGroup} from "../dataTypes";
import {all} from "./methods/all";
import {login} from "./methods/login";
import {logout} from "./methods/logout";
import {delete_} from "./methods/delete";
import {create} from "./methods/create";
import {update} from "./methods/update";

export let user: TMethodGroup = {
    k: "user",
    name: "Пользователь",
    items: [
        all,
        login,
        logout,
        create,
        update,
        delete_,

        // todo было бы круто объединить mark. нужно вложенность любого уровня обработать на рендере

    ]
}