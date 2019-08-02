import React from 'react';
import {connect} from 'dva';
import BoardHeader from '../../components/BoardHeader/BoardHeader'
import BoardFoot from '../../components/BoardFoot/BoardFoot'
import Ling2 from '../../components/Ling2/Ling2';
import { Row, Col } from 'antd';

@connect(({diyazhuzao2,diyazhuzao1,diyazhuzao}) => ({
  diyazhuzao2,diyazhuzao1,diyazhuzao
}))

class LingZhong2 extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'diyazhuzao1/fetchData',
    // });
    // dispatch({
    //   type: 'diyazhuzao2/fetchData',
    // });
    dispatch({
      type: 'diyazhuzao/fetchData',
    });
  }

  constructor(props){
    super(props);
    this.state={
      myurl:'WF1工位看板——低压铸造',
      myHeaderName:'早班',
    }
  }

  render(){
    // const {diyazhuzao2}=this.props;
    // const {diyazhuzao1}=this.props;

    const diyadata1=this.props.diyazhuzao

    return(
      <div ref='fullscreen' style={{width:'100%',height:'100%',backgroundColor:'#2d1818'}}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
        <br/>
        <div style={{width:'100%',height:'84%'}}>
          <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
          <Ling2
            // diya2={diyazhuzao2.diyadata2}
            //     diya1={diyazhuzao1.diyadata1}
                diyadata1={diyadata1}
          />
        </div>
        <BoardFoot/>
      </div>
    )
  }
}
export default LingZhong2;
