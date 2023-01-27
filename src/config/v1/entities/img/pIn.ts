import {TParam} from "../../../dataTypes";
import {Img, ImgFields} from "./model";
import {commonPagination, CommonPaginationFields} from "../../common/pagination";


export type TIn = ImgFields | CommonPaginationFields
export const pIn : {[k in TIn]?: TParam} = {
    creatorId: Img.creatorId,
    postId: Img.postId,
    offerId: Img.offerId,
    offerToPost: Img.offerToPost,
    commentId: Img.commentId,

    limit: commonPagination.limit,
    offset: commonPagination.offset,
}