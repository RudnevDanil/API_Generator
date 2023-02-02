import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../../../responses";
import {isAll} from "../../../../pIn";
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
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}