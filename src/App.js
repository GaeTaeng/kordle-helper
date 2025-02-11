import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HashRouter, Route, Routes } from 'react-router-dom'; 
import Contents from './kordle_helper/contents/Contents';
import GamePage from './kordle_helper/gamePage/GamePage';
import Header from './kordle_helper/header/Header';
import { GAME_INFO } from './kordle_helper/contents/Const/kordleConst';
import "./App.css"
function KordleHelperMain(params) {

    return (<div className={`KordleHelperMain`}>
            <HashRouter>
                <HelmetProvider>
                    <Helmet>
                        <title>꼬들-도와줘!</title>
                        <meta name="description" content="꼬들 & 꼬오오오오들 & 꼬맨틀 링크 및 헬프 페이지" />
                    </Helmet>
                    <Header />
                    {/* <LnbMenu /> */}
                    <Routes>
                        <Route path="/" element={<Contents />}></Route>
                        <Route path={GAME_INFO.LINK_URL[GAME_INFO.HELP]} element={<Contents />}></Route>
                        <Route path={"/game/:urltype"} element={<GamePage />}></Route>
                        <Route path="*" element={<Contents />}></Route>
                    </Routes>
                    
                    
                    {/* <Footer /> */}
                </HelmetProvider>
            </HashRouter>
        </div>) 
}

export default KordleHelperMain;
