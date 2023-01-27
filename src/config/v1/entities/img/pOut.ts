import {TParam} from "../../../dataTypes";
import {Img} from "./model";
import {pOut as pOutUser} from "../user/pOut";
import {commonPagesInfo} from "../../common/pagesInfo";

export type TPOutKeys = "img" | "imgsInfo" | "pagesInfo"
export const pOut : {[k in TPOutKeys] : TParam} =  {
    img: {
        k: "img",
        name: "данные изображения",
        type: "object",
        inner: []
    },
    imgsInfo: {
        k: "imgsInfo",
        name: "инфо о точках",
        note: "список изображений",
        type: "array",
        inner: [
            Img.id,
            Img.created,
            pOutUser.userAsCreator,
        ]
    },
    pagesInfo: commonPagesInfo,
}