import { useState } from "react";
import KordleContents from "./KordleContents";
import KordleHeader from "./KordleHeader";
import {GAME_TYPE} from "./kordleConst"

function Contents(params) {

    const [type, setType] = useState(GAME_TYPE.KORDLE)

    const handleSelect = (e) => {
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