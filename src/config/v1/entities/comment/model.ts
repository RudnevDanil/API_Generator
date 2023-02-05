import {TParam} from "../../dataTypes";
import {commonDates, CommonDatesFields} from "../../common/dates";
import {commonActive, CommonActiveField} from "../../common/active";
import {commonId, CommonIdField} from "../../common/id";

export type CommentFields =
    CommonIdField |
    CommonDatesFields |
    CommonActiveField |
    "postId" | "text" | "rating" | "imgsAmount"

export const Comment : {[k in CommentFields]: TParam} = {
    id: commonId,

    postId: {k : "postId", type: "MongoId", name: "пост"}, // завести через common
    text: {k : "text", type: "string", name: "текст", isOptional: true},
    rating: {k : "rating", type: "float", name: "рэйтинг", isOptional: true},
    imgsAmount: {k : "imgsAmount", type: "int", name: "кол-во изображений"},

    updated: commonDates.updated,
    created: commonDates.created,

    active: commonActive,
}