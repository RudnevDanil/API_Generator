import moment from "moment";

export let center = (x = 'center', y = 'center') => (" d-flex justify-content-" + x + " align-items-" + y + " ")

export let formatBalance = (b, digitsAfterPoint = 2) => {
    let value = parseFloat(b).toFixed(digitsAfterPoint ? digitsAfterPoint : 1).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ").replace(digitsAfterPoint ? "" : ".0", "")
    return isNaN(parseFloat(b)) ? "" : value
}

export let momentToServerFormat = (curMoment) => curMoment.format("YYYY-MM-DD[T]HH:mm:ss")

export let findInGuide = (guide = [], id, defaultValue = "") => guide.reduce((s, el) => (el.value === id ? el : s), defaultValue)

export let dateFormatWithTime = "DD.MM.YYYY HH:mm"
export let dateFormatOnlyDate = "DD.MM.YYYY"
export let takeDate = (d, format = dateFormatWithTime) => (d ? moment(d).format(format) : null)