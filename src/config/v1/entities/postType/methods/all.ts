import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../../../responses";
import {pOut} from "../pOut";
import {isAll} from "../../../../pIn";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "postTypes",
            type: "array",
            name: "массив типов точек",
            inner: [
                pOut.postType,
                pOut.flags,
            ]
        },
    ],
    note: "Успешный ответ"
}

export const all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение типов точек",
    shortName: "Все",
    params: [isAll],
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}