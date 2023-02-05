import {TParam} from "../dataTypes";

export type CommonPagesInfoInnerFields = 'pageSize' | 'currentPage' | 'totalCount' | 'totalPages'
export const commonPagesInfoInner : {[k in CommonPagesInfoInnerFields]: TParam} = {
    pageSize: {k : "pageSize", type: "int", name: "кол-во эл-то в сообщении", note: "== limit"},
    currentPage : {k : "currentPage", type: "int", name: "номер текущей страницы"},
    totalCount: {k : "totalCount", type: "int", name: "всего эл-тов"},
    totalPages: {k : "totalPages", type: "int", name: "всего страниц"},
}

export type CommonPagesInfoFields = 'pagesInfo'
export const commonPagesInfo : TParam =
{
    k: "pagesInfo",
    type: "object",
    name: "инфо о запрошенной странице, по факту - все высчитывается из totalCount, ",
    inner: [
        commonPagesInfoInner.pageSize,
        commonPagesInfoInner.currentPage,
        commonPagesInfoInner.totalCount,
        commonPagesInfoInner.totalPages,
    ]
}