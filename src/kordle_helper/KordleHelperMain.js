import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GAME_INFO } from './contents/Const/kordleConst';
import Contents from './contents/Contents';
import GamePage from './gamePage/GamePage';
import Header from './header/Header';
import LnbMenu from './lnbMenu/LnbMenu';
import NotFound from './notFound/NotFound';

function KordleHelperMain(params) {

    return (<div className={`KordleHelperMain`}>
        <BrowserRouter>
            <Header />
            {/* <LnbMenu /> */}
            <Routes>
                <Route path="/" element={<Contents />}></Route>
                <Route path={GAME_INFO.LINK_URL[GAME_INFO.HELP]} element={<Contents />}></Route>
                <Route path={"/game/:urltype"} element={<GamePage />}></Route>
                <Route path="*" element={<Contents />}></Route>
            </Routes>
            
            
            {/* <Footer /> */}
        </BrowserRouter>
        

        </div>) 
}

export default KordleHelperMain;