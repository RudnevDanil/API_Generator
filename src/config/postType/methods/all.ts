import {TInParam, TMethod, TResponse} from "../../dataTypes";
import {response_401, response_401_notHUser, response_500} from "../../responses";
import {getOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "postTypes",
            type: "array",
            note: "массив типов точек",
            inner: getOut({})
        },
    ],
    note: "Успешный ответ"
}

// todo naming
export const isAll : TInParam = {k: "isAll", name: "Все", note: "По умолчанию только активные", defaultValue: false, isOptional: true}

export const all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение типов точек",
    shortName: "Все",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [isAll],
    responses: [successResponse, response_401, response_401_notHUser, response_500]
}