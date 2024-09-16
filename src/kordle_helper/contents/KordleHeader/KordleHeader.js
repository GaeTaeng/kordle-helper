
import { GAME_TYPE } from "../Const/kordleConst";

import { Button, MenuItem, MenuList, ToggleButtonGroup } from "@mui/material";
function KordleHeader({type, onSelect}) {
    const buttonList = [
        {value : GAME_TYPE.KORDLE, name : "꼬들"},
        {value : GAME_TYPE.KOOOOOODLE, name : "꼬오오오오들"}
    ]
    console.log("type : ", type)
    return (
        <div>
            <ToggleButtonGroup>
            {buttonList.map(item => {
                    return <Button key={item.value} value={item.value} variant={String(type) === String(item.value) ?"contained":"outlined"} size={'small'} onClick={onSelect}>{item.name}</Button>
                    
                })}
            </ToggleButtonGroup>
        </div>
    )
    
}

export default KordleHeader;