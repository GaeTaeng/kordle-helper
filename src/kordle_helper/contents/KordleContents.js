import { useState } from "react";
import "./KordleContents.css"
const init_1 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
const init = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"];
function KordleContents(params) {
    const [answerList, setAnswerList] = useState(["","","","","","","","","","","","",]);
    const [exampleList, setExampleList] = useState([init_1,init,init,init,init,init,init,init,init,init,init,init])


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
        console.log("e.key : ", e)
        console.log("e.key : ", e.key)
        console.log("e.key : ", e.keyCode)
        
        if(e.keyCode === 8) {
            return e;
        }else {
            let text = replaceExceptKorean(convertEnglishToKorean(e.key))
            console.log("text : ", text)
            if(answerList[idx]) return;
            const next_idx = idx <= 10 ? idx+1 : null;
            if(next_idx) {
                document.getElementById(`answerInput_${next_idx}`).focus();
            }
            setAnswerList(answerList.map((item, _idx) => {
                if(_idx === idx) return text;
                return item;
            }))
        }

    }

    const answerInit = (idx) => {
        setAnswerList(answerList.map((item, _idx) => {
            if(_idx === idx) return "";
            return item;
        }))


    }
    console.log("answerList : ", answerList)
    return (
        <div>
            <div className="answerInputContainer" >
                {answerList.map((item, idx) => {
                    return <div key={`answerInputCase_${idx}`} className="answerInputCase">
                            <div className="answerInputIdx" >{idx}</div>
                            <input className="answerInput" id={`answerInput_${idx}`} style={item && item === "" ? {} : {cursor:"pointer"}} pattern="[ㄱ-ㅎ]" onClick={() => answerInit(idx)} onKeyDown={(e, c) => {onChangeAnswerItem(e, c, idx)}} value={item} readOnly={item}/>
                        </div>
                })}

            </div>

            <div className="exampleListContainer">

            {exampleList.map((example, idx) => {
                    return <div key={`exampleListCase_${idx}`} className="exampleListCase">
                            {example.filter(item => item !== answerList[idx]).map((item, idx2) => {
                                return <div key={`exmapleItem_${idx2}`} className="exmapleItem" style={{height : `calc(100%/${example.filter(item => item !== answerList[idx]).length})`}}>
                                        {item}
                                    </div>
                            })}
                        </div>
                })}
            </div>
        </div>
    )
    
}

export default KordleContents;