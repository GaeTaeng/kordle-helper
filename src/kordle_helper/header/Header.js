

import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { GAME_INFO } from '../contents/Const/kordleConst';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


const menu = [
    GAME_INFO.HELP,
    GAME_INFO.KORDLE,
    GAME_INFO.KOOOOKORDLE,
    GAME_INFO.KOMANTLE,

      
  ]

function Header({urltype}) {

    const anchorRef = useRef(null);
    const [type, setType] = useState()
    const [isOpenLinks, setIsOpenLinks] = useState(true);

    const handleSelectedGameType = (e) => {
        setType(e.target.value)
    }
    const handleOpenLink = () => {
        setIsOpenLinks(!isOpenLinks);
    }
    return (
        <header style={{marginTop:"20px"}}>
            <div style={isOpenLinks ? {display:"block"} : {display:"none"}}>
                문의사항 : nuckly60@gmail.com / <a href="https://open.kakao.com/o/gdYCzqOg"  target='_blank'>카카오톡</a>
                
                <br /><br />
                
                
                {<ToggleButtonGroup value={type}  exclusive onChange={handleSelectedGameType}  size={'small'} color="success">
                    {menu.map(item => {
                        return <Link key={`key_${item}`} to={GAME_INFO.LINK_URL[item]}><ToggleButton  key={item} value={item}>{GAME_INFO.TEXT[item]}</ToggleButton></Link>
                    })}
                    </ToggleButtonGroup>}
                    <br /><br />

            </div>
            <Button onClick={handleOpenLink} style={{width:"100%", backgroundColor:"#1565c0", border:"1px solid #bdbdbd", color:"white", fontWeight:"bold"}}>{isOpenLinks ? "메뉴 접기" : "메뉴 펼치기"}</Button>
        </header>
    )
}


export default Header;