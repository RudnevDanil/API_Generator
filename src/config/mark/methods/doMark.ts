import {TMethod, TResponse} from "../../dataTypes";
import {
    response_400,
    response_400_post_not_found,
    response_401,
    response_500
} from "../../responses";

export let successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "smth",
            type: "object",
            inner: []
        },
    ],
    note: "Успешный ответ"
}

export let doMark : TMethod = {
    k: "domark",
    method: "post",
    name: "Марк поста",
    shortName: "Марк",
    isAuthOnly: true,
    params: [
        {k: "postId", name: "пост"},
        {k: "markState", name: "новое состояние"},
    ],
    responses: [
        successResponse,
        response_400,
        response_400_post_not_found,
        response_401,
        response_500,
    ]
}