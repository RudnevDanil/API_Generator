import {TMethod, TResponse} from "../../dataTypes";
import {response_401, response_401_notHUser, response_500} from "../../responses";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 200,
    note: "Успешный ответ"
}

export let delete_ : TMethod = {
    k: "delete",
    method: "delete",
    name: "Удаление типа точки",
    note: "По факту - изменение active",
    shortName: "Удаление",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [{...pIn.active, isOptional: true, defaultValue: false}],
    responses: [successResponse, response_401, response_401_notHUser, response_500]
}