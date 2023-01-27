import {TMethodGroup} from "../../../dataTypes";
import {byId} from "./methods/byId";
import {imgsInfo} from "./methods/imgsInfo";

export let img: TMethodGroup = {
    k: "img",
    name: "Изображения",
    items: [byId, imgsInfo]
}