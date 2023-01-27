import {TParam} from "../../../dataTypes";
import {activeOnly} from "../../../pIn";
import {CommentFields} from "./model";
import {Comment} from "./model";
import {commonPagination, CommonPaginationFields} from "../../common/pagination";
import {Img} from "../img/model";
import {pOut as pOutImg} from "../img/pOut";

export type TIn = CommentFields | CommonPaginationFields | 'activeOnly' | 'imgs'
export const pIn : {[k in TIn]?: TParam} = {
    postId: Comment.postId,
    text: Comment.text,
    rating: Comment.rating,
    imgs: {k: 'imgsArray', type: "array", name: "массив изображений", isOptional: true},
    active: Comment.active,

    activeOnly,

    limit: commonPagination.limit,
    offset: commonPagination.offset,
}