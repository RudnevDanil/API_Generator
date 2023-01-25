import {TMethod, TResponse} from "../../../dataTypes";
import {response_400, response_401, response_500} from "../../../responses";
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
    params: [
        pIn.userName,
        pIn.login,
        pIn.pass,
        pIn.deviceUid,
        pIn.avatar,
    ],
    responses: [
        successResponse,
        response_400, // todo store requests at responses.400.user_exist
        response_400_userExist,
        response_401,
        response_500
    ]
}