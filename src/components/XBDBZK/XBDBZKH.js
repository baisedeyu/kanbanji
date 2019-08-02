
import React from 'react';

const headers = ({img,qujian,value}) => {
  return (
    <div style={{ width: '100%', height: '100%', paddingLeft: '3%',paddingTop:"1%" }}>
      <img style={{width:"40%",height:'90%',float:'left'}} src={img}/>
      <div style={{width:'55%',height:'90%',float:'left',marginLeft:'8px'}}>
        <div style={{fontSize:'2.8vw',color:'yellow'}}>
          {value}条线
        </div>
        <div style={{fontSize:'1.2vw',color:'yellow'}}>
          效率区间（{qujian}）
        </div>
      </div>
    </div>
  );
};

export default headers;
