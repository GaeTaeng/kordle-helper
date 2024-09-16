// @flow
import * as React from 'react';

export function HintText({type, text}) {
  return (
  <div className="hintText"  ><strong key={type}>설명 | </strong>{text}</div>    
                   
  );
};