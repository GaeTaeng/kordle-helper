import { useEffect, useState } from "react";
import "./KordleContents.css"
import "./popup.css"
import { GAME_TYPE } from "./kordleConst";
const init_1 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
const init = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"];
const init_empt = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ];
function KordleContents({type}) {
    const [answerList, setAnswerList] = useState( ["","","","","","","","","","","","",]);
    const [exampleList, setExampleList] = useState([init_1,init,init,init,init,init,init,init,init,init,init,init] )
    const [warningList, setWarningList] = useState([["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],["",]]);
    const [notUseList, setNotUseList] = useState( [["",],["",]]);
    

    const [isOpenNotice, setIsOpenNotice] = useState(true)
    useEffect(() => {
        console.log("type : ", type)
        if(String(type) === String(GAME_TYPE.KORDLE)) {
            setAnswerList(["","","","","","",])
            setExampleList([init_1,init,init,init,init,init,])
            setWarningList([["",],["",],["",],["",],["",],["",],])
        }else if(String(type) === String(GAME_TYPE.KOOOOOODLE)) {
            setAnswerList(["","","","","","","","","","","","",])
            setExampleList([init_1,init,init,init,init,init,init,init,init,init,init,init,])
            setWarningList([["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],])

        }
    }, [type])
    const englishToKoreanMap = {
        'a': 'ㅁ', 's': 'ㄴ', 'd': 'ㅇ', 'f': 'ㄹ', 'g': 'ㅎ', 'h': 'ㅗ', 'j': 'ㅓ', 'k': 'ㅏ', 'l': 'ㅣ',
        'q': 'ㅂ', 'w': 'ㅈ', 'e': 'ㄷ', 'r': 'ㄱ', 't': 'ㅅ', 'y': 'ㅛ', 'u': 'ㅕ', 'i': 'ㅑ', 'o': 'ㅐ', 'p': 'ㅔ',
        'z': 'ㅋ', 'x': 'ㅌ', 'c': 'ㅊ', 'v': 'ㅍ', 'b': 'ㅠ', 'n': 'ㅜ', 'm': 'ㅡ'
      };
      
      function convertEnglishToKorean(input) {
        const converted = input.split('').map(char => englishToKoreanMap[char] || char).join('');
        return converted;
      }

      function replaceExceptKorean(str) {
        const regex = /[^ㄱ-ㅎㅏ-ㅣ]/g;
        return str.replace(regex, '');
      }
    const onChangeAnswerItem = (e,c, idx) => {
        if(e.key.length > 1) return;
        let text = "";
        if(e.keyCode === 8 || e.keyCode === 13) {
            document.getElementById(`answerInput_${idx}`).focus();
        }else {
            if(answerList[idx]) return;
            text = replaceExceptKorean(convertEnglishToKorean(e.key))
            const next_idx = idx <= (type === GAME_TYPE.KOOOOOODLE ? 10 : 4) ? idx+1 : null;
            if(next_idx) {
                document.getElementById(`answerInput_${next_idx}`).focus();
            }
        }

        setAnswerList(answerList.map((item, _idx) => {
            if(_idx === idx) return text;
            return item;
        }))
    }

    const answerInit = (idx) => {
        setAnswerList(answerList.map((item, _idx) => {
            if(_idx === idx) return "";
            return item;
        }))
    }
    
    const handleSelectedExampleItem = (text, idx) => {
        setAnswerList(answerList.map((item, _idx) => {
            if(_idx === idx) return text;
            return item;
        }))

    }

    const handleKeyDownWarningInput = (e, idx) => {
        
        if( e.keyCode === 13 ) {
            handleInputWarning(e.target.value, idx)
            e.target.value= ""
        }

    }

    const handleBlurWarningInput = (e, idx) => {
        console.log("e : ", e)
        if(  e.type === 'blur') {
            handleInputWarning(e.target.value, idx)
            e.target.value= ""
        }

    }
    const handleInputWarning = (text, idx) => {
        
        if(text.length > 1) return;
        if(answerList[idx]) return;

        text = replaceExceptKorean(convertEnglishToKorean(text))
        if(warningList[idx].includes(text)) return;
        
        
        setWarningList(warningList.map((warning, _idx) => {
            if(_idx === idx) {
                return [...warning.filter(item => item !== ""), text]
            }else {
                return warning
            }
            
        }))
    }

    const handleDeleteWarningItem = (idx1, idx2) => {
        setWarningList(warningList.map((warning, _idx) => {
            if(_idx === idx1) {
                if(warning.length <= 1)  {
                    return warning.map((item, _idx2) => {
                        if(_idx2 !== idx2) return item;
                        return ""
                    })
                }else {
                    return warning.filter((item, _idx2) => {
                        return _idx2 !== idx2;
                    })
                }
                

            }
                return warning
            
        }))

    }



    const handleKeyDownNotUseInput = (e, idx) => {
        
        if( e.keyCode === 13 ) {
            handleInputNotUse(e.target.value, idx)
            e.target.value= ""
        }

    }

    const handleBlurNotUseInput = (e, idx) => {
        console.log("e : ", e)
        if(  e.type === 'blur') {
            handleInputNotUse(e.target.value, idx)
            e.target.value= ""
        }

    }
    const handleInputNotUse = (text, idx) => {
        
        if(text.length > 1) return;
        if(answerList[idx]) return;

        text = replaceExceptKorean(convertEnglishToKorean(text))
        if(notUseList[idx].includes(text)) return;
        
        
        setNotUseList(notUseList.map((notUse, _idx) => {
            if(_idx === idx) {
                return [...notUse.filter(item => item !== ""), text]
            }else {
                return notUse
            }
            
        }))
    }

    const handleDeleteNotUseItem = (idx1, idx2) => {
        setNotUseList(notUseList.map((notUse, _idx) => {
            if(_idx === idx1) {
                if(notUse.length <= 1)  {
                    return notUse.map((item, _idx2) => {
                        if(_idx2 !== idx2) return item;
                        return ""
                    })
                }else {
                    return notUse.filter((item, _idx2) => {
                        return _idx2 !== idx2;
                    })
                }
                

            }
                return notUse
            
        }))

    }
    console.log("Answer : ", answerList)

    const handleCloseNoticePopup = () => {
        setIsOpenNotice(false);
    }
    return (
        <div className="kordleContents">
            <dialog open={isOpenNotice}>
                <h1>해당 페이지는 꼬들/꼬오오오오들 문제풀이를 도와주는 헬프 페이지입니다.</h1>
                <p>꼬들/꼬오오오오들은 한글 버전의 숫자야구게임/아나그램 입니다. </p>
                <p style={{color:"#b7e1cd", fontWeight:"900"}}>확정된 글자를 입력(초록칸/숫자야구에임의 strike) 하고 </p> 
                <p style={{color:"#f1c232", fontWeight:"900"}}>포함되지만 칸이 다른 글자(노란칸/숫자야구게임의 ball)를 입력하고 </p> 
                <p style={{color:"grey", fontWeight:"900"}}>사용되지 않는 글자(회색칸/숫자야구게임의 out)을 입력하여 </p> 
                <p>남은 자/모를 확인하며 단어조합에 약간이나마 도움을 주기위해 작성된 페이지입니다.</p> 

                <br />
                <div>
                    <h2>기타</h2>
                    <h3>사용간 불편한 사항이나 건의사항은 아래 메일 또는 카카오톡 오픈채팅을 통해 전달주시면 감사합니다.</h3>
                    <p><h3>E-Mail</h3> nuckly60@gmail.com </p>
                    <p><h3>KAKAO TALK</h3>  <a href="https://open.kakao.com/o/gdYCzqOg"  target='_blank'>카카오톡</a></p>
                    <br />

                </div>
                <p>그럼 즐거운 게임되세요! </p>
                <p>감사합니다 </p>

                <button className="noticeButton" onClick={handleCloseNoticePopup}>닫기</button>
                
            </dialog>
            <div className="leftContents">
                <div className="section">
                    <div className="answerInputContainer" >
                        {answerList.map((item, idx) => {
                            return <div key={`answerInputCase_${idx}` } className="answerInputCase word">
                                    <div className="answerInputIdx" >{idx}</div>
                                    <input className="answerInput" id={`answerInput_${idx}`} style={item && item === "" ? {} : {cursor:"pointer"}} pattern="[ㄱ-ㅎ]" onClick={() => answerInit(idx)} onKeyDown={(e, c) => {onChangeAnswerItem(e, c, idx)}} value={item} readOnly={item}/>
                                </div>
                        })}

                    </div>
                </div>


                <div className="section">
                    <div className="exampleListContainer">

                    {exampleList.map((example, idx) => {
                            return <div key={`exampleListCase_${idx}`} className="exampleListCase word">
                                    {example.filter(item => item !== answerList[idx] && !warningList[idx].includes(item) && !notUseList[0].includes(item) && !notUseList[1].includes(item)).map((item, idx2) => {
                                        return <div key={`exmapleItem_${idx2}`} className="exmapleItem" style={{height : `calc(100%/${example.filter(item => item !== answerList[idx] && !warningList[idx].includes(item)).length})`}}
                                        onClick={() => {handleSelectedExampleItem(item, idx)}}>
                                                {item}
                                            </div>
                                    })}
                                </div>
                        })}
                    </div>
                </div>

                <div className="section">
                    <div>흰색 영역에 입력 후 엔터</div> 
                    <div>(해당칸에서는 사용하지 않지만 다른칸에서 사용하는 단어)</div>
                    <div className="warningListContainer">
                    
                        {warningList.map((warning, idx) => {
                                    console.log("warning : ", warning)
                                return <div key={`warningListCase_${idx}`} className="warningListCase word">
                                    <input key={`warningItem_${idx}`} className="warningItemInput" onKeyDown={(e) => {handleKeyDownWarningInput(e, idx)}} onBlur={(e) => {handleBlurWarningInput(e, idx)}}/>
                                        {warning.map((item, idx2) => {
                                            return <div key={`warningItem_${idx2}`} className="warningItem" onClick={() => {handleDeleteWarningItem(idx, idx2)}}>
                                                    {item}
                                                </div>
                                        })}
                                    </div>
                            })}
                    </div>
                </div>
            </div>

            <div className="rightContents">
                
                <div className="section">
                    <div>흰색 영역에 입력 후 엔터</div> 
                    <div>(더이상 사용하지 않을 자음/모음들을 입력)</div>
                    <div className="notUseListContainer">
                    
                        {notUseList.map((notUse, idx) => {
                            console.log("notUse : ", notUse)
                                return <div key={`notUseListCase_${idx}`} className="notUseListCase word">
                                    <input key={`notUseItem_${idx}`} className="notUseItemInput" onKeyDown={(e) => {handleKeyDownNotUseInput(e, idx)}} onBlur={(e) => {handleBlurNotUseInput(e, idx)}}/>
                                        {notUse.map((item, idx2) => {
                                            return <div key={`notUseItem_${idx2}`} className="notUseItem" onClick={() => {handleDeleteNotUseItem(idx, idx2)}}>
                                                    {item}
                                                </div>
                                        })}
                                    </div>
                            })}
                    </div>
                </div>
            </div>



        </div>
        
    )
    
}

export default KordleContents;