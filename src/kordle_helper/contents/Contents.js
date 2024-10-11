import { useState } from "react";
import KordleContents from "./KordleContents/KordleContents";
import KordleHeader from "./KordleHeader/KordleHeader";
import {GAME_INFO, GAME_TYPE} from "./Const/kordleConst"
import KordleNoticePopup from "./popup/KordleNoticePopup";
import MetaTag from "../SEOMetaTag";

function Contents(params) {

    const [type, setType] = useState(GAME_TYPE.KORDLE)

    const [isOnHint, setIsOnHint] = useState(false)

    const [isOpenNotice, setIsOpenNotice] = useState(true)
    const handleToggleOnHint = () => {
        setIsOnHint(!isOnHint)
    }

    
    const handleKeyDownWarningInput = (e, idx) => {
        
        switch (e.key) {
            case "ArrowDown":
              // Do something for "down arrow" key press.
              break;
            case "ArrowUp":
              // Do something for "up arrow" key press.
              break;
            case "ArrowLeft":
              // Do something for "left arrow" key press.
              break;
            case "ArrowRight":
              // Do something for "right arrow" key press.
              break;
            case "Enter":
                console.log("isOpenNotice : ", isOpenNotice)
                if(isOpenNotice) handleCloseNoticePopup()
              // Do something for "enter" or "return" key press.
              break;
            case " ":
              // Do something for "space" key press.
              break;
            case "Escape":
                console.log("isOpenNotice : ", isOpenNotice)
                if(isOpenNotice) handleCloseNoticePopup()
              // Do something for "esc" key press.
              break;
            default:
              return; // Quit when this doesn't handle the key event.
          }
    
        }


    const handleCloseNoticePopup = () => {
        setIsOpenNotice(false);
    }

    const handleSelect = (e) => {
        console.log("e : ", e.target)
        setType(e.target.value)
    }

    return(
        <div className={`${(type) === (GAME_TYPE.KORDLE) ? "kordle" : "kooooodle"} ${isOnHint  ? 'hint' : ''}`} onKeyDown={handleKeyDownWarningInput}>
            <KordleNoticePopup isOpenNotice={isOpenNotice} handleCloseNoticePopup={handleCloseNoticePopup}/>
            <KordleHeader type={type} isOnHint ={isOnHint} onToggleOnHint={handleToggleOnHint}  onSelect = {handleSelect}/>
            <KordleContents type={type}/>

            
        <MetaTag title={GAME_INFO.TEXT[GAME_INFO.HELP]} description={GAME_INFO.DESCRIPTION[GAME_INFO.HELP]} keywords={GAME_INFO.KEYWORD[GAME_INFO.HELP]}/>
        </div>
    )
}

export default Contents;