import {TMethod, TResponse} from "../../../../dataTypes";
import {response_401, response_401_notHUser, response_500} from "../../../../responses";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        pOut.offer,
    ],
    note: "Успешный ответ"
}

export const get : TMethod = {
    k: "get",
    method: "get",
    name: "Получение предложения",
    shortName: "Все",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [],
    responses: [successResponse, response_401, response_401_notHUser, response_500]
}