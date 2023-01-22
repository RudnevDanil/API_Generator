import {TMethod, TInParam, TResponse} from "../../dataTypes";
import {response_400, response_401, response_500} from "../../responses";
import {getUserOut} from "../userOut";
import {userIn} from "../userIn";

export let successResponse : TResponse = {
    code: 200,
    params: [
        {k: "", type: "object", note: "пользователь с токеном", inner: getUserOut({token: true})},
    ],
    note: "Успешный ответ"
}

export let login : TMethod = {
    k: "login",
    method: "post",
    name: "Авторизация",
    shortName: "Авторизация",
    params: [
        userIn.login,
        userIn.pass,
        userIn.deviceUid,
    ],
    responses: [successResponse, response_400, response_401, response_500]
}