import {TMethod, TParam, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pOut} from "../pOut";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 200,
    params: [
        pOut.user,
        pOut.auth,
        pOut.markList,
    ],
    note: "Успешный ответ"
}

export let login : TMethod = {
    k: "login",
    method: "post",
    name: "Авторизация",
    shortName: "Авторизация",
    params: [
        {...pIn.login as TParam, note: "либо userName"},
        pIn.pass,
        pIn.deviceUid,
    ],
    responses: [successResponse, responsesBucket.wrongParams, responsesBucket.unauthorized, responsesBucket.smthWentWrong]
}