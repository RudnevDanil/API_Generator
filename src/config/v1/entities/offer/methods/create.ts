import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.offer,
    ],
    note: "Успешный ответ"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание предложения",
    shortName: "Создание",
    isAuthOnly: true,
    params: [
        pIn.postId,
        pIn.note,
        pIn.title,
        pIn.address,
        pIn.transportRating,
        pIn.text,
        pIn.facilities,
        pIn.payments,
        pIn.coordinates,
        pIn.postType,
        pIn.source,
    ],
    responses: [
        successResponse,
        responsesBucket.wrongParams,
        responsesBucket.postNotFound,
        responsesBucket.unauthorized,
        responsesBucket.offerAlreadyExist,
        responsesBucket.smthWentWrong,
    ]
}