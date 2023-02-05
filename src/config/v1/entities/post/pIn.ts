import {TParam} from "../../dataTypes";
import {active} from "../../pIn";
import {Post, PostFields} from "./model";
import {commonPagination, CommonPaginationFields} from "../../common/pagination";
import { commonCoordinates, CommonCoordinatesFieldLat, CommonCoordinatesFieldLon } from "../../common/coordinates";

export type TIn = 
    PostFields | CommonPaginationFields | 'active' | 'imgs' | 'remImgs' |
    'ratingMin' | 'ratingMax' | 'transportRatingMax' | 'radius' | 
    CommonCoordinatesFieldLat | CommonCoordinatesFieldLon | 
    "postTypes" | "paidFactor" | "amountOnly" | "facilities" | "searchLine" | "verified";

const regExpCoords = /-?\d{1,3}[.,]\d{2,20}[., ;][ ]?-?\d{1,3}[.,]\d{2,20}/;

export const pIn : {[k in TIn]?: TParam} = {

    active,

    title: Post.title,
    address: Post.address,
    text: Post.text,
    rating: Post.rating,
    transportRating: Post.transportRating,
    postType: Post.postType,
    payments: Post.payments,

    ratingMin: {k: "ratingMin", type: "float", name: "минимальный рейтинг", isOptional: true},
    ratingMax: {k: "ratingMax", type: "float", name: "максимальный рейтинг", isOptional: true},
    transportRatingMax: {k: "transportRatingMax", type: "float", name: "максимальная транспортная сложность", isOptional: true},
    radius: {k: "transportRatingMax", type: "float", name: "радиус", isOptional: true},

    lat: commonCoordinates.lat,
    lon: commonCoordinates.lon,

    paidFactor: {k: "paidFactor", type: "bool", name: "флаг обязательной платности", isOptional: true},
    amountOnly: {k: "amountOnly", type: "bool", name: "флаг вернуть только количество", isOptional: true},

    postTypes: {
        k: "posts",
        type: "array",
        name: "массив типов постов",
        inner: {k: "smth", name: "id типа поста", type: "MongoId"},
    },

    facilities: Post.facilities,
    
    searchLine: {
        k: "searchLine", 
        name: "строка запроса", 
        type: "string", 
        note: "по заголовку или адресу либо координаты формата " + regExpCoords,
    },

    verified: {k: "verified", type: "bool", name: "флаг верификации", isAuthOnly: true, isHUserOnly: true},

    sources: Post.sources,

    imgs: {k: 'imgsArray', type: "array", name: "массив изображений", isOptional: true},
    remImgs: {k: "remImgs", type: "array", name: "изображения к удалению" , inner: [{k: "smth", type: "MongoId", name: "id изображения"}]},

    limit: commonPagination.limit,
    offset: commonPagination.offset,
}