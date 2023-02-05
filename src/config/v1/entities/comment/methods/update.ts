import {TMethod, TResponse, TParam} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";
import {allOptional} from "../../../functions";

export let successResponse : TResponse = {
    code: 200,
    params: [
        pOut.comment,
    ],
    note: "Успешный ответ"
}

export let update : TMethod = {
    k: "update",
    method: "put",
    name: "Обновление комента",
    shortName: "Обновление",
    isAuthOnly: true,
    params: [
        pIn.postId,
        ...allOptional([
            pIn.rating,
            pIn.text,
            pIn.imgs,
        ]) as TParam[]
    ],
    responses: [
        successResponse,
        responsesBucket.wrongParams,
        responsesBucket.postNotFound,
        responsesBucket.commentNotFound,
        responsesBucket.unauthorized,
        responsesBucket.createdByAnotherUser,
        responsesBucket.smthWentWrong,
    ]
}