//import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from "notistack";
import "moment/locale/ru";
import "moment/locale/en-gb";

import Home from "./pages/Home/Home";
import {TMethodGroup} from "./config/dataTypes";
import {user} from "./config/user/group";
import {source} from "./config/source/group";
import {postType} from "./config/postType/group";
import {comment} from "./config/comment/group";

export default function App() {

    //let {pathname: pathNow} = useLocation();

    let navConfig : TMethodGroup[] = [
        user,
        source,
        postType,
        comment,
    ]

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