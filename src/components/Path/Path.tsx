import {TMethod, TMethodGroup} from "../../config/dataTypes";
import React from "react";
import {colors} from "../../constants";
import {Method} from "../Method/Method";


export let Path = (
    {
        pathNow,
        navConfig,
    } : {
        pathNow: string,
        navConfig: TMethodGroup[],
    }
) => {

    let paths = pathNow.split('/').filter((el: string) => el.length)

    if(paths.length < 2)
        return (
            <div className="w-100 p-5">
                <div className="rounded-3 p-2 fw-bold text-center bg-dark text-white">
                    {"Выберите метод"}
                </div>
            </div>
        )

    let methodObj = (navConfig.find((el: TMethodGroup) => el.k === paths[0])?.items || []).find((el: TMethod) => el.k === paths[1])

    if(!methodObj)
        return (
            <div className="w-100 p-5">
                <div className="rounded-3 p-2 text-center" style={colors.bad}>
                    {"Метод " + pathNow + " не найден"}
                </div>
            </div>
        )

    return <Method methodObj={methodObj} pathNow={pathNow}/>
}