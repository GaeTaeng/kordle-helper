import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { Button, IconButton } from '@mui/material';

function Header({isOnHint, onToggleOnHint}) {

    const BUTTON_TYPE = {
        true : {TEXT : "ON", COLOR:"success"},
        false : {TEXT : "OFF", COLOR:"error"}
    }
    const handleToggleHint = (e) => {
        console.log("E : ", e)
        console.log("E : ", e.target)

        onToggleOnHint();
    }
    
    console.log("isOnHint : ", isOnHint)
    return (
        <header style={{marginTop:"20px"}}>
        문의사항 : nuckly60@gmail.com / <a href="https://open.kakao.com/o/gdYCzqOg"  target='_blank'>카카오톡</a>
        <br /><br />
        설명 {' '}
        {/* <ToggleButtonGroup value={isOnHint} exclusive onChange={handleToggleHint} size={'small'}> */}
            <Button selected={isOnHint} onClick={handleToggleHint} variant="outlined"  color={BUTTON_TYPE[isOnHint].COLOR} value={true} size={'small'}>{BUTTON_TYPE[isOnHint].TEXT}</Button>
            {/* <ToggleButton selected={!isOnHint} onClick={handleToggleHint} color={'success'} value={false}>OFF</ToggleButton> */}
        
        {/* </ToggleButtonGroup> */}
        <br/> <div style={{color:"red"}}>각 영역별 입력 설명이 필요하면 위 설명을 체크해주세요!</div>
        
        
        </header>
    )
}


export default Header;