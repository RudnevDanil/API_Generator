import {TMethod, TResponse} from "../../dataTypes";
import {response_401, response_401_notHUser, response_500} from "../../responses";
import {getUserOut} from "../userOut";

export const usersResponse : TResponse = {
    code: 200,
    params: [
        {k: "users", type: "array", note: "массив пользователей", inner: getUserOut({})},
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
    responses: [usersResponse, response_401, response_401_notHUser, response_500]
}