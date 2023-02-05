import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";

export let successResponse : TResponse = {
    code: 200,
    note: "Успешный ответ"
}

export let logout : TMethod = {
    k: "logout",
    method: "post",
    name: "Деавторизация",
    shortName: "Деавторизация",
    isAuthOnly: true,
    responses: [successResponse, responsesBucket.unauthorized, responsesBucket.smthWentWrong]
}