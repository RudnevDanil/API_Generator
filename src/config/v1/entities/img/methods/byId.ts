import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        pOut.img
    ],
    note: "Успешный ответ"
}

export const byId : TMethod = {
    k: "byId",
    method: "get",
    name: "Получение изображения",
    shortName: "Все",
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.smthWentWrong]
}