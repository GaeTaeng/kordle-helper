import { useEffect, useState } from "react";
import "./KordleContents.css"

import { GAME_TYPE } from "./kordleConst";
import KordleNoticePopup from "./KordleNoticePopup";
import AnswerInputCase from "./AnswerInputCase";
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


    const handleCloseNoticePopup = () => {
        setIsOpenNotice(false);
    }
    return (
        <div className="kordleContents">
            <KordleNoticePopup isOpenNotice={isOpenNotice} handleCloseNoticePopup={handleCloseNoticePopup}/>
            <div className="leftContents">
                <div className="section">
                <div className="hintText" ><strong>설명 | </strong>문제를 풀면서 발견한 단어(정답)을 적는 칸입니다. 클릭하여 제거할 수 있습니다.</div>    
                    <AnswerInputCase answerList={answerList} answerInit={answerInit} onChangeAnswerItem={onChangeAnswerItem} />
                </div>


                <div className="section">
                    
                <div className="hintText" ><strong>설명 | </strong>각 칸별로 들어갈 수 있는 잔여 자/모음이 나열되어있습니다. 클릭하여 확정칸으로 이동이 가능합니다.</div>    
                    <div className="exampleListContainer">

                    {exampleList.map((example, idx) => {
                            return <div key={`exampleListCase_${idx}`} className="exampleListCase word">
                                    {example.filter(item => item !== answerList[idx] && !warningList[idx].includes(item) && !notUseList[0].includes(item) && !notUseList[1].includes(item)).map((item, idx2) => {
                                        return <div key={`exmapleItem_${idx2}`} className="exmapleItemBox" style={{height : `calc(100%/${example.filter(item => item !== answerList[idx] && !warningList[idx].includes(item)).length})`}}>
                                            <div className="exmapleItem"  onClick={() => {handleSelectedExampleItem(item, idx)}}>
                                                {item}
                                            </div>
                                        </div> 
                                        
                                    })}
                                </div>
                        })}
                    </div>
                </div>

                <div className="section">
                    <div>흰색 영역에 입력 후 엔터</div> 
                    <div>(해당칸에서는 사용하지 않지만 다른칸에서 사용하는 단어)</div>
                    <div className="hintText" ><strong>설명 | </strong>정답에 포함이되긴하지만 해당칸이 아닌 다른 칸의 정답을 입력해줍니다. <strong>각 칸에 맞춰서 입력해주어야합니다.</strong></div>    
                    <div className="warningListContainer">
                    
                        {warningList.map((warning, idx) => {
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

                <div className="hintText" ><strong>설명 | </strong> 더이상 사용하지않는 또는 최대로 사용한 자/모들을 입력하시면 중앙 예시영역에 나타나지않게됩니다.</div>    
                    <div className="notUseListContainer">
                    
                        {notUseList.map((notUse, idx) => {
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