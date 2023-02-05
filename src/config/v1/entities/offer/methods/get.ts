import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
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
    responses: [successResponse, responsesBucket.unauthorized, responsesBucket.notHUser, responsesBucket.smthWentWrong]
}