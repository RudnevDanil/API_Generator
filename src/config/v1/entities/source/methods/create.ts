import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pOut} from "../pOut";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.source
    ],
    note: "Успешный ответ"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание ресурса",
    shortName: "Создание",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [
        pIn.label,
        pIn.icon,
    ],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.notHUser, responsesBucket.smthWentWrong]
}