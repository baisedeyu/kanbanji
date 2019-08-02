import  React from 'react'
import {connect} from 'dva'
import Head from '../../components/BoardHeader/BoardHeader'
import Foot from '../../components/BoardFoot/BoardFoot'
import { Row, Col } from 'antd';
import BaoZhuangTable from '../../components/baoZhuangTable/BaoZhuangTable'
import baoZhuanggg from '../../components/baoZhuangTable/BaoZhuangTable'
import { Table,Icon,Divider } from 'antd';
import styles from './baoZhuang.css'
import yeah from '../../assets/JD_Leading.png'
import fist from '../../assets/JD_Backward.png'



@connect(({baoZhuang})=>({baoZhuang}))

class baoZhuang extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      myurl:'',
      myHeaderName:'',
    }
  }

  componentWillMount(){
    const{dispatch} = this.props;
    dispatch({
         type:'baoZhuang/fetch'
    });

    this.setState({myurl:'WF1工位看板——包装'});
    this.setState({myHeaderName:'早班'})

  }


render(){

    const {baoZhuang} = this.props;
    const {data} = baoZhuang;

    return(
      <div style={{background:'#2D1818',height:'100%'}}>
         <Head myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}>
         </Head>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div style={{height:'82%' ,width:'100%',position:'relative'}}>
          <BaoZhuangTable data ={data}/>
        </div>
        <Foot/>
      </div>

    )
}
}

export default connect()(baoZhuang)
