import {TInParam} from "./dataTypes";

export let titleParam : TInParam = {
    k: "title",
    name: "Название",
    limitations: {
        min: 10,
        max: 120,
    }
}

export let textParam : TInParam = {
    k: "text",
    name: "Текст",
}

export let imgsParam : TInParam = {
    k: "imgs",
    name: "Картинки",
    note: "Массив картинок. Приходят как formData.",
}