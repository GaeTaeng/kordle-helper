
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { GAME_TYPE } from "../Const/kordleConst";
function KordleHeader({type, onSelect, isOnHint, onToggleOnHint}) {
    const buttonList = [
        {value : GAME_TYPE.KORDLE, name : "꼬들"},
        {value : GAME_TYPE.KOOOOOODLE, name : "꼬오오오오들"}
    ]

    
    const BUTTON_TYPE = {
        true : {TEXT : "ON", COLOR:"success"},
        false : {TEXT : "OFF", COLOR:"error"}
    }
    const handleToggleHint = (e) => {
        console.log("E : ", e)
        console.log("E : ", e.target)

        onToggleOnHint();
    }
    
    return (
        <div>
        설명 {' '}
            <Button selected={isOnHint} onClick={handleToggleHint} variant="outlined"  color={BUTTON_TYPE[isOnHint].COLOR} value={true} size={'small'}>{BUTTON_TYPE[isOnHint].TEXT}</Button>

        <br/> <div style={{color:"red"}}>각 영역별 입력 설명이 필요하면 위 설명을 체크해주세요!</div>
        <br/> 
        게임타입 {' '}
        <ToggleButtonGroup value={type}  exclusive onChange={onSelect} size={'small'} color="success">
            {buttonList.map(item => {
                    return <ToggleButton  key={item.value} value={item.value}>{item.name}</ToggleButton>
                    
                })}
            </ToggleButtonGroup>
        </div>
    )
}

export default KordleHeader;