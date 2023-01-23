import {TMethod, TResponse} from "../../dataTypes";
import {response_400, response_500} from "../../responses";
import {pIn} from "../pIn";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "comment",
            type: "array",
            note: "массив коментов",
            inner: [
                {k: "commentId", type: "MongoId"},
                {k: "creationDate", type: "date"},
                {k: "updated", type: "date"},
                {
                    k: "creator",
                    type: "object",
                    inner: [
                        {k: "userId", type: "MongoId"},
                        {k: "name", type: "string"},
                        {k: "avatar", type: "MongoId"},
                    ]
                },
                {k: "rating", type: "float"},
                {k: "text", type: "string"},
                {k: "imgs", type: "string", note: "вроде тут всегда null придет"},
                {k: "imgsAmount", type: "int"},
            ]
        },
        {
            k: "pagesInfo",
            type: "object",
            note: "инфо о запрошенной странице, по факту - все высчитывается из totalCount, ",
            inner: [
                {k: "pageSize", type: "int", note: "== limit"},
                {k: "currentPage", type: "int"},
                {k: "totalCount", type: "int"},
                {k: "totalPages", type: "int"},
            ]
        }
    ],
    note: "Успешный ответ"
}

export const get : TMethod = {
    k: "get",
    method: "get",
    name: "Получение списка коментов",
    shortName: "Все",
    params: [
        pIn.postId,
        pIn.limit,
        pIn.offset,
    ],
    responses: [successResponse, response_400, response_500]
}