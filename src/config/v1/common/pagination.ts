import {TParam} from "../dataTypes";

export type CommonPaginationFields = 'limit' | 'offset'
export const commonPagination: {[k in CommonPaginationFields]: TParam} = {
    limit: {k : "limit", type: "int", name: "кол-во"},
    offset: {k : "offset", type: "int", name: "сдвиг"},
}