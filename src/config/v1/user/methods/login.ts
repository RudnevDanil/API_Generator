import {TMethod, TResponse} from "../../../dataTypes";
import {response_400, response_401, response_500} from "../../../responses";
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
        pIn.login,
        pIn.pass,
        pIn.deviceUid,
    ],
    responses: [successResponse, response_400, response_401, response_500]
}