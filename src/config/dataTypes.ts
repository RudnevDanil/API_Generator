export type TParam = {
    k: string;
    name: string;
    limitations?: {
        max: number,
        min: number,
    },
    note?: string;
    defaultValue?: string,
    authOnly?: boolean,
    hUserOnly?: boolean,
}

export type TOutParamTypes = "string" | "int" | "float" | "bool" | "MongoId"

export type TOutParam = "MongoId" | {
    key: string,
    type: TOutParamTypes,
    min?: number,
    max?: number,
    isOptional?: boolean,
    authOnly?: boolean,
    hUserOnly?: boolean,
    note?: string,
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
    authOnly?: boolean,
    hUserOnly?: boolean,
    params: TParam[],
    responses: TResponse[],
}

export type TMethodGroup = {
    k: string;
    name: string;
    items: TMethod[]
}