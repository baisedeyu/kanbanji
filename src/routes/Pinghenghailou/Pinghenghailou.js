import React from 'react'
import {Table} from 'antd'
import BoardHeader from '../../components/BoardHeader/BoardHeader'
import BoardFoot from '../../components/BoardFoot/BoardFoot'
import styles from './Pinghenghailou.less'
import { connect } from 'dva/index';


@connect(({ pinghenghailou}) => ({
  pinghenghailou
}))
class Pinghenghailou extends  React.Component{
  constructor(props){
    super(props);
    this.state={
      myurl:'WF1工位看板——平衡氦漏1#',
      myHeaderName:'早班',
    }
  }
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'pinghenghailou/fetchData'
    })
  }
  render(){
    const data=this.props.pinghenghailou.data
    console.log(data)
    const {title}=this.props.pinghenghailou
    const tableData1=()=>{
      const data1=[]
      for (let x=0;x<8;x++){
        data1.push({})
      }
      data.map((item,index)=>{
        data1[index]=item
      })
      return data1
    }

    const biaocolor=()=>{
      let obj = document.getElementsByClassName("ant-table-row-indent indent-level-0");
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].parentNode.rowSpan !== 1) {
          obj[i].parentNode.style.background = 'black';
        }
        // console.log(obj[i].parentNode.ro118wSpan)
      }
    };
    biaocolor();


    const column1=[
      {
        title:'线别',
        dataIndex:'DEVICECODE',
        key:'DEVICECODE',
        render:(text,record,index)=>{
          console.log(text)
          const obj={
            children:text,
            props: {},
          }
          if (index === 0) {
            obj.props.rowSpan = tableData1().length;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj
        }
      },{
        title:'型式',
        dataIndex:'MODELNAME',
        key:'MODELNAME',
        render:(text,record)=>text===undefined ? <div style={{visibility:'hidden'}}>1</div> : text
      },{
        title:'投入数',
        dataIndex:'PHSHIFTINPUT',
        key:'PHSHIFTINPUT'
      },{
        title:'PH C/T',
        dataIndex:'PHCT',
        key:'PHCT'
      },{
        title:'PH良品数',
        dataIndex:'PHSHIFTOUT',
        key:'PHSHIFTOUT'
      },
      {
        title:'良率',
        dataIndex:'PHRATE',
        key:'PHRATE'
      },{
        title:'HL良品数',
        dataIndex:'HLSHIFTOUT',
        key:'HLSHIFTOUT'
      },{
        title:'HL C/T',
        dataIndex:'HLCT',
        key:'HLCT'
      },{
        title:'良率',
        dataIndex:'HLRATE',
        key:'HLRATE'
      },{
        title:'直通率',
        dataIndex:'ZTRATE',
        key:'ZTRATE'
      },
    ]

    // const data2=[
    //   {
    //     devID:'1#平衡机',
    //     cUser:'李飞',
    //     productState:'正常',
    //     biaoliang:5000,
    //     tourushu:3200,
    //     liangpinshu:3100,
    //     lianglv:'97%',
    //     jihuatingji:'',
    //     yichangtingji:'',
    //     leijishijian:'',
    //     jiadonglv:'98%'
    //   },{
    //     devID:'1#平衡机',
    //     cUser:'李飞',
    //     productState:'正常',
    //     biaoliang:5000,
    //     tourushu:3200,
    //     liangpinshu:3100,
    //     lianglv:'96%',
    //     jihuatingji:'',
    //     yichangtingji:'',
    //     leijishijian:'',
    //     jiadonglv:'92%'
    //   }
    // ]
    const data2=this.props.pinghenghailou.data2;
    // console.log(data2)
    const column2=[
      {
        title:'机台',
        dataIndex:'DEVICESCODE',
        key:'DEVICESCODE'
      },
      {
        title:'操作员',
        dataIndex:'OPUSER',
        key:'OPUSER'
      },
      {
        title:'生产状况',
        dataIndex:'productState',
        key:'productState'
      },{
        title:'标量',
        dataIndex:'SHIFTPOUT',
        key:'SHIFTPOUT'
      },{
        title:'投入数',
        dataIndex:'SHIFTINPUT',
        key:'SHIFTINPUT'
      },{
        title:'良品数',
        dataIndex:'SHIFTOUT',
        key:'SHIFTOUT'
      },
      {
        title:'良率',
        dataIndex:'QR',
        key:'QR',
        render:(text,record,index)=>{
          return{
            children:`${text}%`
          }
        }
      },{
        title:'计划停机',
        dataIndex:'PSTATE',
        key:'PSTATE'
      },{
        title:'异常停机',
        dataIndex:'FSTATE',
        key:'FSTATE'
      },{
        title:'累计时间',
        dataIndex:'LOSTTIME',
        key:'LOSTTIME'
      },{
        title:'稼动率',
        dataIndex:'UTILIZATIONRATE',
        key:'UTILIZATIONRATE',
        render:(text,record,index)=>{
          return{
            children:`${text}%`
          }
        }
      },
    ];

    return(
      <div style={{height:'100%',backgroundColor:'#2d1818'}}>
        <BoardHeader myurl={title} myHeaderName={title}/>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div style={{height:'84%' ,width:'100%',position:'relative',padding:"0px 5px"}}>
          <div style={{width:'100%'}}>
            <Table
              rowKey={record =>record.DEVICESCODE}
              className='pinghenghailou'
              dataSource={tableData1()}
              columns={column1}
              bordered
              pagination={false}/>
          </div>
          <br/>
          <div >
            <Table rowKey={record => record.DEVICESCODE}
                   className='pinghenghailou'
                   dataSource={data2}
                   columns={column2}
                   bordered
                   pagination={false} />
          </div>

        </div>
        <BoardFoot/>
      </div>
    )
  }
}
export default Pinghenghailou
