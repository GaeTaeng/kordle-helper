import { useEffect, useState } from "react";
import "./KordleContents.css";

import { HintText } from "../Common/HintText";
import { GAME_TYPE } from "../Const/kordleConst";
import AnswerInputCase from "./AnswerInputContainer/AnswerInputContainer";
import ExampleListContainer from "./ExampleListContainer/ExampleListContainer";
import NotUseListContainer from "./NotUseListContainer/NotUseListContainer";
import WarningListContainer from "./WarningListContainer/WarningListContainer";
const init_1 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
const init = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"];
const init_empt = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ];
function KordleContents({type}) {
    const [answerList, setAnswerList] = useState( ["","","","","","","","","","","","",]);
    const [exampleList, setExampleList] = useState([init_1,init,init,init,init,init,init,init,init,init,init,init] )
    const [warningList, setWarningList] = useState([["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],["",]]);
    const [notUseList, setNotUseList] = useState( [["",],["",]]);
    

    useEffect(() => {

        if(type === GAME_TYPE.KORDLE) {
            setAnswerList(["","","","","","",])
            setExampleList([init_1,init,init,init,init,init,])
            setWarningList([["",],["",],["",],["",],["",],["",],])
        }else if(type === GAME_TYPE.KOOOOOODLE) {
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


    return (
        <div className="kordleContents">
            <div className="leftContents">
                <div className="section">
                    <HintText type="AnswerInputCase" text={"문제를 풀면서 발견한 단어(정답)을 적는 칸입니다. 클릭하여 제거할 수 있습니다."} /> 
                    <AnswerInputCase answerList={answerList} answerInit={answerInit} onChangeAnswerItem={onChangeAnswerItem} />
                </div>


                <div className="section">
                    
                    <HintText type="ExampleListContainer" text={"각 칸별로 들어갈 수 있는 잔여 자/모음이 나열되어있습니다. 클릭하여 확정칸으로 이동이 가능합니다."} />
                    <ExampleListContainer exampleList={exampleList} answerList={answerList} warningList={warningList} notUseList={notUseList}   handleSelectedExampleItem={handleSelectedExampleItem}/>
                </div>

                <div className="section">
                    <div>흰색 영역에 입력 후 엔터</div> 
                    <div>(해당칸에서는 사용하지 않지만 다른칸에서 사용하는 단어)</div>
                    <HintText type="WarningListContainer" text={["정답에 포함이되긴하지만 해당칸이 아닌 다른 칸의 정답을 입력해줍니다.", <strong>각 칸에 맞춰서 입력해주어야합니다.</strong>]} /> 
                    <WarningListContainer warningList={warningList} handleKeyDownWarningInput={handleKeyDownWarningInput} handleBlurWarningInput={handleBlurWarningInput} handleDeleteWarningItem={handleDeleteWarningItem}/>
                </div>
            </div>

            <div className="rightContents">
                <div className="section">
                    <div>흰색 영역에 입력 후 엔터</div> 
                    <div>(더이상 사용하지 않을 자음/모음들을 입력)</div>

                    <HintText type="AnswerInputCase" text={"더이상 사용하지않는 또는 최대로 사용한 자/모들을 입력하시면 중앙 예시영역에 나타나지않게됩니다."} />
                    <NotUseListContainer notUseList={notUseList} handleKeyDownNotUseInput={handleKeyDownNotUseInput} handleBlurNotUseInput={handleBlurNotUseInput} handleDeleteNotUseItem={handleDeleteNotUseItem}/>
                </div>
            </div>



        </div>
        
    )
    
}

export default KordleContents;