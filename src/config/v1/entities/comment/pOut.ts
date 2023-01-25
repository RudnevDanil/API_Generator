import {TParam} from "../../../dataTypes";
import {Comment} from "./model";
import {getCommonDatesParam} from "../../common/dates";
import {User} from "../user/model";
import {commonPagesInfo} from "../../common/pagesInfo";

export type TPOutKeys = "comment" | 'commentsCreated' | "dates" | "pagesInfo" | "flags"
export const pOut : {[k in TPOutKeys] : TParam} =  {
    comment: {
        k: "comment",
        name: "комментарий",
        type: "object",
        inner: [
            Comment.id,
            Comment.postId,
            Comment.text,
            Comment.rating,
            Comment.imgsAmount,
            // todo creator
            /*{
                k: "creator",
                type: "object",
                inner: [
                    {k: "userId", type: "MongoId"},
                    {k: "name", type: "string"},
                    {k: "avatar", type: "MongoId"},
                ]
            },*/
            // todo imgs завести через основные или нет?
        ]
    },
    commentsCreated: User.commentsCreated,
    dates: getCommonDatesParam([
        Comment.created,
        Comment.updated,
    ]),
    pagesInfo: commonPagesInfo,
    flags: {
        k: "flags",
        name: "флаги",
        type: "object",
        inner: [
            Comment.active,
        ],
        isHUserOnly: true
    },
}