import {TMethod, TResponse} from "../../../../dataTypes";
import {response_401, response_401_notHUser, response_500} from "../../../../responses";
import {isAll} from "../../../../pIn";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "sources",
            type: "array",
            name: "массив ресурсов",
            inner: [
                pOut.source,
                pOut.flags,
            ]
        },
    ],
    note: "Успешный ответ"
}

export const all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение списка ресурсов",
    shortName: "Все",
    params: [isAll],
    responses: [successResponse, response_401, response_401_notHUser, response_500]
}