import {TMethod, TInParam, TResponse} from "../../../dataTypes";
import {
    response_400,
    response_400_comment_not_found,
    response_400_post_not_found,
    response_401,
    response_403,
    response_500
} from "../../../responses";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 201,
    params: [
        {
            k: "smth",
            type: "object",
            inner: []
        },
    ],
    note: "Успешный ответ"
}

export let update : TMethod = {
    k: "update",
    method: "put",
    name: "Обновление комента",
    shortName: "Обновление",
    isAuthOnly: true,
    isHUserOnly: true,
    params: [
        pIn.postId,
        pIn.commentId,
        pIn.rating,
        pIn.text,
        pIn.imgs,
    ],
    responses: [
        successResponse,
        response_400,
        response_400_post_not_found,
        response_400_comment_not_found,
        response_401,
        response_403,
        response_500,
    ]
}