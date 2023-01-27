import {TMethod, TParam, TResponse} from "../../../../dataTypes";
import {
    response_400,
    response_400_comment_not_found,
    response_400_post_not_found,
    response_500
} from "../../../../responses";
import {pOut} from "../pOut";
import {allOptional} from "../../../../functions";
import {pIn} from "../pIn";

export const successResponse : TResponse = {
    code: 200,
    params: [
        pOut.imgsInfo,
        pOut.pagesInfo,
    ],
    note: "Успешный ответ"
}

export const imgsInfo : TMethod = {
    k: "imgsInfo",
    method: "get",
    name: "Получение списка изображений",
    shortName: "Список",
    params: [
        ...allOptional([
            pIn.creatorId,
            pIn.postId,
            pIn.offerId,
            pIn.offerToPost,
            pIn.commentId,
        ]) as TParam[],
        pIn.limit,
        pIn.offset,
    ],
    responses: [successResponse, response_400, response_400_post_not_found, response_400_comment_not_found, response_500]
}