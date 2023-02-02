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
    code: 201,
    params: [
        pOut.fullInfo,
        pOut.pointsCreated,
    ],
    note: "Успешный ответ"
}

const response_409_post_already_exist : TResponse = {
    code: 409,
    msg: 'there are some posts near',
    note: "Возле этой точки уже есть посты"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание поста",
    shortName: "Создание",
    isAuthOnly: true,
    params: [
        pIn.title,
        pIn.address,
        pIn.text,
        pIn.rating,
        pIn.transportRating,
        pIn.facilities,
        pIn.lat,
        pIn.lon,
        pIn.payments,
        pIn.postType,
        pIn.imgs,
    ],
    responses: [
        successResponse,
        response_400,
        response_400_post_not_found,
        response_401,
        response_409_post_already_exist,
        response_500,
    ]
}