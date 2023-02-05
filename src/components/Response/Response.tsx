import React, {useState} from "react";
import {Tooltip} from "@mui/material";
import {TResponse} from "../../config/v1/dataTypes";
import {colors} from "../../constants";
import {center} from "../../functions";
import {OutParam} from "../OutParam/OutParam";


export let Response = (
    {
        code,
        msg,
        params,
        note,
    } : TResponse) => {

    const [isOpened, setIsOpened] = useState(true)

    return (
        <div
            className="w-100 mb-2 p-2 border border-dark rounded-3"
            style={code < 300 ? colors.good : (code < 400 ? colors.middle : colors.bad)}
        >
            <div className={"w-100" + center('between')}>
                <div className={center('start')}>
                    <div className="fw-bold pe-3">{code}</div>
                    {msg}
                </div>
                {params && <div style={{cursor: 'pointer'}} onClick={() => {setIsOpened(prev => !prev)}}>
                    <Tooltip title={isOpened ? "Скрыть параметры" : "Показать параметры"}>
                        <i className={"fas fa-eye" + (isOpened ? "" : "-slash")}/>
                    </Tooltip>
                </div>}
            </div>

            { note && <div className="text-grey" style={{fontSize: "0.8rem"}}>{note}</div>}
            {params && (
                isOpened ?
                    params.map(param => <OutParam {...param} key={param.k}/>)
                    :
                    <div className={"text-grey" + center()} style={{cursor: 'pointer'}} onClick={() => {setIsOpened(prev => !prev)}}>
                        <i className="pe-2 fas fa-info-circle"/>
                        {"Нажмите для показа параметров"}
                    </div>
            )}
        </div>
    )
}