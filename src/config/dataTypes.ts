export type TInParam = { // todo тут почему-то нет типа входного параметра втф ???
    k: string;
    name: string;
    limitations?: {
        min?: number,
        max?: number,
    },
    note?: string;
    defaultValue?: string,
    isOptional?: boolean
    isAuthOnly?: boolean,
    isHUserOnly?: boolean,
}

export type TOutParamTypes = "string" | "int" | "float" | "bool" | "date" | "token" | "MongoId" | "array" | "object"

export type TOutParam = {
    k: string,
    type: TOutParamTypes,
    inner?: TOutParam[] | TOutParam, // for array and object
    note?: string,
    isOptional?: boolean,
    isAuthOnly?: boolean,
    isHUserOnly?: boolean,
}

export type TResponse = {
    code: number;
    msg?: string;
    params?: TOutParam[];
    note?: string;
}

export type TMethodTypes = "get" | "post" | "put" | "delete"

export type TMethod = {
    k: string;
    method: TMethodTypes;
    name: string;
    shortName: string;
    note?: string;
    isAuthOnly?: boolean,
    isHUserOnly?: boolean,
    params?: TInParam[],
    responses?: TResponse[],
}

export type TMethodGroup = {
    k: string;
    name: string;
    items: TMethod[]
}

export type TFlagsInp = {[k: string]: boolean}