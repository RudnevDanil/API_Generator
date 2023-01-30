import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_500} from "../../../../responses";
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
    responses: [successResponse, response_400, response_500]
}