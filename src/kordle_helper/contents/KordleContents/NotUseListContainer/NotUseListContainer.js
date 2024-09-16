// @flow
import * as React from 'react';
import './NotUseListContainer.css'

function NotUseListContainer({ notUseList, handleKeyDownNotUseInput,   handleBlurNotUseInput, handleDeleteNotUseItem}) {
  return (
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
  );
};

export default NotUseListContainer;