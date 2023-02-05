import {TMethod, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 201,
    params: [
        pOut.comment,
        pOut.commentsCreated,
    ],
    note: "Успешный ответ"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание комента",
    shortName: "Создание",
    isAuthOnly: true,
    params: [
        pIn.postId,
        pIn.rating,
        pIn.text,
        pIn.imgs,
    ],
    responses: [
        successResponse,
        responsesBucket.wrongParams,
        responsesBucket.postNotFound,
        responsesBucket.unauthorized,
        responsesBucket.commentAlreadyExist,
        responsesBucket.smthWentWrong,
    ]
}