import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../../../responses";
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
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}