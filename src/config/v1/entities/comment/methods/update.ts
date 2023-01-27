import {TMethod, TResponse, TParam} from "../../../../dataTypes";
import {
    response_400,
    response_400_comment_not_found,
    response_400_post_not_found,
    response_401,
    response_403,
    response_500
} from "../../../../responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";
import {allOptional} from "../../../../functions";

export let successResponse : TResponse = {
    code: 201,
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
        response_400,
        response_400_post_not_found,
        response_400_comment_not_found,
        response_401,
        response_403,
        response_500,
    ]
}