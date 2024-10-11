import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GAME_INFO } from './contents/Const/kordleConst';
import Contents from './contents/Contents';
import KordleNoticePopup from './contents/popup/KordleNoticePopup';
import GamePage from './gamePage/GamePage';
import Header from './header/Header';
import LnbMenu from './lnbMenu/LnbMenu';
import NotFound from './notFound/NotFound';

function KordleHelperMain(params) {

    const [isOnHint, setIsOnHint] = useState(false)

    const [isOpenNotice, setIsOpenNotice] = useState(true)
    const handleToggleOnHint = () => {
        setIsOnHint(!isOnHint)
    }
    const handleCloseNoticePopup = () => {
        setIsOpenNotice(false);
    }

    return (<div className={`KordleHelperMain ${isOnHint  ? 'hint' : ''}`}>
        <BrowserRouter>
            <Header isOnHint ={isOnHint} onToggleOnHint={handleToggleOnHint} />
            <LnbMenu />
            <KordleNoticePopup isOpenNotice={isOpenNotice} handleCloseNoticePopup={handleCloseNoticePopup}/>
            <Routes>
                <Route path="/" element={<Contents />}></Route>
                <Route path="/help" element={<Contents />}></Route>
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