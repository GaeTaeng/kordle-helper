// @flow
import * as React from 'react';
import './AnswerInputCase.css'

function AnswerInputContainer({answerList, answerInit, onChangeAnswerItem}) {
  return (
    <div className="answerInputContainer" >
                        {answerList.map((item, idx) => {
                            return <div key={`answerInputCase_${idx}` } className="answerInputCase word">
                                    <div className="answerInputIdx" >{idx}</div>
                                    <input className="answerInput" id={`answerInput_${idx}`} style={item && item === "" ? {} : {cursor:"pointer"}} pattern="[ㄱ-ㅎ]" onClick={() => answerInit(idx)} onKeyDown={(e, c) => {onChangeAnswerItem(e, c, idx)}} value={item} readOnly={item}/>
                                </div>
                        })}

                    </div>
  );
};

export default AnswerInputContainer;