import  React from 'react'
import {connect} from 'dva'
import Head from '../../components/BoardHeader/BoardHeader'
import Foot from '../../components/BoardFoot/BoardFoot'
import styles from './jiaGongJianChaTai.less'
import { Row, Col } from 'antd';
import JiaGongJianChaTaiTable from '../../components/jiaGongJianChaTaiTable/JiaGongJianChaTaiTable'
import { Table,Icon,Divider } from 'antd';

@connect(({jiaGongJianChaTai})=>({jiaGongJianChaTai}))

class jiaGongJianChaTai extends React.Component{

  constructor(props){
    super(props);
      this.state = {
        myurl:'',
        myHeaderName:''
       }
  }

  componentDidMount(){
    const {dispatch}=this.props;
    dispatch({
      type: 'jiaGongJianChaTai/fetch',
    });
    this.setState({myurl:'WF1工位看板——加工检查台1#'});
    this.setState({myHeaderName:'早班'})
  }

  render(){
 const {jiaGongJianChaTai} = this.props;
 const {data} = jiaGongJianChaTai;

 const data1=[
   {
     xianBie:'1#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'换线'
   },{
     xianBie:'1#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'换线'
   },{
     xianBie:'1#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'换线'
   },{
     xianBie:'3#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'换线'
   },{
     xianBie:'3#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'开发'
   },{
     xianBie:'4#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'换线'
   },{
     xianBie:'5#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'换线'
   },{
     xianBie:'7#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'换线'
   },{
     xianBie:'7#',
     JianChaRenYuan:'雷军',
     xingShi:'Q50',
     leiXing:'首检',
     startTime:'08:00',
     remainingTime:'10',
     tips:'开发'
   },
 ]
    const data2=[
      {
        xianBie:'1#',
        jiaChaRenYuan:'雷军',
        xingShi:'Q50',
        leiXing:'首检',
        completionTime:'08:20',
        result:'OK',
        zhunDian:'准时'
      },{
        xianBie:'1#',
        jiaChaRenYuan:'雷军',
        xingShi:'Q50',
        leiXing:'首检',
        completionTime:'08:20',
        result:'OK',
        zhunDian:'准时'
      },{
        xianBie:'2#',
        jiaChaRenYuan:'雷军',
        xingShi:'Q50',
        leiXing:'首检',
        completionTime:'08:20',
        result:'OK',
        zhunDian:'准时'
      },{
        xianBie:'2#',
        jiaChaRenYuan:'雷军',
        xingShi:'Q50',
        leiXing:'首检',
        completionTime:'08:20',
        result:'OK',
        zhunDian:'准时'
      },{
        xianBie:'3#',
        jiaChaRenYuan:'雷军',
        xingShi:'Q50',
        leiXing:'首检',
        completionTime:'08:20',
        result:'OK',
        zhunDian:'准时'
      },{
        xianBie:'3#',
        jiaChaRenYuan:'雷军',
        xingShi:'Q50',
        leiXing:'首检',
        completionTime:'08:20',
        result:'OK',
        zhunDian:'延期'
      },{
        xianBie:'4#',
        jiaChaRenYuan:'雷军',
        xingShi:'Q50',
        leiXing:'首检',
        completionTime:'08:20',
        result:'OK',
        zhunDian:'准时'
      },
    ]

    return(
   <div style={{background:'#2D1818',height:'100%'}}>
     <Head myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
     <br/>
     <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
     <div style={{height:'82%' ,width:'100%',position:'relative'}}>
          <JiaGongJianChaTaiTable
            data ={data}
            data1={data1}
            data2={data2}
          />
       </div>
    <Foot/>
   </div>

  )
  }

}

export default connect()(jiaGongJianChaTai)
