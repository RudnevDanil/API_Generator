import {TMethod, TResponse} from "../../../../dataTypes";
import {response_401, response_500} from "../../../../responses";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "markList",
            type: "array",
            name: "массив маркнутых постов",
            inner: [
                // TODO отрисовка / нужна возможность создавать массив не только json но и просто значений, т е без ключа
                // todo брать postId из поста
                // old code -> {k: "postId", type: "MongoId"}
            ]
        },
    ],
    note: "Успешный ответ"
}

export const list : TMethod = {
    k: "list",
    method: "get",
    name: "Получение списка маркнутых постов по авторизации",
    shortName: "Все",
    isAuthOnly: true,
    responses: [successResponse, response_401, response_500]
}