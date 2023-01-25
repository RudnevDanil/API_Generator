import {TMethod, TInParam, TResponse} from "../../../dataTypes";
import {
    response_400,
    response_400_post_not_found,
    response_401,
    response_401_notHUser,
    response_500
} from "../../../responses";
import {getOut} from "../pOut";
import {pIn} from "../pIn";

export let successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "smth",
            type: "object",
            inner: [
                {k: "commentId", type: "MongoId"},
                {k: "commentsCreated", type: "int"},
            ]
        },
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