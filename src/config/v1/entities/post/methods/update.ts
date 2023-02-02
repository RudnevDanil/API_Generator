import {TMethod, TResponse, TParam} from "../../../../dataTypes";
import {
    response_400,
    response_400_post_not_found,
    response_401,
    response_403,
    response_500
} from "../../../../responses";
import {pIn} from "../pIn";
import {pOut} from "../pOut";
import {allHUserOnly, allOptional} from "../../../../functions";

export let successResponse : TResponse = {
    code: 200,
    params: [
        pOut.fullInfo,
    ],
    note: "Успешный ответ"
}

export let update : TMethod = {
    k: "update",
    method: "put",
    name: "Обновление поста",
    shortName: "Обновление",
    isAuthOnly: true,
    params: [
        ...allOptional([
            pIn.title,
            pIn.address,
            pIn.text,
            pIn.rating,
            pIn.transportRating,
            pIn.facilities,
            pIn.payments,
            pIn.postType,
            pIn.imgs,
            pIn.remImgs,
            
            ...allHUserOnly([
                pIn.lat,
                pIn.lon,
                pIn.sources,
            ]) as TParam[],
            pIn.verified,
        ]) as TParam[]
    ],
    responses: [
        successResponse,
        response_400,
        response_400_post_not_found,
        response_401,
        response_403,
        response_500,
    ]
}