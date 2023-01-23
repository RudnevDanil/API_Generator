import {TMethod, TResponse} from "../../dataTypes";
import {response_400, response_401, response_500} from "../../responses";
import {getOut} from "../pOut";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 200,
    params: [
        {k: "", type: "object", note: "пользователь с токеном", inner: getOut({token: true})},
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