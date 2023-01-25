import {TParam} from "../../../dataTypes";
import {activeOnly} from "../../../pIn";
import {CommentFields} from "./model";
import {Comment} from "./model";
import {commonPagination, CommonPaginationFields} from "../../common/pagination";

export type TIn = CommentFields | CommonPaginationFields | 'activeOnly'
export const pIn : {[k in TIn]?: TParam} = {
    postId: Comment.postId,
    text: Comment.text,
    rating: Comment.rating,
    active: Comment.active,

    activeOnly,

    limit: commonPagination.limit,
    offset: commonPagination.offset,
}