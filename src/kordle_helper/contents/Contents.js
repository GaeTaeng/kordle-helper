import { useState } from "react";
import KordleContents from "./KordleContents/KordleContents";
import KordleHeader from "./KordleHeader/KordleHeader";
import {GAME_TYPE} from "./Const/kordleConst"
import KordleNoticePopup from "./popup/KordleNoticePopup";

function Contents(params) {

    const [type, setType] = useState(GAME_TYPE.KORDLE)

    const [isOnHint, setIsOnHint] = useState(false)

    const [isOpenNotice, setIsOpenNotice] = useState(true)
    const handleToggleOnHint = () => {
        setIsOnHint(!isOnHint)
    }
    const handleCloseNoticePopup = () => {
        setIsOpenNotice(false);
    }

    const handleSelect = (e) => {
        console.log("e : ", e.target)
        setType(e.target.value)
    }

    return(
        <div className={`${(type) === (GAME_TYPE.KORDLE) ? "kordle" : "kooooodle"} ${isOnHint  ? 'hint' : ''}`}>
            <KordleNoticePopup isOpenNotice={isOpenNotice} handleCloseNoticePopup={handleCloseNoticePopup}/>
            <KordleHeader type={type} isOnHint ={isOnHint} onToggleOnHint={handleToggleOnHint}  onSelect = {handleSelect}/>
            <KordleContents type={type}/>
        </div>
    )
}

export default Contents;