import React, { useState } from 'react';
import Header from './header/Header';
import Contents from './contents/Contents';
import LnbMenu from './lnbMenu/LnbMenu';
import { Footer } from './Footer';
import KordleNoticePopup from './contents/popup/KordleNoticePopup';

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
        <Header isOnHint ={isOnHint} onToggleOnHint={handleToggleOnHint} />
        <KordleNoticePopup isOpenNotice={isOpenNotice} handleCloseNoticePopup={handleCloseNoticePopup}/>
        <LnbMenu />
        <Contents />
        {/* <Footer /> */}
        

        </div>) 
}

export default KordleHelperMain;