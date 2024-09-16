import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { IconButton } from '@mui/material';

function Header({isOnHint, onToggleOnHint}) {

    const handleToggleHint = (e) => {
        console.log("E : ", e)
        console.log("E : ", e.target)

        onToggleOnHint();
    }
    
    console.log("isOnHint : ", isOnHint)
    return (
        <header style={{marginTop:"20px"}}>
        <p>문의사항 : nuckly60@gmail.com / <a href="https://open.kakao.com/o/gdYCzqOg"  target='_blank'>카카오톡</a></p>
        <p>설명 {isOnHint ? 'ON' : 'OFF'} : <input type="checkbox" checked={isOnHint} onChange={handleToggleHint}/>
        <ToggleButtonGroup value={'explanation'}>
        <ToggleButton selected={isOnHint} onClick={handleToggleHint} color={'success'} value={'explanation'} />
        <ToggleButton selected={!isOnHint} onClick={handleToggleHint} color={'success'} value={'explanation'}/>
        <IconButton />

        </ToggleButtonGroup>
        <br/> <div style={{color:"red"}}>각 영역별 입력 설명이 필요하면 위 설명을 체크해주세요!</div></p>
        <p></p>
        
        </header>
    )
}


export default Header;