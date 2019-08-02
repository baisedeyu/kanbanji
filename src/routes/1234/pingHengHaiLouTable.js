import React from 'react'
import {connect } from 'dva';
import styles from './pingHengHaiLouTable.css'
import Header from  '../../components/BoardHeader/BoardHeader'
import GlobalFoot from '../../components/GlobalFooter/index'
import BoardFoot from '../../components/BoardFoot/BoardFoot'
import {Row,Col,Table} from 'antd'
import PingHengHaiLou from '../../components/pingHengHaiLouTable/PingHengHaiLouTable'



@connect(({pingHengHaiLouTable})=>({pingHengHaiLouTable}))


class pingHengHaiLouTable extends React.Component{

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
      type: 'pingHengHaiLouTable/fetch',
    })
    this.setState({myurl:'WF1工位看板——平衡氦漏1#'})
    this.setState({myHeaderName:'早班'})
// this.onclick()
  }

  componentWillMount(){
    // this.fullscreen()
    //  this.getimg()
  }

  render(){
    var {pingHengHaiLouTable} = this.props;
    var {mytabledata} =  pingHengHaiLouTable;

    return (
                <div id={'div1'} style={{background:'#2D1818',height:'100%'}}>
                <Header  myurl={this.state.myurl} myHeaderName={this.state.myHeaderName} />
                  <br/>
                  <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
                  <div style={{height:'88%',width:'100%',position:'relative'}}>
                    <PingHengHaiLou mytabledata={mytabledata}/>
                  </div>
                <BoardFoot/>
                </div>
           )
       }

}

export  default pingHengHaiLouTable
