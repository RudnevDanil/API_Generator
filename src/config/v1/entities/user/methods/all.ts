import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "users",
            type: "array",
            name: "массив пользователей",
            inner: [
                pOut.user,
                pOut.markList,
                pOut.dates,
                pOut.flags,
            ]
        },
    ],
    note: "Успешный ответ"
}

export const all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение списка пользователей",
    shortName: "Все",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [pIn.active],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.notHUser, responsesBucket.smthWentWrong]
}