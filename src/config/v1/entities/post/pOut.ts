import {TParam} from "../../../dataTypes";
import {Post} from "./model";
import {commonPagesInfo} from "../../common/pagesInfo";
import {commonPayments} from "../../common/payments";
import {allHUserOnly} from "../../../functions";

import {pOut as pOutImg} from "../img/pOut";
import {pOut as pOutUser} from "../user/pOut";
import {pOut as pOutComment} from "../comment/pOut";
import { User } from "../user/model";

const mapInfo: TParam = {
    k: "mapInfo",
    name: "описание для вывода на карте",
    type: "object",
    inner: [
        Post.id,
        Post.postType,
        commonPayments.isPaid,
        Post.coordinates,
        Post.rating,
        Post.transportRating,
    ]
}

const suggestInfo: TParam = {
    k: "suggestInfo",
    name: "описание для подсказок поиска",
    type: "object",
    inner: [
        ...mapInfo.inner as TParam[],
        Post.title,
        Post.address,
    ]
}

const isMarked: TParam = {k: "isMarked", name: "Флаг находится ли в избранном", type: "bool", isAuthOnly: true};

const announceInfo: TParam = {
    k: "announceInfo",
    name: "описание для превью",
    type: "object",
    inner: [
        ...suggestInfo.inner as TParam[],
        Post.text,
        {...pOutImg.imgInfo, k: "firstImgInfo", note: "о первом изображении", isOptional: true},
        Post.imgsAmount,
        Post.ratesAmount,
        Post.commentsAmount,
        isMarked,
        Post.sources,
    ]
}

const fullInfo: TParam = {
    k: "fullInfo",
    name: "полное описание",
    type: "object",
    inner: [
        Post.id,
        {
            k: "flags",
            name: "флаги",
            type: "object",
            inner: allHUserOnly([
                Post.active,
                Post.firstVerified,
                Post.verified,
            ]) as TParam[]
        },
        Post.postType,
        Post.sources,
        Post.title,
        Post.address,
        Post.text,
        Post.coordinates,
        pOutUser.userAsCreator,
        Post.transportRating,
        Post.rating,
        Post.imgsAmount,
        Post.ratesAmount,
        Post.commentsAmount,
        Post.payments,
        Post.created,
        Post.updated,
        isMarked,
        Post.facilities,
    ]
}

export type TPOutKeys = "mapInfo" | 'suggestInfo' | 'announceInfo' | "fullInfo" | "pagesInfo" | "pointsCreated" | "authorizedComment"
export const pOut : {[k in TPOutKeys] : TParam} =  {
    mapInfo,
    suggestInfo,
    announceInfo,
    fullInfo,

    pointsCreated: User.pointsCreated,

    authorizedComment: {...pOutComment.comment, k: "authorizedComment", note: "комментарий авторизованного пользователя", isAuthOnly: true},
    
    pagesInfo: commonPagesInfo,
}