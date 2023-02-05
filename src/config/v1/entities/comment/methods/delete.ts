import {TMethod, TParam, TResponse} from "../../../dataTypes";
import { responsesBucket } from "../../../responses/responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 200,
    note: "Успешный ответ",
    params: [
        pOut.commentsCreated,
    ]
}

export let delete_ : TMethod = {
    k: "delete",
    method: "delete",
    name: "Удаление комента",
    shortName: "Удаление",
    isAuthOnly: true,
    params: [
        pIn.postId,
        {...pIn.active as TParam, isOptional: true, defaultValue: false},
    ],
    responses: [
        successResponse,
        responsesBucket.wrongParams,
        responsesBucket.postNotFound,
        responsesBucket.commentNotFound,
        responsesBucket.unauthorized,
        responsesBucket.createdByAnotherUser,
        responsesBucket.smthWentWrong
    ]
}