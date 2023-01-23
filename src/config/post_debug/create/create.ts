import {TMethod} from "../../dataTypes";
import {response_500} from "../../responses";
import {imgsParam, textParam, titleParam} from "../../exampleParams";

export let create : TMethod = {
    k: "create",
    method: "post",
    name: "Создание нового поста",
    shortName: "Создание",
    note: "Работает через раз :(",
    params: [titleParam, textParam, imgsParam],
    responses: [response_500]
}