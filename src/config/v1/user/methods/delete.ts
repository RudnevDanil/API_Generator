import {TMethod, TResponse} from "../../../dataTypes";
import {response_401, response_500} from "../../../responses";

export let successResponse : TResponse = {
    code: 200,
    note: "Успешный ответ"
}

export let delete_ : TMethod = {
    k: "delete",
    method: "delete",
    name: "Удаление пльзователя",
    note: "По факту - сброс пароля",
    shortName: "Удаление",
    isAuthOnly: true,
    responses: [successResponse, response_401, response_500]
}