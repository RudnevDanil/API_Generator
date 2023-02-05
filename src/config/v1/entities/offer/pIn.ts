import {TParam} from "../../dataTypes";
import {active} from "../../pIn";
import {Offer, OfferFields} from "./model";
import {commonPagination, CommonPaginationFields} from "../../common/pagination";

export type TIn = 
    OfferFields | 
    CommonPaginationFields |
    'active' | 'imgs' | 'remImgs';

export const pIn : {[k in TIn]?: TParam} = {

    postId: Offer.postId,

    note: Offer.note,
    title: Offer.title,
    address: Offer.address,
    transportRating: Offer.transportRating,
    text: Offer.text,
    facilities: Offer.facilities,
    payments: Offer.payments,
    coordinates: Offer.coordinates,
    postType: Offer.postType,
    source: Offer.source,

    imgs: {k: 'imgsArray', type: "array", name: "массив изображений", isOptional: true},

    active,
    limit: commonPagination.limit,
    offset: commonPagination.offset,
}