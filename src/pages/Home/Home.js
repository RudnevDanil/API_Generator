import React, {useEffect, useState} from "react";
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import {center} from "../../functions";
import logoImg from "../../imgs/vanSpotLogo.png"
//import { ReactComponent as Logo } from "../../imgs/swords.svg"
import {colors} from "../../constants";
import {OutParam} from "../../components/OutParam/OutParam";
import {Tooltip} from "@mui/material";
import {Response} from "../../components/Response/Response";
import {InParam} from "../../components/InParam/InParam";

export let makeMarkerIcon = ({icon, condition, color, tooltip, defaultColor = colors.default.color}) => (
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

export let makeOptionalIcon = isOptional => makeMarkerIcon({
    icon: `fas fa-${isOptional ? 'asterisk' : 'exclamation'}`,
    condition: true, //isOptional,
    tooltip: isOptional ? "Опицональный" : "Обязательный",
    color: colors.blue.color
})
export let makeAuthOnlyIcon = isAuthOnly => makeMarkerIcon({
    icon: `fas fa-user${isAuthOnly ? '-shield' : 's'}`,
    condition: isAuthOnly,
    tooltip: isAuthOnly ? "Только для авторизованных" : "Вне зависимости от авторизации",
    color: colors.blue.color
})
export let makeHUserOnlyIcon = isHUserOnly => makeMarkerIcon({
    icon: `fas fa-chess${isHUserOnly ? '-queen' : '-pawn'}`,
    condition: isHUserOnly,
    tooltip: isHUserOnly ? "Только для головного пользователя" : "Не только для головного пользователя",
    color: "gold"
})


export default function Home({nav}){

    const [openedBlocks, setOpenedBlocks] = useState([])
    let {pathname: pathNow} = useLocation();
    console.log(pathNow)
    let paths = pathNow.split('/').filter(el => el.length)
    console.log(paths)
    useEffect(() => {
        let paths = pathNow.split('/').filter(el => el.length)
        if(paths.length && !openedBlocks.includes(paths[0])){
            setOpenedBlocks(prev => [...prev, paths[0]])
        }
    }, [pathNow])

    let renderMethodType = method => {
        let methodsArr = {
            'get': {...colors.good, name: method.toUpperCase()},
            'post': {...colors.blue, name: method.toUpperCase()},
            'put': {...colors.middle, name: method.toUpperCase()},
            'delete': {...colors.bad, name: method.toUpperCase()},
        }

        let currMethod = methodsArr[method]
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

    let renderPath = () => {
        let paths = pathNow.split('/').filter(el => el.length)

        if(paths.length < 2)
            return (
                <div className="w-100 p-5">
                    <div className="rounded-3 p-2 fw-bold text-center bg-dark text-white">
                        {"Выберите метод"}
                    </div>
                </div>
            )

        let methodObj = (nav.find(el => el.k === paths[0])?.items || []).find(el => el.k === paths[1])

        if(!methodObj)
            return (
                <div className="w-100 p-5">
                    <div className="rounded-3 p-2 text-center" style={colors.bad}>
                        {"Метод " + pathNow + " не найден"}
                    </div>
                </div>
            )

        let {method, name, note, params, responses, isAuthOnly, isHUserOnly} = methodObj

        return (
            <div className="w-100 px-2 pt-3" key={pathNow}>
                <div className={"mb-2 rounded-3 fw-bold p-2 bg-dark text-white" + center()}>
                    <div className="pe-2">{renderMethodType(method)}</div>
                    {"Метод " + pathNow}
                    <div className={"ps-2" + center('end')}>
                        {isAuthOnly && <div className="pe-2">{makeAuthOnlyIcon(isAuthOnly)}</div>}
                        {isHUserOnly && <div className="pe-2">{makeAuthOnlyIcon(isHUserOnly)}</div>}
                    </div>
                </div>

                <div className={"py-2" + center('start')}>
                    <div className="fw-bold pe-2">{"Описание:"}</div>
                    <div className="">{name}</div>
                </div>

                {
                    note &&
                        <div className={"py-2" + center('start')}>
                            <div className="fw-bold pe-2">{"Прмиечание:"}</div>
                            <div className="">{note}</div>
                        </div>
                }

                {
                    params && params.length &&
                    <div className={"py-2" + center('start', 'top')}>
                        <div className="fw-bold pe-2">{"Параметры:"}</div>
                        {(() => {console.log("gp: ", params); return null})()}
                        <div className="ps-3 w-100">
                            {params.map(param => (<InParam {...param} key={param.k}/>))}
                        </div>
                    </div>
                }

                {
                    responses && responses.length &&
                    <div className={"py-2" + center('start', 'top')}>
                        <div className="fw-bold pe-2">{"Ответы:"}</div>
                        <div className="ps-3 w-100">
                            {responses.map((response, i) => <Response {...response} key={i}/>)}
                        </div>
                    </div>
                }

            </div>
        )
    }

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
                    nav.map(nEl => (
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
                }

            </div>
            <div
                className="col-9"
                 style={{
                     height: "100vh",
                     overflowY: "auto",
                 }}
            >
                {renderPath()}
            </div>
        </div>
    )
}