import React from 'react';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import {connect} from 'dva';
import Ling5 from '../../components/Ling5/Ling5';
import { Row, Col } from 'antd';

@connect(({zhongjian1,zhongjian2})=>({
  zhongjian1,zhongjian2,
}))


class LingZhong5 extends React.Component{

  componentWillMount(){
    const {dispatch}=this.props;
    dispatch({
      // type:'zhongjian1/fetchData'
    });
    dispatch({
      // type:'zhongjian2/fetchData'
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      myurl:'WP1工位看板——终检',
      myHeaderName:'早班',
    };
  }

  render(){

    const {zhongjian1}=this.props;
    const {zhongjian2}=this.props;

   return(
     <div style={{background:'#2D1818',height:'100%'}}>
       <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}>
       </BoardHeader>
       <br/>
       <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
       <div style={{height:'84%' ,width:'100%',position:'relative'}}>
         <Ling5 jian1={zhongjian1.zhongjiandata1}
                jian2={zhongjian2.zhongjiandata2}
         />
       </div>
       <BoardFoot/>

     </div>

   )
  }
}

export default LingZhong5;
