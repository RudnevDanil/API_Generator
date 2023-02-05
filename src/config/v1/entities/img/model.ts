import {TParam} from "../../dataTypes";
import {commonId, CommonIdField} from "../../common/id";
import {commonDates, CommonDatesFieldCreated} from "../../common/dates";

export type ImgFields = CommonIdField | CommonDatesFieldCreated |
    'creatorId' | 'userAvatarId' | 'postId' | 'offerId' | 'offerToPost' | 'commentId';
export const Img : {[k in ImgFields]: TParam} = {
    id: commonId,

    created: commonDates.created,
    creatorId: {k : "creatorId", type: "MongoId", name: "создатель"},
    userAvatarId: {k : "userAvatarId", type: "MongoId", name: "пользователь чей аватар"},
    postId: {k : "postId", type: "MongoId", name: "пост"},
    offerId: {k : "offerId", type: "MongoId", name: "из предложения"},
    offerToPost: {k : "offerToPost", type: "MongoId", name: "из предложения к посту"}, // todo выкглядит костылем
    commentId: {k : "commentId", type: "MongoId", name: "коммент"},

}