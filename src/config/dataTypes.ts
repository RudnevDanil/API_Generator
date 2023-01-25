
export type TParamTypes = "string" | "int" | "float" | "bool" | "date" | "token" | "MongoId" | "jwt" | "bcryptHash" | "array" | "object"
export type TOutParamTypes = TParamTypes // todo we dont need it

export type TParam = {
    k: string;
    name: string;
    // todo realize in inRender
    type: TParamTypes,
    inner?: TParam[] | TParam, // for array and object

    // todo realize in outRender
    limitations?: {
        min?: number,
        max?: number,
    },
    note?: string;

    // todo number could be also
    // todo realize in outRender
    // todo неправильно обрабатывается дефолтное значение false
    defaultValue?: string | boolean,
    isOptional?: boolean
    isAuthOnly?: boolean,
    isHUserOnly?: boolean,
}

export type TInParam = TParam
export type TOutParam = TParam
/*export type TInParam = { // todo тут почему-то нет типа входного параметра втф ???
    k: string;
    name: string;
    limitations?: {
        min?: number,
        max?: number,
    },
    note?: string;
    defaultValue?: string | boolean, // todo неправильно обрабатывается дефолтное значение false
    isOptional?: boolean
    isAuthOnly?: boolean,
    isHUserOnly?: boolean,
}

export type TOutParam = {
    k: string,
    type: TOutParamTypes,
    inner?: TOutParam[] | TOutParam, // for array and object
    note?: string,
    isOptional?: boolean,
    isAuthOnly?: boolean,
    isHUserOnly?: boolean,
}*/

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
    params?: (TInParam | undefined)[], // todo need to check it in front
    responses?: TResponse[],
}

export type TMethodGroup = {
    k: string;
    name: string;
    items: TMethod[] // todo TMethod[] | TMethodGroup
}

export type TFlagsInp = {[k: string]: boolean}