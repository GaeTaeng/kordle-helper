// @flow
import * as React from 'react';
import { GAME_INFO } from '../contents/Const/kordleConst';

function GamePage({type}) {
  return (
    <div className="KordlePage">
        <iframe src={GAME_INFO.GAME_URL[type]} width={"100%"} height={"1080"} />
    </div>
  );
};

export default GamePage;