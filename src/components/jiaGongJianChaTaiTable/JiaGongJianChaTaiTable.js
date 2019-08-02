import  React from 'react'
import styles from './jiaGongJianChaTai.css'
import { Row, Col } from 'antd';
import { Table,Icon,Divider } from 'antd';
import './jiaGongJianChaTaiTable.less'

class JiaGongJianChaTaiTable extends React.Component{
  render(){
    const tableData=()=>{
      const data=[]
      for (let x=0;x<16;x++){
        data.push({})
      }
      return data
    }

    // for(let t of document.getElementsByClassName('t')){
    //   t.parentNode.parentNode.style.background='blue'
    // }
    // for(let y of document.getElementsByClassName('y')){
    //   y.parentNode.parentNode.style.background='red'
    // }
    const data = this.props.data;

    var data1 = [];
    var data2 = [];

    for(let i=0;i<data.length;i++){
      data1.push(data[i].weiJianCha)
      data2.push(data[i].jianChaWanCheng)
    }

    const tableDta=()=>{
      const data=[]
      for (let x=0;x<16;x++){
        data.push({})
      }
      return data
    }
    const tableData1=()=>{
      const data=tableDta()
      this.props.data1.map((item,index)=>{
        data[index]=item
      })
      return data
    }
    const tableData2=()=>{
      const data=tableDta()
      this.props.data2.map((item,index)=>{
        data[index]=item
      })
      return data
    }

    var column1=[
      {
        title:'线别',
        dataIndex:'xianBie',
        render:(text,record)=>text===undefined ? <div style={{visibility:'hidden'}}>1</div> : <div style={{color:'white'}}>{text}</div>
      },
      {
        title:'检查人员',
        dataIndex:'JianChaRenYuan',
      },
      {
        title:'型式',
        dataIndex:'xingShi',
      },
      {
        title:'类型',
        dataIndex:'leiXing',
      },
      {
        title:'开始时间',
        dataIndex:'startTime',
      },
      {
        title:'剩余时间',
        dataIndex:'remainingTime',
      },
      {
        title:'提示',
        dataIndex:'tips',
        render:text=>text==='开发'?<div>{text}</div>:<div>{text}</div>
      },
    ];
    var column2=[
      {
        title:'线别',
        dataIndex:'xianBie',
        render:(text,record)=>text===undefined ? <div style={{visibility:'hidden'}}>1</div> : <div style={{color:'white'}}>{text}</div>
      },
      {
        title:'检查人员',
        dataIndex:'jiaChaRenYuan',
      },
      {
        title:'型式',
        dataIndex:'xingShi',
      },
      {
        title:'类型',
        dataIndex:'leiXing',
      },
      {
        title:'完成检查',
        dataIndex:'completionTime',
      },
      {
        title:'结果',
        dataIndex:'result',
      },
      {
        title:'准点',
        dataIndex:'zhunDian',
        render:text=>text==='延期'?<div>{text}</div>:<div>{text}</div>
      },
    ];

    return(
        <div style={{ width: '100%', height: '100%', paddingLeft: '0.2%', paddingRight: '0.2%',position:'absolute'}}>
          <div style={{ height: '100%', overflow: 'auto'}}>
           <Row>
            <Col span='12'>
              <div style={{width:'100%',paddingLeft: '0.2%',paddingRight: '0.2%',paddingTop:'0.5%'}}>
                <Table
                  className='jiagongjianchatai'
                  dataSource={tableData1()}
                  rowClassName={
                    (record, index) => record.tips === '开发' ? styles.rowcolor1 :styles.rowcolor3}
                  columns={column1}
                  bordered
                  pagination={false}
                />
              </div>

            </Col>
            <Col span='12'>
              <div style={{width:'100%',paddingLeft: '0.2%',paddingRight: '0.2%',paddingTop:'0.5%'}}>
                <Table
                  className='jiagongjianchatai'
                  dataSource={tableData2()}
                  rowClassName={
                    (record, index) => record.zhunDian === '延期' ? styles.rowcolor2 :styles.rowcolor3}
                  columns={column2}
                  bordered
                  pagination={false}/>
              </div>
            </Col>
           </Row>
          </div>
        </div>
    )
  }

}

export default JiaGongJianChaTaiTable
