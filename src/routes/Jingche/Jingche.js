import React from 'react';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import {Table} from 'antd';
import styles from './Jingche.less'

class Jingche extends React.Component{

  constructor(props){
    super(props);
    this.state={
      myurl:'WM1工位看板——精车',
      myHeaderName:'早班',
      divHeight:100.
    }
  };

  render(){
    const data=[
      {
        DEVICESCODE:'1#',
        MODEL:'Q51',
        SHIFTINPUT:'100',
        SHIFTOUT:'100',
        SHIFTNGOUT:'2',
        QR:'',
        PQCSTATE:'08:00',
        shoujian:'OK'
      },
      {
        DEVICESCODE:'1#',
        MODEL:'Q51',
        SHIFTINPUT:'100',
        SHIFTOUT:'100',
        SHIFTNGOUT:'2',
        QR:'',
        PQCSTATE:'11:00',
        shoujian:'OK'
      },
      {
        DEVICESCODE:'2#',
        MODEL:'Q51',
        SHIFTINPUT:'100',
        SHIFTOUT:'100',
        SHIFTNGOUT:'2',
        QR:'',
        PQCSTATE:'08:00',
        shoujian:'OK'
      },
      {
        DEVICESCODE:'2#',
        MODEL:'Q51',
        SHIFTINPUT:'100',
        SHIFTOUT:'100',
        SHIFTNGOUT:'2',
        QR:'',
        PQCSTATE:'11:00',
        shoujian:'OK'
      },
      {
        DEVICESCODE:'3#',
        MODEL:'Q51',
        SHIFTINPUT:'100',
        SHIFTOUT:'100',
        SHIFTNGOUT:'2',
        QR:'',
        PQCSTATE:'08:00',
        shoujian:'OK'
      },
      {
        DEVICESCODE:'3#',
        MODEL:'Q51',
        SHIFTINPUT:'4',
        SHIFTOUT:'4',
        SHIFTNGOUT:'2',
        QR:'',
        PQCSTATE:'11:00',
        shoujian:'NG'
      }
    ];

    const data1=[
      {
        DEVICESCODE:'4#',
        MODEL:'Q51',
        SHIFTINPUT:'100',
        SHIFTOUT:'100',
        SHIFTNGOUT:'2',
        QR:'',
        PQCSTATE:'08:00',
        shoujian:'OK'
      },
      {
        DEVICESCODE:'4#',
        MODEL:'Q51',
        SHIFTINPUT:'100',
        SHIFTOUT:'100',
        SHIFTNGOUT:'2',
        QR:'',
        PQCSTATE:'11:00',
        shoujian:'OK'
      },
    ];

    const data2=[
      {
        DEVICESCODE:'1#',
        caozuoyuan:'李飞',
        zhuangkuang:'正常',
        biaoliang:'220',
        tourushu:'199',
        liangpin:'199',
        QR:'100%',
        jindu:'',
        jihua:'',
        yichang:'',
        leiji:'',
        jiadong:'98%',
      },
      {
        DEVICESCODE:'2#',
        caozuoyuan:'李猛',
        zhuangkuang:'正常',
        biaoliang:'220',
        tourushu:'199',
        liangpin:'198',
        QR:'99%',
        jindu:'',
        jihua:'',
        yichang:'',
        leiji:'',
        jiadong:'',
      },
      {
        DEVICESCODE:'3#',
        caozuoyuan:'徐赏花',
        zhuangkuang:'故障',
        biaoliang:'220',
        tourushu:'197',
        liangpin:'195',
        QR:'99%',
        jindu:'',
        jihua:'',
        yichang:'11:20',
        leiji:'60',
        jiadong:'',
      },
      {
        DEVICESCODE:'4#',
        caozuoyuan:'李飞',
        zhuangkuang:'故障',
        biaoliang:'220',
        tourushu:'199',
        liangpin:'199',
        QR:'100%',
        jindu:'',
        jihua:'',
        yichang:'',
        leiji:'',
        jiadong:'',
      },
      {
        DEVICESCODE:'5#',
        caozuoyuan:'',
        zhuangkuang:'',
        biaoliang:'',
        tourushu:'',
        liangpin:'',
        QR:'',
        jindu:'',
        jihua:'',
        yichang:'',
        leiji:'',
        jiadong:'',
      },
    ];

    const column1=[
      {
        title:'线别',
        dataIndex:'DEVICESCODE',
        key:'DEVICESCODE',
        render: (text, row, index) => {
          const obj = {
            children: <div style={{color:'white',}}>{text}</div>,
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
        title:'型式',
        dataIndex:'MODEL',
        key:'MODEL',
        // render:(text)=><div style={{height:`${this.state.divHeight}px`,lineHeight:`${this.state.divHeight}px`}}>{text}</div>

      },{
        title:'投入数',
        dataIndex:'SHIFTINPUT',
        key:'SHIFTINPUT',

      },{
        title:'C/T(S)',
        dataIndex:'SHIFTOUT',
        key:'SHIFTOUT',

      },{
        title:'不良',
        dataIndex:'SHIFTNGOUT',
        key:'SHIFTNGOUT',

      },{
        title:'良率',
        dataIndex:'QR',
        key:'QR',

      },{
        title:'换线时间',
        dataIndex:'PQCSTATE',
        key:'PQCSTATE',
      },
      {
        title:'首检',
        dataIndex:'shoujian',
        key:'shoujian',
      },
    ];

    const column2=[
      {
        title:'线别',
        dataIndex:'DEVICESCODE',
        key:'DEVICESCODE',
      },
      {
        title:'操作员',
        dataIndex:'caozuoyuan',
        key:'caozuoyuan',
      },{
        title:'生产状况',
        dataIndex:'zhuangkuang',
        key:'zhuangkuang',

      },{
        title:'标量',
        dataIndex:'biaoliang',
        key:'biaoliang',

      },
      {
        title:'投入数',
        dataIndex:'tourushu',
        key:'tourushu',

      },
      {
        title:'良品数',
        dataIndex:'liangpin',
        key:'liangpin',

      },{
        title:'良率',
        dataIndex:'QR',
        key:'QR',

      },{
        title:'进度',
        dataIndex:'jindu',
        key:'jindu',

      },
      {
        title:'计划停机',
        dataIndex:'jihua',
        key:'jihua',
      },
      {
        title:'异常停机',
        dataIndex:'yichang',
        key:'yichang',
      },
      {
        title:'累计时间',
        dataIndex:'leiji',
        key:'leiji',
      },
      {
        title:'稼动率',
        dataIndex:'jiadong',
        key:'jiadong',
      },
    ];


    return(
      <div ref='fullscreen' style={{background:'#2D1818',height:'100%'}}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>
        <div  style={{height:'84%' ,width:'100%',position:'relative'}}>
          <div style={{float:'left',width:'100%',height:'54%'}}>
            <div style={{float:'left',width:'50%',height:'100%'}}>
              <Table
                className='jingche'
                bordered
                dataSource={data}
                columns={column1}
                pagination={false} />
            </div>
            <div style={{float:'right',width:'49.5%',height:'100%'}}>
              <Table
                className='jingche'
                bordered
                dataSource={data1}
                columns={column1}
                pagination={false} />
            </div>
          </div>
          <div style={{float:'left',color:'red',width:'100%',height:'46%'}}>
            <Table
              className='jingche'
              bordered
              dataSource={data2}
              columns={column2 }
              pagination={false}
              rowClassName={(record, index,text) => record.zhuangkuang === '故障' ? styles.rowcolor3 : <div>{text}</div> }

            />

          </div>
        </div>
        <BoardFoot />
      </div>


    )
  }
}

export default Jingche



