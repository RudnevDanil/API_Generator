import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.user,
        pOut.auth,
    ],
    note: "Успешный ответ"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание пользователя",
    shortName: "Создание",
    params: [
        pIn.userName,
        pIn.login,
        pIn.pass,
        pIn.deviceUid,
        pIn.avatar,
    ],
    responses: [
        successResponse,
        responsesBucket.wrongParams,
        responsesBucket.userExist,
        responsesBucket.unauthorized,
        responsesBucket.smthWentWrong
    ]
}