import {TParam} from "../../dataTypes";
import {Comment} from "./model";
import {getCommonDatesParam} from "../../common/dates";
import {User} from "../user/model";
import {pOut as pOutUser} from "../user/pOut";
import {commonPagesInfo} from "../../common/pagesInfo";
import {pOut as pOutImg} from "../img/pOut";

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
            pOutUser.userAsCreator,
            pOutImg.imgsInfo,
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