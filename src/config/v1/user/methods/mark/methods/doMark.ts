import {TMethod, TParam, TResponse} from "../../../../../dataTypes";
import {
    response_400,
    response_400_post_not_found,
    response_401,
    response_500
} from "../../../../../responses";

export let successResponse : TResponse = {
    code: 200,
    note: "Успешный ответ"
}

let markState: TParam = {k: "markState", name: "новое состояние", type: "bool", isOptional: true, defaultValue: true}

export let doMark : TMethod = {
    k: "domark",
    method: "post",
    name: "Марк поста",
    shortName: "Марк",
    isAuthOnly: true,
    params: [
        // todo брать postId из поста
        // old code -> {k: "postId", name: "пост"},
        markState
    ],
    responses: [
        successResponse,
        response_400,
        response_400_post_not_found,
        response_401,
        response_500,
    ]
}