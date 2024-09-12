import { useEffect, useState } from "react";
import "./KordleContents.css"
import { GAME_TYPE } from "./kordleConst";
const init_1 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
const init = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"];
const init_empt = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ];
function KordleContents({type}) {
    const [answerList, setAnswerList] = useState( ["","","","","","","","","","","","",]);
    const [exampleList, setExampleList] = useState([init_1,init,init,init,init,init,init,init,init,init,init,init] )
    const [warningList, setWarningList] = useState([["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],["",],["",]]);
    

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
        if( e.keyCode === 13) {
            handleInputWarning(e.target.value, idx)
            e.target.value= ""
        }

    }
    const handleInputWarning = (text, idx) => {
        if(warningList.includes(text)) return;
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
    console.log("Answer : ", answerList)
    return (
        <div>
            <div className="section">
                <div className="answerInputContainer" >
                    {answerList.map((item, idx) => {
                        return <div key={`answerInputCase_${idx}`} className="answerInputCase">
                                <div className="answerInputIdx" >{idx}</div>
                                <input className="answerInput" id={`answerInput_${idx}`} style={item && item === "" ? {} : {cursor:"pointer"}} pattern="[ㄱ-ㅎ]" onClick={() => answerInit(idx)} onKeyDown={(e, c) => {onChangeAnswerItem(e, c, idx)}} value={item} readOnly={item}/>
                            </div>
                    })}

                </div>
            </div>


            <div className="section">
                <div className="exampleListContainer">

                {exampleList.map((example, idx) => {
                        return <div key={`exampleListCase_${idx}`} className="exampleListCase">
                                {example.filter(item => item !== answerList[idx] && !warningList[idx].includes(item)).map((item, idx2) => {
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
                흰색 영역에 입력 후 엔터
                <div className="warningListContainer">
                
                    {warningList.map((warning, idx) => {
                            return <div key={`warningListCase_${idx}`} className="warningListCase">
                                <input key={`warningItem_${idx}`} className="warningItemInput" onKeyDown={(e) => {handleKeyDownWarningInput(e, idx)}}/>
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
    )
    
}

export default KordleContents;