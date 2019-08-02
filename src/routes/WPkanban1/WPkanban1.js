import React from 'react'
import {Table, Row, Col} from 'antd';
import './WPkanban1.less'
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { connect } from 'dva/index';


class WMkanban1 extends React.Component{


  render(){

    const data=[
      {
        xianbie:'前处理A',
        biaoliang:2200,
        touliaoshu:1100,
        chonggongshu:0,
        dacheng:'50%',
        jindu:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'前处理B',
        biaoliang:1100,
        touliaoshu:600,
        chonggongshu:2,
        dacheng:'54%',
        jindu:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'A线',
        biaoliang:2200,
        touliaoshu:1100,
        chonggongshu:0,
        dacheng:'50%',
        jindu:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'B线',
        biaoliang:1800,
        touliaoshu:980,
        chonggongshu:0,
        dacheng:'54%',
        jindu:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'C线',
        biaoliang:1800,
        touliaoshu:980,
        chonggongshu:0,
        dacheng:'54%',
        jindu:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        zhuangtai:'正常',
      },
      {
        xianbie:'KSL',
        biaoliang:1700,
        touliaoshu:700,
        chonggongshu:0,
        dacheng:'50%',
        jindu:'',
        yichang:'',
        guzhang:'',
        tingji:'',
        shijian:'',
        zhishi:'',
        zhuangtai:'正常',
      },
    ];


    //数据
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
      console.log(hengmykey);
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
      console.log(postdata);
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
        width:'9%',
        render:(text,record)=><div style={{color:'white'}}>{text}</div>
      });
      data.map(item=>{
        console.log(`${item.xianbie}`);
        tableColumn.push(
          {
            title:`${item.xianbie}`,
            align:'center',
            dataIndex:`${item.xianbie}`,
            key:`${item.xianbie}`,
            width:'9%',
            render:(text,record,index)=>{
              if(index===3){
                if(text<'50%'){
                  return(
                    <div style={{color:'red'}}>{text}</div>
                  )
                }
                return(
                  <div style={{color:'green'}}>{text}</div>
                )
              }else if(index===10){
                return(
                  <div style={{background:'green',color:'green'}}>{text}</div>
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

const data1=[
  {
    title:'成品',
    biaozhun:'2200',
    shiji:'1800',
  },
  {
    title:'包装',
    biaozhun:'2200',
    shiji:'1500',
  },
  {
    title:'缴库',
    biaozhun:'2200',
    shiji:'1400',
  },
  {
    title:'良率',
    biaozhun:'95%',
    shiji:'96%',
  },
  {
    title:'一次执行率',
    biaozhun:'',
    shiji:'',
  },
  {
    title:'OEE',
    biaozhun:'85%',
    shiji:'65%',
  },
];

const column1=[
  {
    title:'',
    dataIndex:'mingcheng',
    key:'mingcheng',
    width:'20%',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index %2 === 0) {
        obj.props.rowSpan = 2;
      }
      else {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  },
  {
    title:'',
    dataIndex:'biaozhun',
    key:'biaozhun',
    width:'20%',
  },
  {
    title:'',
    dataIndex:'shuzhi',
    key:'shuzhi',
    width:'20%',
    render:(text)=><div style={{color:'yellow'}}>{text}</div>
  },
  {
    title:'',
    dataIndex:'biaoqing',
    key:'biaoqing',
    width:'20%',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index %2 === 0) {
        obj.props.rowSpan = 2;
      }
      else {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  }
];

    const data2=[
      {
        mingcheng:'成品',
        biaozhun:'标准',
        shuzhi:'2200',
        biaoqing:'',
      },
      {
        mingcheng:'成品',
        biaozhun:'实际',
        shuzhi:'1800',
        biaoqing:'',
      },
      {
        mingcheng:'包装',
        biaozhun:'标准',
        shuzhi:'1800',
        biaoqing:'',
      },
      {
        mingcheng:'包装',
        biaozhun:'实际',
        shuzhi:'1500',
        biaoqing:'',
      },
      {
        mingcheng:'缴库',
        biaozhun:'标准',
        shuzhi:'2200',
        biaoqing:'',
      },
      {
        mingcheng:'缴库',
        biaozhun:'实际',
        shuzhi:'1400',
        biaoqing:'',
      },
      {
        mingcheng:'良率',
        biaozhun:'标准',
        shuzhi:'95%',
        biaoqing:'',
      },
      {
        mingcheng:'良率',
        biaozhun:'实际',
        shuzhi:'96%',
        biaoqing:'',
      },
      {
        mingcheng:'一次执行率',
        biaozhun:'标准',
        shuzhi:'',
        biaoqing:'',
      },
      {
        mingcheng:'一次执行率',
        biaozhun:'实际',
        shuzhi:'',
        biaoqing:'',
      },
      {
        mingcheng:'OEE',
        biaozhun:'标准',
        shuzhi:'85%',
        biaoqing:'',
      },
      {
        mingcheng:'OEE',
        biaozhun:'实际',
        shuzhi:'65%',
        biaoqing:'',
      },
    ];

// const shuju=(data=[])=>{
//   const aa=[
//   ];
//   for(let i=0,j=0;i<data.length;i++,j=j+2){
//     aa[j].mingcheng=(data[i].title);
//     aa[j+1].mingcheng=(data[i].title);
//     aa[j].biaozhun='标准';
//     aa[j+1].biaozhun='实际';
//     aa[j].shuzhi=(data[i].biaozhun);
//     aa[j+1].shuzhi=data[i].shiji;
//     aa[j].biaoqing='';
//     aa[j+1].biaoqing='';
//   }
// return aa
// };


    return(
      <div style={{width:'100%',height:'100%',backgroundColor:'#2d1818'}}>
        <BoardHeader myurl={'武汉六丰WP1车间看板—生产状况'} myHeaderName={111}/>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div style={{height:'82%'}}>
          <div style={{width:'63%', height:'85%',float:'left',}}>
            <Table
              className='yourClass2'
              dataSource={tableData(data)}
              columns={column(data)}
              pagination={false}
              bordered={true}/>
          </div>
          <div style={{width:'36%', height:'85%',float:'right',}}>
            <Table
              className='yourClass2'
              dataSource={data2}
              columns={column1}
              pagination={false}
              showHeader={false}
              bordered={true}/>
          </div>
        </div>
        <BoardFoot/>
      </div>
    )
  }
}
export default WMkanban1;
