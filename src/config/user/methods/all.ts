import {TMethod, TResponse} from "../../dataTypes";
import {response_401, response_401_notHUser, response_500} from "../../responses";
import {getOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {k: "users", type: "array", note: "массив пользователей", inner: getOut({})},
    ],
    note: "Успешный ответ"
}

export const all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение списка пользователей",
    shortName: "Все",
    isAuthOnly: true,
    isHUserOnly: true,
    responses: [successResponse, response_401, response_401_notHUser, response_500]
}