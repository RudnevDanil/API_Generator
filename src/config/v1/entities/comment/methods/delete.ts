import {TMethod, TParam, TResponse} from "../../../../dataTypes";
import {
    response_400, response_400_comment_not_found,
    response_400_post_not_found,
    response_401,
    response_403,
    response_500
} from "../../../../responses";
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
        response_400,
        response_400_post_not_found,
        response_400_comment_not_found,
        response_401,
        response_403,
        response_500
    ]
}