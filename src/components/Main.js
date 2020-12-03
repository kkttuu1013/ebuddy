import { Build } from '@material-ui/icons';
import React from 'react';
import Ebutton from './Ebutton'
import FormFormat from './FormFormat'

const Main = () =>{

  return(
 
<div className='top-wrapper'>
<div className='container'>
  <h1>最高のゲーム<span className="taiken">体験</span>はここにある</h1>
  <p>E-Buddyはゲーマーのために作られたソーシャルプラットフォームです。世界中のプレイヤーとともに戦おう</p>
　　<FormFormat 
     name={"E-Budと遊ぶ"}
     />
　<div className='under-wrapper'>
    <p className="serihu">
      オイラは戦うために作られた.....文字通りね
      <p className="by">
        -leagu og Legends.ザック
      </p>
    </p>
  
  </div>
  
    </div>
    </div>
  );
}


export default Main;