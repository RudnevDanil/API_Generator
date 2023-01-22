import {TMethod, TInParam, TResponse} from "../../dataTypes";
import {response_400, response_401, response_500} from "../../responses";
import {getUserOut} from "../userOut";
import {userIn} from "../userIn";

export let successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "",
            type: "object",
            note: "пользователь с токеном и маркнутыми постами",
            inner: getUserOut({token: true, marked: true})
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
        userIn.userName,
        userIn.login,
        userIn.pass,
        userIn.deviceUid,
        {...userIn.avatar, isOptional: true},
    ],
    responses: [successResponse, response_400, response_400_userExist, response_401, response_500]
}