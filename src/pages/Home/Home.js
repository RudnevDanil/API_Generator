import React, {useEffect, useState} from "react";
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import {center} from "../../functions";
import logoImg from "../../imgs/vanSpotLogo.png"
//import { ReactComponent as Logo } from "../../imgs/swords.svg"
import {colors} from "../../constants";

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

    let makeMarkerIcon = ({icon, condition, color, defaultColor = colors.default.color}) => (
        <i
            className={`fs-5 textShadow ${icon}`}
            style={{
                color: condition ? color : defaultColor,
                opacity: condition ? 1 : 0.2
            }}
        />
    )

    let makeAuthOnlyIcon = condition => makeMarkerIcon({icon: "fas fa-user", condition: condition, color: colors.blue.color})
    let makeHUserOnlyIcon = condition => makeMarkerIcon({icon: "fas fa-chess-queen", condition: condition, color: "gold"})

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

    let renderPath = path => {
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
        console.log(methodObj)

        if(!methodObj)
            return (
                <div className="w-100 p-5">
                    <div className="rounded-3 p-2 text-center" style={colors.bad}>
                        {"Метод " + pathNow + " не найден"}
                    </div>
                </div>
            )

        let {method, name, note, params, responses, authOnly, hUserOnly} = methodObj

        return (
            <div className="w-100 px-2 pt-3" key={pathNow}>
                <div className={"mb-2 rounded-3 fw-bold p-2 bg-dark text-white" + center()}>
                    <div className="pe-2">{renderMethodType(method)}</div>
                    {"Метод " + pathNow}
                    <div className={"ps-2" + center('end')}>
                        {authOnly && <div className="pe-2">{makeAuthOnlyIcon(authOnly)}</div>}
                        {hUserOnly && <div className="pe-2">{makeAuthOnlyIcon(hUserOnly)}</div>}
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
                        <div className="ps-3 w-100">
                            {
                                params.map(({k, name, note, limitations, defaultValue, authOnly, hUserOnly}) => (
                                    <div className="w-100 mb-2 p-2 border border-dark rounded-3 bg-white" key={k}>
                                        <div className={center('start')}>
                                            <div className="pe-2">{makeAuthOnlyIcon(authOnly)}</div>
                                            <div className="pe-2">{makeHUserOnlyIcon(hUserOnly)}</div>
                                            <div className="pe-3 fw-bold">{name}</div>
                                            {k + (defaultValue && " = " + defaultValue)}
                                        </div>
                                        {note && <div className="text-grey" style={{fontSize: "0.8rem"}}>{note}</div>}
                                        {
                                            limitations && <div className="text-grey" style={{fontSize: "0.8rem"}}>
                                                {limitations.min ? "От " + limitations.min : null}
                                                {limitations.max ? (limitations.min ? " до" : "До") + " " + limitations.max : null}
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }

                {
                    responses && responses.length &&
                    <div className={"py-2" + center('start', 'top')}>
                        <div className="fw-bold pe-2">{"Ответы:"}</div>
                        <div className="ps-3 w-100">
                            {
                                responses.map(({code, msg, note}, i) => (
                                    <div
                                        className="w-100 mb-2 p-2 border border-dark rounded-3"
                                        style={
                                            code < 300 ? colors.good : (
                                                code < 400 ? colors.middle : colors.bad
                                            )
                                        }
                                        key={i}
                                    >
                                        <div className={center('start')}>
                                            <div className="fw-bold pe-3">{code}</div>
                                            {msg}
                                        </div>
                                        { note && <div className="text-grey" style={{fontSize: "0.8rem"}}>{note}</div>}
                                    </div>
                                ))
                            }
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
                                    nEl.items.map(({k, shortName, method, authOnly, hUserOnly}) => (
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
                                                        {authOnly && <div className="pe-2">{makeAuthOnlyIcon(authOnly)}</div>}
                                                        {hUserOnly && <div className="pe-2">{makeHUserOnlyIcon(hUserOnly)}</div>}
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
            <div className="col-9">
                {renderPath(pathNow)}
            </div>
        </div>
    )
}