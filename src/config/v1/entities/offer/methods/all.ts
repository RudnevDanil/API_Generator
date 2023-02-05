import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {isAll} from "../../../pIn";
import {pOut} from "../pOut";
import { pIn } from "../pIn";

export const successResponse : TResponse = {
    code: 200,
    params: [
        pOut.offers,
        pOut.pagesInfo,
    ],
    note: "Успешный ответ"
}

export const all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение списка предложений",
    shortName: "Все",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [
        pIn.postId,
        pIn.limit,
        pIn.offset,
        isAll,
    ],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.notHUser, responsesBucket.smthWentWrong]
}