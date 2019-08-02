import React from 'react'
import {connect} from "dva";
import { Row, Col } from 'antd';
import BoardHeader from '../../components/BoardHeader/BoardHeader'
import BoardFoot from '../../components/BoardFoot/BoardFoot'
import MyDoubleTable1 from '../../components/MyDoubleTableBox/MyDoubleTable1'
import MyDoubleTable2 from '../../components/MyTable/MyTable'
import  './MyDoubleTable.css'

@connect(({doubletable,doubletable2})=>({
  doubletable,doubletable2,
}))
class MyDoubleTable extends React.Component{
  constructor(props){
    super(props);
    this.state={
      myurl:'',
    }
  }
  componentWillMount(){
    const {dispatch}=this.props;
    dispatch({
      type:'doubletable2/fetchData',
    })
    dispatch({
      type:'doubletable/fetchData',
    })
  }
  componentDidMount(){
    // this.fullscreen()
    //  this.getimg()
    this.geturl()
  }
  geturl=()=>{
    const url1=window.document.location.href
    this.setState({
      myurl:url1,
    })
  }
  render(){
    const {doubletable,doubletable2}=this.props;
    const {mytabledata1}=doubletable;
    const {tableData2}=doubletable2;
    return(
      <div style={{height:'100%',width:'100%'}} >
        <BoardHeader myurl={this.state.myurl} />
        <div style={{height:'87%'}}>
          <div style={{height:'100%',backgroundColor:'#2D1818'}}>
            <div style={{width:'52%', height:'95%',float:'left', marginLeft:'2%',marginTop:'2%'}}>
              {
                (()=>{
                  if (mytabledata1.length===0){
                    return <p>无内容</p>
                  }else {
                    return <MyDoubleTable1 mytabledata1={mytabledata1}/>
                  }
                })()
              }

            </div>
            <div style={{ width:'42%', height:'95%',float:'left',marginLeft:'1%',marginTop:'2%'}}>
              <MyDoubleTable2 tableData={tableData2}/>
            </div>
          </div>
        </div>
        <BoardFoot />
      </div>
    )
  }
}
export default MyDoubleTable
