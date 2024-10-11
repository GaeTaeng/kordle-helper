import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GAME_INFO } from './contents/Const/kordleConst';
import Contents from './contents/Contents';
import GamePage from './gamePage/GamePage';
import Header from './header/Header';

function KordleHelperMain(params) {

    return (<div className={`KordleHelperMain`}>
        <BrowserRouter>
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
        </BrowserRouter>
        

        </div>) 
}

export default KordleHelperMain;