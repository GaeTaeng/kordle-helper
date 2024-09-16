import React, { useState } from 'react';
import './LnbMenu.css';

function LnbMenu(params) {
    const menu = [
        {title : "꼬맨틀", link : "https://semantle-ko.newsjel.ly/"},
        {title : "꼬들", link : "https://kordle.kr/"},
        {title : "꼬오오오오들", link : "https://koooo.kordle.kr/"},
        {title : "개탱-티스토리", link : "https://gaetaeng.tistory.com/"},
        // {title : "[예정](놀자)가위바위보", link : ""},
        // {title : "[예정](놀자)끝말잇기", link : ""},
        
    ]

    const [isOpenLinks, setIsOpenLinks] = useState(false);
    const handleClickLink = () => {
        setIsOpenLinks(!isOpenLinks);
    }
    return (<nav id="lnb">
        <h1 onClick={handleClickLink} style={{cursor:"pointer"}}>게임 링크 모음</h1>
        <ul style={isOpenLinks ? {display:"block"} : {display:"none"}}>
            {menu.map(item => {
                return <li><a href={item.link} target='_blank'>{item.title}</a></li>
            })}
          
          
        </ul>
      </nav>) 
}

export default LnbMenu;