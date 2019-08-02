import React from 'react'
import {Table, Row, Col} from 'antd';
import './WMkanban1.less'
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { connect } from 'dva/index';
import styles from './WMkanban1';

class WMkanban1 extends React.Component{


  render(){

    const data=[
      {
        xianbie:'1#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'2#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:44,
        dacheng:'33%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'3#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'4#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'5#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:0,
        dacheng:'0%',
        chayi:'',
        yichang:'1',
        guzhang:'',
        tingji:'',
        shijian:'04:40',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'6#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'7#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'8#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'9#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'10#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:135,
        dacheng:'87%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'1',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'11#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'12#',
        zuoyieyu:'李峰',
        jianchayuan:'党风',
        biaoliang:144,
        chanchu:74,
        dacheng:'50%',
        chayi:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        OEE:'',
        zhuangtai:'正常',
      },

    ];

    const tableData=(data=[])=>{
      const hengmykey=[];
      const shumykey=[];
      for (let key in data[0]){
        shumykey.push(key)
      }
      shumykey.splice(0,1);
      data.map(item=>{
        hengmykey.push(item.xianbie)
      });
      const xianbie=['作业员','检查员','当班标量','当班产出','累计达成','差  异','品质异常','设备故障','计划停机','累计时间','缺料指示','OEE','运行状态'];
      const postdata=[];
      shumykey.map((item,index)=>{
        const dd={};
        dd.xianbie=xianbie[index];
        hengmykey.map((items,indexx)=>{
          dd[items]=data[indexx][item]
        });
        postdata.push(dd)
      });
      return postdata
    };

    //表头
    const column=(data=[])=>{
      const tableColumn=[];
      tableColumn.push({
        title:'线别',
        dataIndex:'xianbie',
        key:'xianbie',
        align:'center',
        render:(text,record)=><div style={{color:'white'}}>{text}</div>
      });
      data.map(item=>{
        tableColumn.push(
          {
            title:`${item.xianbie}`,
            align:'center',
            dataIndex:`${item.xianbie}`,
            key:`${item.xianbie}`,
            render:(text,record,index)=>{
              if(index===4){
                if(text<'50%'){
                  return(
                    <div style={{color:'red'}}>{text}</div>
                  )
                }
                return(
                  <div style={{color:'green'}}>{text}</div>
                )
              }else if(index===12){
                return(
                  <div style={{color:'green'}}>{text}</div>
                )
              }else if(index===6){
                console.log(text)
                if(text==='1'){

                  return(
                    <div style={{background:'red',width:'100%',height:'100%'}}>{'异常'}</div>
                  )
                }
                return(
                  <div style={{color:'yellow'}}>{text}</div>
                )
              }else if(index===10){
                if(text==='1'){
                  return(
                    <div style={{background:'red',width:'100%',height:'100%'}}>{'缺料'}</div>
                  )
                }
                return(
                  <div style={{color:'yellow'}}>{text}</div>
                )
              }else {
                return(
                  <div style={{color:'yellow'}}>{text}</div>
                )
              }
            }
          })
      });

      return tableColumn
    };


    return(
      <div style={{width:'100%',height:'100%',backgroundColor:'#2d1818'}}>
        <BoardHeader myurl={'武汉六丰WM1车间看板—生产状况'} myHeaderName={111}/>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div style={{height:'82%'}}>
          <div style={{width:'100%', height:'85%',float:'left',}}>

            <Table
              className='yourClass1'
              dataSource={tableData(data)}
              columns={column(data)}
              pagination={false}
              bordered={true}/>
          </div>
        </div>
        <BoardFoot/>
      </div>
    )
  }
}
export default WMkanban1;
