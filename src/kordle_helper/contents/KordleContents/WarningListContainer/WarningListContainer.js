// @flow
import * as React from 'react';
import './WarningListContainer.css'

function WarningListContainer({ warningList, handleKeyDownWarningInput,   handleBlurWarningInput, handleDeleteWarningItem}) {
  return (
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
  );
};

export default WarningListContainer;