import {TMethod, TParam, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {User} from "../model";
import {pIn} from "../../source/pIn";

export let successResponse : TResponse = {
    code: 200,
    note: "Успешный ответ"
}

export let delete_ : TMethod = {
    k: "delete",
    method: "delete",
    name: "Удаление пльзователя",
    note: "По факту - сброс пароля",
    shortName: "Удаление",
    isAuthOnly: true,
    params: [{...pIn.active as TParam, isOptional: true, defaultValue: false}],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.smthWentWrong]
}