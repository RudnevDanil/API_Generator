import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "posts",
            type: "array",
            name: "массив постов",
            inner: [
                pOut.fullInfo,
            ]
        },
        pOut.pagesInfo,
    ],
    note: "Успешный ответ"
}

export const all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение списка постов для админки",
    shortName: "Все",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [
        pIn.limit,
        pIn.offset,
    ],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.notHUser, responsesBucket.smthWentWrong]
}