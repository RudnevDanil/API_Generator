import {TMethod, TParam, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 200,
    note: "Успешный ответ"
}

export let delete_ : TMethod = {
    k: "delete",
    method: "delete",
    name: "Удаление предложения",
    note: "По факту - изменение active",
    shortName: "Удаление",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [{...pIn.active as TParam, isOptional: true, defaultValue: false}],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.notHUser, responsesBucket.smthWentWrong]
}