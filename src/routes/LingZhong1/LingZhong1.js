import React from 'react';
import {connect} from "dva";
import BoardHeader from '../../components/BoardHeader/BoardHeader'
import BoardFoot from '../../components/BoardFoot/BoardFoot'
import Ling12 from '../../components/Ling1/Ling12';
import {Row,Col } from 'antd';

@connect(({ chuqijinglian}) => ({
  chuqijinglian
}))

class LingZhong1 extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'chuqijinglian/fetchData'
    })
  }

  constructor(props){
    super(props);
    this.state={
      myurl:'WF1铝汤成份分析看板',
      myHeaderName:'早班',
    }
  }



  render(){
    const {lvtang,zhishi,CHECKER,PHONENO,SHIFTDESC}=this.props.chuqijinglian;


    return(
      <div style={{height:'100%',backgroundColor:'#2d1818'}}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div style={{height:'84%' ,width:'100%',position:'relative'}}>
        <Ling12
          lvtang2={lvtang}
          zhishi2={zhishi}
          CHECKER={CHECKER}
          PHONENO={PHONENO}
          SHIFTDESC={SHIFTDESC}
        />
        </div>
        <BoardFoot/>
      </div>
    )
  }
}
export default LingZhong1;
