import React from 'react'
import { connect } from 'dva';
import BoardFoot from '../../components/BoardFoot/BoardFoot'
import BoardHeader from '../../components/BoardHeader/BoardHeader'
import Ling from '../../components/Ling/Ling';
import {Row,Col } from 'antd';

@connect(({ touliao ,jianshi,rongjietouliao}) => ({
  touliao,jianshi,rongjietouliao
}))
class LingZhong extends React.Component{


  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'rongjietouliao/fetchData',
    });
  }

  constructor(props){
    super(props);
    this.state={
      myurl:'WF1工位看板——熔解投料',
      myHeaderName:'早班',
    }
  };

  render(){
    // const {touliao,jianshi}=this.props;
    const {touliao,jianshi}=this.props.rongjietouliao;
    return(
      <div ref='fullscreen' style={{background:'#2D1818',height:'100%'}}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
        <br/>
        <hr style={{paddingLeft: '1%', paddingRight: '1%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div style={{height:'85%' ,width:'98%',position:'relative'}}>
          <Ling touliao1={touliao}
                jianshi1={jianshi}
          />
        </div>
        <BoardFoot />
      </div>
    )
  }
}
export default LingZhong
