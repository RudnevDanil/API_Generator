import {TMethodGroup} from "../../../../dataTypes";
import {list} from "./methods/list";
import {doMark} from "./methods/doMark";

export let mark: TMethodGroup = {
    k: "mark",
    name: "Избранное",
    items: [doMark, list]
}