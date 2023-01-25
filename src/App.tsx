import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from "notistack";
import "moment/locale/ru";
import "moment/locale/en-gb";

import Home from "./pages/Home/Home";
import {navConfig} from "./config/v1/v1";

export default function App() {

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