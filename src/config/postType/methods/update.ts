import {TMethod, TInParam, TResponse} from "../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../responses";
import {getOut} from "../pOut";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 201,
    params: [
        {
            k: "smth",
            type: "object",
            inner: getOut({})
        },
    ],
    note: "Успешный ответ"
}

export let update : TMethod = {
    k: "update", // TODO добавить в рендер метод возможность делать /:id
    method: "put",
    name: "Обновление типа точки",
    shortName: "Обновление",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [
        pIn.label,
        pIn.badge,
        pIn.logo,
    ],
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}