import {TParam} from "../../../dataTypes";
import {commonId, CommonIdField} from "../../common/id";
import {commonDates, CommonDatesFieldCreated} from "../../common/dates";
import {User} from "../user/model";

export type ImgFields = CommonIdField | CommonDatesFieldCreated |
    'creatorId' | 'postId' | 'offerId' | 'offerToPost' | 'commentId'
export const Img : {[k in ImgFields]: TParam} = {
    id: commonId,

    created: commonDates.created,

    creatorId: {k : "creatorId", type: "MongoId", name: "создатель"},
    postId: {k : "postId", type: "MongoId", name: "пост"},
    offerId: {k : "offerId", type: "MongoId", name: "из предложения"},
    offerToPost: {k : "offerToPost", type: "MongoId", name: "из предложения к посту"}, // todo выкглядит костылем
    commentId: {k : "commentId", type: "MongoId", name: "коммент"},

}