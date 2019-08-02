import  React from 'react'
import {connect} from 'dva'
import Head from '../../components/BoardHeader/BoardHeader'
import Foot from '../../components/BoardFoot/BoardFoot'
import { Row, Col } from 'antd';
import { Table,Icon,Divider } from 'antd';
import  styles from './Xray.css'
import RXrayTable from '../../components/RXrayTable/RXrayTable'

@connect(({RXray,Xray})=>({RXray,Xray}))

class RXray extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      myurl:'',
      myHeaderName:'',
    }
  }

  componentWillMount(){
    const {dispatch}=this.props;
    dispatch({
      type: 'RXray/fetch',
    })

    this.setState({myurl:'WF1工位看板——Xray看板'})
    this.setState({myHeaderName:'早班'})


  }

  componentDidMount(){
    // this.fullscreen()
    //  this.getimg()
    var {RXray} = this.props;
    var {data} = RXray;

    for(let i=0;i<data.length;i++){
      if(i==data.length-1){
        for(var count of data[i]){
          document.getElementsByClassName('O')[count].parentNode.parentNode.style.background='red'
        }
      }
    }
  }

  render(){
    var {RXray} = this.props;
    var {data} = RXray;

    return(
      <div style={{background:'#2D1818',height:'100%' }}>
        <Head myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
        <Row><Col span='24'><hr/></Col></Row>
          <div style={{height:'87%',width:'100%',position:'relative'}}>
                  <RXrayTable data = {data}/>
        </div>
        <Foot/>
      </div>
    )
  }
}
export default connect()(RXray)
