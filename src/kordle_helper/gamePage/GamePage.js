// @flow
import * as React from 'react';
import { GAME_INFO } from '../contents/Const/kordleConst';
import { useParams } from 'react-router-dom';

function GamePage({}) {
    const params = useParams();  
  return (
    <div className="KordlePage">
        <iframe src={GAME_INFO.GAME_URL[params.urltype]} width={"100%"} height={"1080"} />
    </div>
  );
};

export default GamePage;