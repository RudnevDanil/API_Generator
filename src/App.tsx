//import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from "notistack";
import "moment/locale/ru";
import "moment/locale/en-gb";

import Home from "./pages/Home/Home";
import {TMethodGroup} from "./config/dataTypes";
import {postGroup} from "./config/post/postGroup";
import {sourceGroup} from "./config/source/sourceGroup";
import {baseRoute} from "./constants";
import {userGroup} from "./config/user/userGroup";

export default function App() {

    //let {pathname: pathNow} = useLocation();

    let navConfig : TMethodGroup[] = [
        postGroup,
        sourceGroup,
        userGroup,
    ]

    // do we need this ?
    //if(pathNow.includes(baseRoute))
    //    return <Navigate to={pathNow.replace(baseRoute, "")}/>

    return (
        <BrowserRouter>
            <SnackbarProvider maxSnack={10}>
                <div className="App" style={{minHeight: "100vh", backgroundColor: "#eee"}}>

                    <div style={{backgroundColor: "#eee"}}>
                        <Routes>

                            <Route path="*" element={<Home navConfig={navConfig}/>}/>

                        </Routes>
                    </div>
                </div>
            </SnackbarProvider>
        </BrowserRouter>
    );
}