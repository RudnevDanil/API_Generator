import {TParam} from "../../../dataTypes";
import {Offer} from "./model";
import {commonPagesInfo, CommonPagesInfoFields} from "../../common/pagesInfo";
import { getCommonDatesParam } from "../../common/dates";
import { commonActive } from "../../common/active";

const offer: TParam = {
    k: "offer",
    name: "предложение",
    type: "object",
    inner: [
        Offer.id,
        Offer.postId,
        Offer.createdBy,
        getCommonDatesParam([
            Offer.updated,
            Offer.created,
        ]),
        commonActive, 
        Offer.note,
        Offer.title,
        Offer.address,
        Offer.transportRating,
        Offer.facilities,
        Offer.payments,
        Offer.coordinates,
        Offer.postType,
        Offer.source,
        Offer.imgsAmount,
    ]
}

const offers: TParam = {
    k: "offers",
    name: "предложения",
    type: "array",
    inner: [
        offer
    ]
}

export type TPOutKeys = "offer" | 'offers' | CommonPagesInfoFields
export const pOut : {[k in TPOutKeys] : TParam} =  {
    offer,
    offers,
    pagesInfo: commonPagesInfo,
}