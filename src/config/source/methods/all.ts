import {TInParam, TMethod, TResponse} from "../../dataTypes";
import {response_401, response_401_notHUser, response_500} from "../../responses";
import {getOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "sources",
            type: "array",
            note: "массив ресурсов",
            inner: getOut({})
        },
    ],
    note: "Успешный ответ"
}

export const userName : TInParam = {k: "isAll", name: "Все", note: "По умолчанию только активные", defaultValue: false, isOptional: true}

export const all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение списка ресурсов",
    shortName: "Все",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [userName],
    responses: [successResponse, response_401, response_401_notHUser, response_500]
}