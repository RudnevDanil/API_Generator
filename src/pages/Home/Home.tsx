import React, {ReactElement, useEffect, useState} from "react";
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import {center} from "../../functions";
//import logoImg from "../../imgs/vanSpotLogo.png" // TODO solve import
//import { ReactComponent as Logo } from "../../imgs/swords.svg"
import {colors} from "../../constants";
import {Tooltip} from "@mui/material";
import {Method} from "../../components/Method/Method";
import {TMethod, TMethodGroup} from "../../config/dataTypes";
import {Path} from "../../components/Path/Path";

type colorStyle = {
    color: string,
    backgroundColor: string,
    average: string,
}

export let makeMarkerIcon = (
    {
        icon,
        condition,
        color,
        tooltip,
        defaultColor = colors.default.color
    } : {
        icon: string,
        condition: boolean,
        color: string,
        tooltip: string,
        defaultColor?: string,
    }
) : ReactElement => (
    <div className={center()} style={{width: "1.3rem"}}>
        <Tooltip title={tooltip}>
            <i
                className={`fs-5 textShadow ${icon}`}
                style={{
                    color: condition ? color : defaultColor,
                    opacity: condition ? 1 : 0.2,
                    cursor: "pointer"
                }}
            />
        </Tooltip>
    </div>
)

export let makeOptionalIcon = (isOptional: boolean = false) => makeMarkerIcon({
    icon: `fas fa-${isOptional ? 'asterisk' : 'exclamation'}`,
    condition: true, //isOptional,
    tooltip: isOptional ? "Опицональный" : "Обязательный",
    color: colors.blue.color
})
export let makeAuthOnlyIcon = (isAuthOnly: boolean = false) => makeMarkerIcon({
    icon: `fas fa-user${isAuthOnly ? '-shield' : 's'}`,
    condition: isAuthOnly,
    tooltip: isAuthOnly ? "Только для авторизованных" : "Вне зависимости от авторизации",
    color: colors.blue.color
})
export let makeHUserOnlyIcon = (isHUserOnly: boolean = false) => makeMarkerIcon({
    icon: `fas fa-chess${isHUserOnly ? '-queen' : '-pawn'}`,
    condition: isHUserOnly,
    tooltip: isHUserOnly ? "Только для головного пользователя" : "Не только для головного пользователя",
    color: "gold"
})
export let renderMethodType = (method: 'get' | 'post' | 'put' | 'delete') => {
    let methodsArr = {
        get: {...colors.good, name: method.toUpperCase()},
        post: {...colors.blue, name: method.toUpperCase()},
        put: {...colors.middle, name: method.toUpperCase()},
        delete: {...colors.bad, name: method.toUpperCase()},
    }

    let currMethod = methodsArr[method] || {}
    return (
        <div
            className="p-1 rounded-3"
            style={{
                backgroundColor: currMethod.backgroundColor,
                color: currMethod.color,
                //fontSize: "0.8rem"
            }}
        >
            {currMethod.name}
        </div>
    )
}

export default function Home({navConfig}: {navConfig: TMethodGroup[]}){

    const [openedBlocks, setOpenedBlocks] = useState<string[]>([])
    let {pathname: pathNow} = useLocation();
    let paths = pathNow.split('/').filter(el => el.length)

    useEffect(() => {
        let paths = pathNow.split('/').filter(el => el.length)
        if(paths.length && !openedBlocks.includes(paths[0])){
            setOpenedBlocks(prev => [...prev, paths[0]])
        }
    }, [pathNow])

    return (
        <div className="row m-0 mw-100">
            <div
                className={"col-3 py-2 bg-dark text-white"}
                style={{
                    height: "100vh",
                    overflowY: "auto",
                }}
            >
                <NavLink to={"/"} className={"text-decoration-none text-white"}>
                    <div
                        className={"row m-0 mw-100 py-2 fw-bold" + center()}
                        style={{
                            borderBottom: "1px solid white",
                            borderTop: "1px solid white",
                        }}
                    >
                        {/*<img src={logoImg} alt="..." className="pe-2" style={{width: "3.5rem"}}/> TODO */}
                        {"VanSpot API"}
                    </div>
                </NavLink>

                {/*<Logo fill='red' stroke='green'/>*/}

                {/*
                    navConfig.map(nEl => (
                        <div
                            className="py-2 ps-2"
                            style={{
                                borderBottom: "1px solid white",
                                cursor: 'pointer'
                            }}
                            key={nEl.k}
                        >
                            <div
                                className={center('start')}
                                onClick={() => setOpenedBlocks(prev => ([...prev.filter(el => el !== nEl.k), (prev.includes(nEl.k) ? null : nEl.k)].filter(el => el)))}
                            >
                                <i className={`fas fa-chevron-${openedBlocks.includes(nEl.k) ? 'down' : 'right'}`}/>
                                <div className={"ps-2 " + (paths.includes(nEl.k) ? "fw-bold" : "")} style={{userSelect: 'none'}}>{nEl.name}</div>
                                <div className="ps-2" style={{fontSize: "0.8rem", color: "lightgrey"}}>
                                    {"/" + nEl.k}
                                </div>
                            </div>

                            {
                                openedBlocks.includes(nEl.k) ?
                                    nEl.items.map(({k, shortName, method, isAuthOnly, isHUserOnly}) => (
                                        <NavLink
                                            className={"text-decoration-none text-white"}
                                            to={nEl.k + '/' + k}
                                            key={k}
                                        >
                                            <div
                                                className="my-2 ps-3 rounded-3"
                                                style={{
                                                    borderLeft: "1px solid white",
                                                    borderRight: "1px solid white",
                                                }}
                                            >
                                                <div className={(paths.includes(k) ? "fw-bold" : "") + center('start')}>
                                                    {shortName}
                                                    <div className={"ps-2" + center('end')}>
                                                        {isAuthOnly && <div className="pe-2">{makeAuthOnlyIcon(isAuthOnly)}</div>}
                                                        {isHUserOnly && <div className="pe-2">{makeHUserOnlyIcon(isHUserOnly)}</div>}
                                                    </div>
                                                </div>
                                                <div className={center('start')} style={{fontSize: "0.8rem", color: "lightgrey"}}>
                                                    {renderMethodType(method)}
                                                    <div className="ps-2">{"/" + k}</div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))
                                    : null
                            }
                        </div>
                    ))
                */}

            </div>
            <div
                className="col-9"
                 style={{
                     height: "100vh",
                     overflowY: "auto",
                 }}
            >
                <Path
                    pathNow={pathNow}
                    navConfig={navConfig}
                />
            </div>
        </div>
    )
}