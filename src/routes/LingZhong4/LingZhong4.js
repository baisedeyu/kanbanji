import React from 'react'
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import Ling4c from '../../components/Ling4/Ling4c'
import {connect} from 'dva';
import { Row, Col } from 'antd';

@connect(({tuzhuangshangliao1,tuzhuangshangliao2})=>({
  tuzhuangshangliao1,tuzhuangshangliao2,
}))

class LingZhong4 extends React.Component{

  componentWillMount(){
    const {dispatch} =this.props;
    dispatch({
      type:'tuzhuangshangliao1/fetchData'
    });
    dispatch({
      type:'tuzhuangshangliao2/fetchData'
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      myurl:'WP1工位看板——涂装A上料',
      myHeaderName:'早班',
    }
  }

  render(){

    const {tuzhuangshangliao1}=this.props;
    const {tuzhuangshangliao2}=this.props;
    return(
      <div style={{background:'#2D1818',height:'100%'}}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}>
        </BoardHeader>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div style={{height:'84%' ,width:'100%',position:'relative'}}>
          <Ling4c tu1={tuzhuangshangliao1.tuzhuangdata1}
          tu2={tuzhuangshangliao2.tuzhuangdata2}
          />
        </div>
        <BoardFoot/>
      </div>
    )
  }
}

export default LingZhong4;
