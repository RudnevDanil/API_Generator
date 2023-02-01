import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_400_post_not_found, response_500} from "../../../../responses";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        pOut.announceInfo
    ],
    note: "Успешный ответ"
}

export const announce : TMethod = {
    k: "announce",
    method: "get",
    name: "Получение краткого описания поста для превью",
    shortName: "Аннаунс",
    responses: [successResponse, response_400, response_400_post_not_found, response_500]
}