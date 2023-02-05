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
                pOut.authorizedComment
            ]
        },
        pOut.pagesInfo,
    ],
    note: "Успешный ответ"
}

export const full : TMethod = {
    k: "full",
    method: "get",
    name: "Получение поста",
    shortName: "Полностью",
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.smthWentWrong]
}