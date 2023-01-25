import {TMethod, TResponse} from "../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";
import {allOptional} from "../../functions";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.postType
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
    params: allOptional([
        pIn.label,
        pIn.badge,
        pIn.icon,
    ]),
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}