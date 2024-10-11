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
            <LnbMenu />
            <Routes>
                <Route path="/" element={<Contents />}></Route>
                <Route path={GAME_INFO.LINK_URL[GAME_INFO.HELP]} element={<Contents />}></Route>
                <Route path={GAME_INFO.LINK_URL[GAME_INFO.KORDLE]} element={<GamePage type={GAME_INFO.KORDLE}  />}></Route>
                <Route path={GAME_INFO.LINK_URL[GAME_INFO.KOOOOKORDLE]} element={<GamePage  type={GAME_INFO.KOOOOKORDLE} />}></Route>
                <Route path={GAME_INFO.LINK_URL[GAME_INFO.KOMANTLE]} element={<GamePage  type={GAME_INFO.KOMANTLE} />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            
            
            {/* <Footer /> */}
        </BrowserRouter>
        

        </div>) 
}

export default KordleHelperMain;