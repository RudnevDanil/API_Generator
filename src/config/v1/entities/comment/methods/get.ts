import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_500} from "../../../../responses";
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
    responses: [successResponse, response_400, response_500]
}