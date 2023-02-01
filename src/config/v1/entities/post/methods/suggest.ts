import {TMethod, TResponse} from "../../../../dataTypes";
import { allOptional } from "../../../../functions";
import {response_400, response_500} from "../../../../responses";
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
                pOut.suggestInfo,
            ]
        },
        pOut.pagesInfo,
    ],
    note: "Успешный ответ"
}

export const suggest : TMethod = {
    k: "suggest",
    method: "get",
    name: "Получение списка постов для подсказок поиска",
    shortName: "Подсказки поиска",
    params: [
        pIn.limit,
        pIn.offset,
        pIn.lat,
        pIn.lon,
        pIn.searchLine,
    ],
    responses: [successResponse, response_400, response_500]
}