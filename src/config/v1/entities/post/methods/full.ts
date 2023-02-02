import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../../../responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "posts",
            type: "array",
            name: "массив постов",
            inner: [
                pOut.fullInfo,
                pOut.authorizedComment
            ]
        },
        pOut.pagesInfo,
    ],
    note: "Успешный ответ"
}

export const full : TMethod = {
    k: "full",
    method: "get",
    name: "Получение поста",
    shortName: "Полностью",
    responses: [successResponse, response_400, response_500]
}