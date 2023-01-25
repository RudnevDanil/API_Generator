import {TMethod, TResponse} from "../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../responses";
import {pOut} from "../pOut";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.source
    ],
    note: "Успешный ответ"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание ресурса",
    shortName: "Создание",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [
        pIn.label,
        pIn.icon,
    ],
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}