
import { GAME_TYPE } from "../Const/kordleConst";

import { Button, MenuItem, MenuList, ToggleButton, ToggleButtonGroup } from "@mui/material";
function KordleHeader({type, onSelect}) {
    const buttonList = [
        {value : GAME_TYPE.KORDLE, name : "꼬들"},
        {value : GAME_TYPE.KOOOOOODLE, name : "꼬오오오오들"}
    ]
    return (
        <div>
            <ToggleButtonGroup value={type}  exclusive onChange={onSelect} size={'small'} color="success">
            {buttonList.map(item => {
                    return <ToggleButton  key={item.value} value={item.value}>{item.name}</ToggleButton>
                    
                })}
            </ToggleButtonGroup>
        </div>
    )
}

export default KordleHeader;