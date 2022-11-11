import {TParam} from "./dataTypes";

export let titleParam : TParam = {
    k: "title",
    name: "Название",
    limitations: {
        min: 10,
        max: 120,
    }
}

export let textParam : TParam = {
    k: "text",
    name: "Текст",
}

export let imgsParam : TParam = {
    k: "imgs",
    name: "Картинки",
    note: "Массив картинок. Приходят как formData.",
}