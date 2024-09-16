// @flow
import * as React from 'react';
import './ExampleListContainer.css'

function ExampleListContainer({exampleList, answerList, warningList, notUseList,   handleSelectedExampleItem}) {
  return (
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
  );
};

export default ExampleListContainer;