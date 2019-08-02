import React from 'react'
import {connect} from "dva";
import BoardHeader from '../../components/BoardHeader/BoardHeader'
import BoardFoot from '../../components/BoardFoot/BoardFoot'
import Table1 from '../../components/MyTable/MyTable'
import './MyTable.css'

@connect(({table})=>({
  table,
}))
class MyTableBox extends React.Component{
  componentDidMount(){
    const {dispatch}=this.props;
    dispatch({
      type:'table/fetchData',
    })

  }
  render(){
    const {table}=this.props;
    const {mydTableData,myHeaderName}=table;
    return(
      <div style={{height:'100%',width:'100%'}}>
        <BoardHeader myHeaderName={myHeaderName} />
        <div style={{height:'87%'}}>
          <Table1 tableData={mydTableData} />
        </div>
        <BoardFoot />
      </div>
    )
  }
}

export default MyTableBox;
