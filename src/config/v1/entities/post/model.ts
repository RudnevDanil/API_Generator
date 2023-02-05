import {TParam} from "../../dataTypes";
import {commonDates, CommonDatesFields} from "../../common/dates";
import {commonActive, CommonActiveField} from "../../common/active";
import {commonId, CommonIdField} from "../../common/id";
import {commonCoordinatesObject} from "../../common/coordinates";
import {commonPaymentsObject} from "../../common/payments";
import {commonFacilities} from "../../common/facilities";

export type PostFields =
    CommonIdField |
    CommonActiveField |
    CommonDatesFields |
    "firstVerified" | "verified" |
    "postType" | "sources" |
    "title" | "address" | "text" |
    "creator" |
    "transportRating" | "rating" |
    "imgsAmount" | "ratesAmount" | "commentsAmount" |
    "facilities" | "payments" | "coordinates";

export const Post : {[k in PostFields]: TParam} = {
    id: commonId,

    firstVerified: {k: "firstVerified", type: "bool", name: "первичная верификация", isHUserOnly: true},
    verified: {k: "verified", type: "bool", name: "верификация", isHUserOnly: true},
    postType: {k: "postType", type: "MongoId", name: "тип точки", isOptional: true},
    sources: {
        k: "sources",
        type: "array",
        inner: [
            // todo вот пример что id нада заводить через pOut только там делать отдельный sourceId
            // либо из можели брать id и определять ключ. не так красиво, зато четко с точки зрения логики
            // можно под это дело функцию написать типа change(Source.id, {k: "sourceId"}) которая разрулит вопрос типов и их небязательности
            {k: "smth", type: "MongoId", name: "ID источника"}
        ],
        name: "источники"
    },
    title: {k : "title", type: "string", name: "Название"},
    address: {k : "address", type: "string", name: "Адрес", isOptional: true},
    text: {k : "text", type: "string", name: "Описание", isOptional: true},

    coordinates: commonCoordinatesObject,

    creator: {k : "creator", type: "MongoId", name: "создатель"},

    transportRating: {k : "transportRating", type: "int", name: "Сложность точки", isOptional: true},
    rating: {k : "rating", type: "float", name: "рэйтинг", isOptional: true},

    imgsAmount: {k : "imgsAmount", type: "int", name: "кол-во изображений"},
    ratesAmount: {k : "ratesAmount", type: "int", name: "кол-во оценок"},
    commentsAmount: {k : "commentsAmount", type: "int", name: "кол-во коментов"},

    facilities: commonFacilities,
    payments: commonPaymentsObject,

    updated: commonDates.updated,
    created: commonDates.created,

    active: commonActive,

}