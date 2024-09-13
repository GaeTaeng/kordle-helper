import React, { useState } from 'react';
import Header from './header/Header';
import Contents from './contents/Contents';
import LnbMenu from './lnbMenu/LnbMenu';

function KordleHelperMain(params) {

    const [isOnHint, setIsOnHint] = useState(false)

    const handleToggleOnHint = () => {
        setIsOnHint(!isOnHint)
    }

    return (<div className={isOnHint  ? 'hint' : ''}>
        <Header isOnHint ={isOnHint} onToggleOnHint={handleToggleOnHint} />
        <LnbMenu />
        <Contents />
        

        </div>) 
}

export default KordleHelperMain;