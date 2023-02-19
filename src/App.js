import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TitleWrapper from "./Components/Common/TitleWrapper/TitleWrapper";
import Credits from "./Components/Credits/Credits";
import Sidebar from "./Components/Sidebar/Sidebar";
import Reviews from "./Components/Reviews/Reviews";
import Home from "./Components/Home/Home";
import Catalog from "./Components/Catalog/Catalog";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="left-side">
                    <Header />
                    <Sidebar />
                </div>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<TitleWrapper title="Home"><Home/></TitleWrapper>}/>
                        <Route path='/buy' element={<TitleWrapper title="Credits"><Credits/></TitleWrapper>}/>
                        <Route path='/catalog' element={<TitleWrapper title="Catalog"><Catalog/></TitleWrapper>}/>
                        <Route path='/reviews' element={<TitleWrapper title="Reviews"><Reviews/></TitleWrapper>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
