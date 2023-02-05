import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
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
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.postNotFound, responsesBucket.smthWentWrong]
}