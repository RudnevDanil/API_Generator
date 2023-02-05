import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pOut} from "../pOut";
import {pIn} from "../pIn";
import {allOptional} from "../../../functions";

export let successResponse : TResponse = {
    code: 200,
    params: [
        pOut.source
    ],
    note: "Успешный ответ"
}

export let update : TMethod = {
    k: "update", // TODO добавить в рендер метод возможность делать /:id
    method: "put",
    name: "Обновление ресурса",
    shortName: "Обновление",
    isAuthOnly: true,
    isHUserOnly: true,
    params: allOptional([
        pIn.label,
        pIn.icon,
    ]),
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.notHUser, responsesBucket.smthWentWrong]
}