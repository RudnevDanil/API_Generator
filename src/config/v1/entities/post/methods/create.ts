import {TMethod, TParam, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.fullInfo,
        pOut.pointsCreated,
    ],
    note: "Успешный ответ"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание поста",
    shortName: "Создание",
    isAuthOnly: true,
    params: [
        pIn.title,
        pIn.address,
        pIn.text,
        pIn.rating,
        pIn.transportRating,
        pIn.facilities,
        pIn.lat,
        pIn.lon,
        pIn.payments,
        pIn.postType,
        pIn.imgs,
    ],
    responses: [
        successResponse,
        responsesBucket.wrongParams,
        responsesBucket.postNotFound,
        responsesBucket.unauthorized,
        responsesBucket.postAlreadyExist,
        responsesBucket.smthWentWrong,
    ]
}