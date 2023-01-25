import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../../../responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.postType
    ],
    note: "Успешный ответ"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание типа точки",
    shortName: "Создание",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [
        pIn.label,
        pIn.badge,
        pIn.icon,
    ],
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}