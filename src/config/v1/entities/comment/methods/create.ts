import {TMethod, TResponse} from "../../../../dataTypes";
import {
    response_400,
    response_400_post_not_found,
    response_401,
    response_500
} from "../../../../responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export let successResponse : TResponse = {
    code: 200,
    params: [
        pOut.comment,
        pOut.commentsCreated,
    ],
    note: "Успешный ответ"
}

const response_409_comment_already_exist : TResponse = {
    code: 409,
    msg: 'user already have comment at that post',
    note: "У этого пользователя уже есть комент под этим постом"
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
        response_400,
        response_400_post_not_found,
        response_401,
        response_409_comment_already_exist,
        response_500,
    ]
}