import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "comment",
            type: "array",
            name: "массив коментов",
            inner: [
                pOut.comment,
            ]
        },
        pOut.pagesInfo,
    ],
    note: "Успешный ответ"
}

export const get : TMethod = {
    k: "get",
    method: "get",
    name: "Получение списка коментов",
    shortName: "Все",
    params: [
        pIn.postId,
        pIn.limit,
        pIn.offset,
    ],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.smthWentWrong]
}