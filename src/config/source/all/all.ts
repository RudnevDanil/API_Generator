import {TMethod, TParam, TResponse} from "../../dataTypes";
import {response_401, response_500} from "../../responses";

export let isAll : TParam = {
    k: "isAll",
    name: "Все",
    note: "Массив картинок. Приходят как formData.",
    defaultValue: "false",
    hUserOnly: true,
}

export let sourceResponse : TResponse = {
    code: 200,
    params: [ // TODO realize in render methods
        {key: "id", type: "MongoId"},
        {key: "label", type: "string", min: 5, max: 15},
        {key: "logo", type: "MongoId"},
        {key: "iaActive", type: "bool", isOptional: true, hUserOnly: true}
    ],
    note: "Успешный ответ"
}

export let all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение всех источников",
    shortName: "Все",
    params: [isAll],
    responses: [response_401, response_500]
}