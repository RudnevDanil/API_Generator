import {TMethod, TResponse} from "../../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../../responses";
import {pOut} from "../pOut";
import {pIn} from "../pIn";
import {allOptional} from "../../../functions";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.source
    ],
    note: "Успешный ответ"
}

export let update : TMethod = {
    k: "update", // TODO добавить в рендер метод возможность делать /:id
    method: "put",
    name: "Обновление ресурса",
    shortName: "Обновление",
    isAuthOnly: true,
    isHUserOnly: true,
    params: allOptional([
        pIn.label,
        pIn.icon,
    ]),
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}