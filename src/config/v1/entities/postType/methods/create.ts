import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.postType
    ],
    note: "Успешный ответ"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание типа точки",
    shortName: "Создание",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [
        pIn.label,
        pIn.badge,
        pIn.icon,
    ],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.notHUser, responsesBucket.smthWentWrong]
}