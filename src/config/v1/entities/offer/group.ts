import {TMethodGroup} from "../../../dataTypes";

import { all } from "./methods/all";
import { create } from "./methods/create";
import { delete_ } from "./methods/delete";
import { get } from "./methods/get";

export let offer: TMethodGroup = {
    k: "offer",
    name: "Предложение редактирования",
    items: [all, get, delete_, create]
}