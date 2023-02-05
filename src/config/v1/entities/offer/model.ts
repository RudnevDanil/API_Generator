import {TParam} from "../../dataTypes";
import {commonDates, CommonDatesFields} from "../../common/dates";
import {commonActive, CommonActiveField} from "../../common/active";
import {commonId, CommonIdField} from "../../common/id";
import {commonCoordinatesObject} from "../../common/coordinates";
import {commonPaymentsObject} from "../../common/payments";
import { Post } from "../post/model";

export type OfferFields =
    CommonIdField |
    "postId" | "createdBy" | "hash" |
    CommonActiveField | 
    CommonDatesFields |
    "note" | "postType" | "source" |
    "title" | "address" | "text" |
    "transportRating" |
    "facilities" | "payments" | "coordinates" |
    "imgsAmount";

export const Offer : {[k in OfferFields]: TParam} = {
    id: commonId,
    postId: {k: "postId", type: "MongoId", name: "пост"},
    createdBy: {k: "createdBy", type: "MongoId", name: "создатель"},
    hash: {k: "hash", type: "string", name: "хэш для исключения дублирования"},

    updated: commonDates.updated,
    created: commonDates.created,
    active: commonActive,


    note: {k : "note", type: "string", name: "Заметка", isOptional: true},
    title: {...Post.title, isOptional: true},
    address: {...Post.address, isOptional: true},
    transportRating: {...Post.transportRating, isOptional: true},
    text: {...Post.text, isOptional: true},
    facilities: {...Post.facilities, isOptional: true, note: "только true или false, без null"},
    payments: {...commonPaymentsObject, isOptional: true},
    coordinates: {...commonCoordinatesObject, isOptional: true},
    postType: {...Post.postType, isOptional: true},
    source: {k: "source", type: "MongoId", name: "ресурс", note: "один!", isOptional: true},
    imgsAmount: {k: "imgsAmount", type: "int", name: "кол-во изображений", isOptional: true},
}