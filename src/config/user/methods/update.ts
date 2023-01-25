import {TMethod, TParam, TResponse} from "../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../responses";
import {pIn} from "../pIn";
import {allHUserOnly, allOptional} from "../../functions";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 200,
    params: [
        pOut.user,
        pOut.auth,
        pOut.markList,
    ],
    note: "Успешный ответ"
}

let removeAvatar: TParam = {
    k: "removeAvatar",
    type: "bool",
    name: "Флаг удаления аватара",
    note: "удалить может только супер. обычный смертный пусть заменяет"
}

let currentUser: TParam = {
    k: "currentUser",
    type: "bool",
    name: "Эмуляция действий пользователя"
}

export let update: TMethod = {
    k: "update",
    method: "put",
    name: "Обновление пользователя",
    shortName: "Обновление",
    isAuthOnly: true,
    params: allOptional([
        {...pIn.pass as TParam, note: "new pass"},
        pIn.avatar,
        ...allHUserOnly([
            pIn.userName,
            pIn.login,
            removeAvatar,
            currentUser,
        ]) as []
    ]),
    responses: [
        successResponse,
        response_400,
        response_401,
        response_401_notHUser,
        response_500
    ]
}