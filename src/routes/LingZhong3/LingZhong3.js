import React from 'react';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import Ling3 from '../../components/Ling3/Ling3';
import {connect} from 'dva';
import { Row, Col } from 'antd';

@connect(({rongjielu})=>({
  rongjielu
}))

class LingZhong3 extends React.Component{

  componentWillMount(){
    const {dispatch} =this.props;
    // dispatch({
    //   type:'chutang1/fetchData'
    // });
    // dispatch({
    //   type:'chutang2/fetchData'
    // });
    dispatch({
      type:'rongjielu/fetchData'
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      myurl:'WF1工位看板——熔炉出汤',
      myHeaderName:'早班',
    }
  }
  render(){
    return(
      <div style={{width:'100%',height:'100%',backgroundColor:'#2d1818'}}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div style={{width:'100%',height:'82%',paddingLeft: '0.2%',paddingRight: '0.2%'}}>
          <Ling3 data={this.props.rongjielu}
          />
        </div>
        <BoardFoot/>
      </div>

    )
  }
}
export default LingZhong3;
