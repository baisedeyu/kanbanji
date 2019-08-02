import React from 'react';
import Zhon1 from '../../components/Zhon1/Zhon1';
import { Row, Col } from 'antd';

class Ling1 extends React.Component{
  render(){
    return(
      <div style={{background:'#2D1818',height:'100%'}}>
        {/*<Row>*/}
          {/*<Col span='24'><hr/></Col>*/}
        {/*</Row>*/}
            <div style={{height:'100%' ,width:'100%',position:'relative'}}>
          <Zhon1/>
        </div>
      </div>
    )
  }
}

export default Ling1;
