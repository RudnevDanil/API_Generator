import React, {ReactElement, useEffect, useState} from "react";
import {NavLink, useLocation} from 'react-router-dom';
import {center} from "../../functions";
//import { ReactComponent as Logo } from "../../imgs/swords.svg"
import {colors} from "../../constants";
import {Tooltip} from "@mui/material";
import {TMethodGroup} from "../../config/dataTypes";
import {Path} from "../../components/Path/Path";
import {NavConfigTreeElement} from "../../components/NavConfigTreeElement/NavConfigTreeElement";

const logoImg = require("../../imgs/vanSpotLogo.png")

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
    condition: true,
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
    icon: `fas fa-${isHUserOnly ? 'chess-queen' : 'user'}`,
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
    const changeOpenStatus = (k: string) => setOpenedBlocks(prev => (
        prev.includes(k) ? prev.filter(el => el !== k) : [...prev, k]
    ))

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
                        <img src={logoImg} alt="..." className="pe-2" style={{width: "3.5rem"}}/>
                        {"VanSpot API"}
                    </div>
                </NavLink>

                {/*<Logo fill='red' stroke='green'/>*/}

                {
                    navConfig.map(nEl => (
                        <NavConfigTreeElement
                            isPathIncludeKey={(k) => paths.includes(k)}
                            isOpened={openedBlocks.includes(nEl.k)}
                            changeOpenStatus={() => changeOpenStatus(nEl.k)}
                            treeElement={nEl}
                            key={nEl.k}
                        />
                    ))
                }

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