import {TMethod, TInParam, TResponse} from "../../dataTypes";
import {response_400, response_401, response_500} from "../../responses";
import {getOut} from "../pOut";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 201,
    params: [
        {
            k: "smth",
            type: "object",
            note: "пользователь с токеном и маркнутыми постами",
            inner: getOut({token: true, marked: true})
        },
    ],
    note: "Успешный ответ"
}

export const response_400_userExist : TResponse = {
    code: 400,
    msg: 'user with that login / userName already exist',
    note: "Ошибка параметров"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание пользователя",
    shortName: "Создание",
    isAuthOnly: true,
    params: [
        pIn.userName,
        pIn.login,
        pIn.pass,
        pIn.deviceUid,
        {...pIn.avatar, isOptional: true},
    ],
    responses: [successResponse, response_400, response_400_userExist, response_401, response_500]
}