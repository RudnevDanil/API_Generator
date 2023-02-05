import {TMethod, TParam, TResponse} from "../../../dataTypes";
import {pIn} from "../pIn";
import {allHUserOnly, allOptional} from "../../../functions";
import {pOut} from "../pOut";
import { responsesBucket } from "../../../responses/responses";

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
        removeAvatar,
        ...allHUserOnly([
            pIn.userName,
            pIn.login,
            currentUser,
        ]) as TParam[]
    ]),
    responses: [
        successResponse,
        responsesBucket.wrongParams,
        responsesBucket.unauthorized,
        responsesBucket.notHUser,
        responsesBucket.smthWentWrong,
    ]
}