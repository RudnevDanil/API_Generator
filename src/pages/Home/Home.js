import React, {useEffect, useState} from "react";
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import {center} from "../../functions";
import logoImg from "../../imgs/vanSpotLogo.png"
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

    let renderMethodType = method => {
        let methodsArr = {
            'post': {...colors.good, name: method.toUpperCase()},
            'delete': {...colors.bad, name: method.toUpperCase()},
            'update': {...colors.middle, name: method.toUpperCase()},
            //'post': {...colors.blue, name: method.toUpperCase()},
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

        let method = (nav.find(el => el.k === paths[0])?.items || []).find(el => el.k === paths[1])
        console.log(method)

        if(!method)
            return (
                <div className="w-100 p-5">
                    <div className="rounded-3 p-2 text-center" style={colors.bad}>
                        {"Метод " + pathNow + " не найден"}
                    </div>
                </div>
            )

        return (
            <div className="w-100 px-2 pt-3" key={pathNow}>
                <div className={"mb-2 rounded-3 fw-bold p-2 bg-dark text-white" + center()}>
                    <div className="pe-2">{renderMethodType(method.method)}</div>
                    {"Метод " + pathNow}
                </div>

                <div className={"py-2" + center('start')}>
                    <div className="fw-bold pe-2">{"Описание:"}</div>
                    <div className="">{method.name}</div>
                </div>

                {
                    method.note &&
                        <div className={"py-2" + center('start')}>
                            <div className="fw-bold pe-2">{"Прмиечание:"}</div>
                            <div className="">{method.note}</div>
                        </div>
                }

                <div className={"py-2" + center('start', 'top')}>
                    <div className="fw-bold pe-2">{"Параметры:"}</div>
                    <div className="ps-3 w-100">
                        {
                            method.params.map(({k, name, note, limitations}) => (
                                <div className="w-100 mb-2 p-2 border border-dark rounded-3" key={k}>
                                    <div className={center('start')}>
                                        <div className="fw-bold pe-3">{name}</div>
                                        {k}
                                    </div>
                                    { note && <div className="text-grey" style={{fontSize: "0.8rem"}}>{note}</div>}
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
                                    nEl.items.map(itEl => (
                                        <NavLink
                                            className={
                                                "text-decoration-none text-white"// +
                                                //(pathNow.toLowerCase().indexOf(key.toLowerCase()) !== -1 ? "Active" : "")
                                            }
                                            to={nEl.k + '/' + itEl.k}
                                            key={itEl.k}
                                        >
                                            <div
                                                className="my-2 ps-3 rounded-3"
                                                style={{
                                                    borderLeft: "1px solid white",
                                                    borderRight: "1px solid white",
                                                }}
                                            >
                                                <div className={(paths.includes(itEl.k) ? "fw-bold" : "")}>{itEl.shortName}</div>
                                                <div className={center('start')} style={{fontSize: "0.8rem", color: "lightgrey"}}>
                                                    {renderMethodType(itEl.method)}
                                                    <div className="ps-2">{"/" + itEl.k}</div>
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