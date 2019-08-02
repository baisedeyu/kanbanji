import React from 'react';
import {Table} from 'antd';
import styles from '../Ling2/Ling.css'
import { connect } from 'dva';
import './Ling2.less'

class Ling2 extends React.Component{

  render(){
    const diyadata1=this.props.diyadata1.diyadata1
    // console.log(diyadata1)
    //表格没有数据显示白框，如果数据为空则无法正常显示
    const tableData=()=>{
      const data=[]
      diyadata1.map(item=>{
        data.push(item)
      })
      const leng=data.length
      if (data.length<8){
        for (let i =0; i<(8-leng);i++){
          data.push({
            // 不良
            Bad:'',
            // 不良率
            BadY:null,
            // 浇剔
            CastOut:'',
            // 机台
            Dsscode:'',
            // 加汤指示
            Indicate:'',
            // 型号
            Model:'',
            // 作业员
            OPUser:'',
            // 模号
            Pattern:'',
            // 良品数
            ProGood:'',
            // 良品率
            ProGoodY:'',
            // 生产数
            ProNum:'',
            // 标量
            Scalar:'',
            // 机台状况
            Status:'',
            // XrayAlert报警
            XrayAlert:'',
            XBad:'',
            XBadY:''
          })
        }
      }
      console.log(data)
      return data
    }


    //1.上半区表格
    const columns1=[
      {
        title: '机台',
        dataIndex: 'Dsscode',
        key: 'Dsscode',
        width:'6%',
        align:'center',
        render:(text,record)=> text==='' ? <div style={{visibility:'hidden'}}>1</div> : <div>{text}</div>
      },
      {
        title: '作业员',
        dataIndex: 'OPUser',
        key: 'OPUser',
        width:'6%',
        align:'center',
      },
      {
        title: '型号',
        dataIndex: 'Model',
        key: 'Model',
        width:'6%',
        align:'center',
      },
      {
        title: '模号',
        dataIndex: 'Pattern',
        key: 'Pattern',
        width:'6%',
        align:'center',
      },
      {
        title: '生产数',
        dataIndex: 'ProNum',
        key: 'ProNum',
        width:'7%',
        align:'center',
      },
      {
        title: '标量',
        dataIndex: 'Scalar',
        key: 'Scalar',
        width:'7%',
        align:'center',
      },
      {
        title: '良品数',
        dataIndex: 'ProGood',
        key: 'ProGood',
        width:'7%',
        align:'center',
      },
      {
        title: '不良率',
        dataIndex: 'BadY',
        key: 'BadY',
        width:'7%',
        align:'center'
      },
      {
        title: '浇剔',
        dataIndex: 'CastOut',
        key: 'CastOut',
        width:'6%',
        align:'center',
      },
      {
        title: 'X光不良',
        dataIndex: 'XBad',
        key: 'XBad',
        width:'7%',
        align:'center',
      },
      {
        title: 'X光不良率',
        dataIndex: 'XBadY',
        key: 'XBadY',
        width:'9%',
        align:'center',
      },
      {
        title: '加汤指示',
        dataIndex: 'Indicate',
        key: 'Indicate',
        width:'8%',
        align:'center',
      },
      // {
      //   title: 'Xray报警',
      //   dataIndex: 'XrayAlert',
      //   key: 'XrayAlert',
      //   width: '10%',
      //   align: 'center',
      //   render:(text,record) => (
      //
      //     <div style={{
      //       width: '40px',
      //       height: '40px',
      //       backgroundColor: 'green',
      //       position: 'relative',
      //       left: '35%',
      //       borderRadius: '20px'
      //     }}>
      //     </div>)
      //       // 画绿色指示灯
      // },
      {
        title: '机台状况',
        dataIndex: 'Status',
        key: 'Status',
        width:'7%',
        align:'center',
        render:(text,record) =>{
          if (text===''){
            return ''
          } else if (text===0){
            return <div style={{width:'40px',height:'40px',backgroundColor:'green',position:'relative',left:'35%',borderRadius:'20px'}}/>
          } else {
            return <div style={{width:'40px',height:'40px',backgroundColor:'red',position:'relative',left:'35%',borderRadius:'20px'}}/>
          }
          {/*<div style={{width:'40px',height:'40px',backgroundColor:'green',position:'relative',left:'35%',borderRadius:'20px'}}>*/}
          {/*</div>*/}
        }


      },
    ];
    //2.下半区表格
    const columns2=[
      {
        title:'机台',
        dataIndex:'UNIT',
        ket:'UNIT',
        width:'6%',
        align:'center',
      },
      {
        title:'检测时段',
        dataIndex:'TIME',
        ket:'TIME',
        width:'12%',
        align:'center',
      },
      {
        title:'型式',
        dataIndex:'MODEL',
        key:'MODEL',
        width:'7%',
        align:'center',
      },
      {
        title:'不良原因',
        dataIndex:'REASON',
        key:'REASON',
      },
      {
        title:'策略',
        dataIndex:'STRATEGY',
        key:'STRATEGY',
        width:'20%',
        align:'center',
      }
    ];

    // const data2=this.props.diya2;
    // const data1=this.props.diya1;

    return(
      <div style={{ paddingLeft: '0.2%',paddingRight: '0.2%',height:'90%',backgroundColor:'#2d1818'}}>
            <Table dataSource={tableData()}
                   columns={columns1}
                   className='diyazhuzao'
                   bordered
                   size={'middle'}
                   pagination={false}
                   rowClassName={(record,index)=> record.BadY>=15 ? styles.rowcolor2 : styles.rowcolor1} /*根据良率判断背景是否显示红色，record 为该行的数据集合，index表示第几行*/
            />
        <br/>

          {/*<Table dataSource={data2}*/}
                 {/*columns={columns2}*/}
                 {/*bordered*/}
                 {/*useFixedHeader={true}*/}
                 {/*size={'middle'}*/}
                 {/*rowClassName={styles.rowcolor1}*/}
                 {/*pagination={false}*/}
                 {/*className='diyazhuzao'*/}
          {/*/>*/}
      </div>
    )
  }
}
export default Ling2;
