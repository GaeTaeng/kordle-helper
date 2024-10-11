// @flow
import * as React from 'react';
import { GAME_INFO } from '../contents/Const/kordleConst';
import { useParams } from 'react-router-dom';
import MetaTag from '../SEOMetaTag';

function GamePage({}) {
    const params = useParams();  
  return (
    <div className="KordlePage">
        <iframe src={GAME_INFO.GAME_URL[params.urltype]} width={"100%"} height={"1080"} />

        <MetaTag title={GAME_INFO.TEXT[params.urltype]} description={GAME_INFO.DESCRIPTION[params.urltype]} keywords={GAME_INFO.KEYWORD[params.urltype]}/>
    </div>
  );
};

export default GamePage;