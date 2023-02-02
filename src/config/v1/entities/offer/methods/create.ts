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
        pOut.offer,
    ],
    note: "Успешный ответ"
}

const response_409_offer_already_exist : TResponse = {
    code: 409,
    msg: 'offer already exist',
    note: "предложение с таких хэш уже существует к этому посту"
}

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание предложения",
    shortName: "Создание",
    isAuthOnly: true,
    params: [
        pIn.postId,
        pIn.note,
        pIn.title,
        pIn.address,
        pIn.transportRating,
        pIn.text,
        pIn.facilities,
        pIn.payments,
        pIn.coordinates,
        pIn.postType,
        pIn.source,
    ],
    responses: [
        successResponse,
        response_400,
        response_400_post_not_found,
        response_401,
        response_409_offer_already_exist,
        response_500,
    ]
}