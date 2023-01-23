import {TMethod, TResponse} from "../../dataTypes";
import {
    response_400, response_400_comment_not_found,
    response_400_post_not_found,
    response_401,
    response_401_notHUser,
    response_403,
    response_500
} from "../../responses";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 200,
    note: "Успешный ответ",
    params: [
        {k: "commentsCreated", type: "int", note: "кол-во коментов у создателя после удаления"}
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
        pIn.commentId,
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