import {TMethod, TResponse} from "../../../../dataTypes";
import {response_400, response_500} from "../../../../responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";

export const successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "posts",
            type: "array",
            name: "массив постов",
            inner: [
                pOut.mapInfo,
            ]
        },
        pOut.pagesInfo,
    ],
    note: "Успешный ответ"
}

export const byFilter : TMethod = {
    k: "byFilter",
    method: "get",
    name: "Получение списка постов для по параметрам поиска",
    shortName: "Поиск",
    params: [
        pIn.limit,
        pIn.offset,
        pIn.ratingMin,
        pIn.ratingMax,
        pIn.lat,
        pIn.lon,
        pIn.transportRatingMax,
        pIn.radius,
        pIn.postTypes,
        pIn.paidFactor,
        pIn.amountOnly,
        pIn.facilities, // todo в рендер методе вложенность не обрабатывается
    ],
    responses: [successResponse, response_400, response_500]
}