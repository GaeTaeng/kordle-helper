import { useState } from "react";
import KordleContents from "./KordleContents/KordleContents";
import KordleHeader from "./KordleHeader/KordleHeader";
import {GAME_TYPE} from "./Const/kordleConst"

function Contents(params) {

    const [type, setType] = useState(GAME_TYPE.KORDLE)

    const handleSelect = (e) => {
        console.log("e : ", e.target)
        setType(e.target.value)
    }

    return(
        <div className={String(type) === String(GAME_TYPE.KORDLE) ? "kordle" : "kooooodle"}>
            <KordleHeader type={type} onSelect = {handleSelect}/>
            <KordleContents type={type}/>
        </div>
    )
}

export default Contents;