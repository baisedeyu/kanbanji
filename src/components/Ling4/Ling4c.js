import React from 'react';
import { Row, Col, Table } from 'antd';
import styles from '../Ling4/Ling4.less'

class Ling8 extends React.Component {

  render() {

    //表格单元格背景颜色
    // for( let d of document.getElementsByClassName('d')){
    //   d.parentNode.previousSibling.style.background = 'black';
    //   d.parentNode.previousSibling.style.color='white';
    // }

    //变更td 内文字大小，已被全局index.less取代
    // for( let td1 of document.getElementsByClassName('td1')){
    //   //td1.parentNode.style.padding = 0;
    //   td1.parentNode.style.fontSize='xx-large';
    // }
    const data1 = this.props.tu1;
    const data2 = this.props.tu2;

    //将数据data1拆分为2个数组
    // const chaifen = (data = []) => {
    //   let size;
    //   if(data.length<=13 && data.length>=1){
    //     size=data.length;
    //   }else if(data.length>13 && data.length<=26){
    //     size=13;
    //   }else {
    //     size=(data.length+1)/2
    //   }
    //
    //   let T1 = [];
    //   for (let i = 0; i < data.length; i = i + size) {
    //     let T2 = [];
    //     T2 = data;
    //     T1.push(T2.slice(i, i + size));
    //   }
    //   return T1;
    // };

    //表格没有数据显示白框，如果数据为空则无法正常显示
    const xuni=()=>{
      let T=[];
      for(let i=0;i<26;i++){
        T.push(
          {
            LINE: 'A#',
            MODEL: '',
            SCALAR: '',
            INPUT: '',
            FRATE: '50%',
          }
        )
      }
      return T;
    };

    //将数据data1拆分为2个数组
    const chaifen = (data = []) => {
      let size=data.length/2;
      if(data.length % 2 ===0){
        size = data.length/2
      }else{
        size = data.length/2+1
      }
      let T1 = [];
      T1.push(data.slice(0,size));
      T1.push(data.slice(size,data.length));
      return T1;
    };

    //将数正常数据复制到白框
    const baik=(data=[])=> {
      let data1=xuni();
      let data2=chaifen(data)[0];
      let data3=chaifen(data)[1];
      for (let i = 0; i < data2.length; i++) {
        data1[i]=data2[i];
      }
      for(let j=0;j<data3.length;j++){
        data1[j+13]=data3[j];
      }
      return data1;
    };

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

    const biao1 = (data = []) => {
      let columns1 = [
        {
          title: '线别',
          dataIndex: 'LINE',
          key: 'LINE',
          width: '12%',
          render: (text, row, index) => {
            {const obj = {
              children: text,
              props: {},
            };
              if (index === 0) {
                obj.props.rowSpan = data.length;
              } else {
                obj.props.rowSpan = 0;
              }
              return obj;
            }
          }
        },
        {
          title: '型式',
          dataIndex: 'MODEL',
          key: 'MODEL',
          // className:'td1',
          // render:(text,row,index)=> index===0 ? <div className={'d'}>{text}</div> : <div>{text}</div>
        },
        {
          title: '当班标量',
          dataIndex: 'SCALAR',
          key: 'SCALAR',
        },
        {
          title: '当班投入数',
          dataIndex: 'INPUT',
          key: 'INPUT',
        },
        {
          title: '完成比率',
          dataIndex: 'FRATE',
          key: 'FRATE',
          render:(text,record)=> record.MODEL===''? <div style={{visibility:'hidden'}}>{text}</div> : <div>{text}</div>
        },
      ];
      return columns1;
    };
    const biao2 = (data) => {
      let columns2 = [
        {
          title: '型式',
          dataIndex: 'MODEL',
          key: 'MODEL',
          // className:'td1',
        },
        {
          title: '当班标量',
          dataIndex: 'SCALAR',
          key: 'SCALAR',
        },
        {
          title: '当班投入数',
          dataIndex: 'INPUT',
          key: 'INPUT',
        },
        {
          title: '完成比率',
          dataIndex: 'FRATE',
          key: 'FRATE',
          render:(text,record)=> record.MODEL===''? <div style={{visibility:'hidden'}}>{text}</div> : <div>{text}</div>
        },
      ];
      return columns2;
    };
    const biao3 = () => {
      let columns3 = [
        {
          title: '线别',
          dataIndex: 'LINE',
          key: 'LINE',
          render: (text) => <div style={{ color: 'white' }}>{text}</div>
        },
        {
          title: '担当',
          dataIndex: 'OP',
          key: 'OP',
          // className:'td1',
        },

        {
          title: '当班标量',
          dataIndex: 'SCALAR',
          key: 'SCALAR',
        },
        {
          title: '投入数',
          dataIndex: 'INPUT',
          key: 'INPUT',
        },
        {
          title: '完成比率',
          dataIndex: 'FRATE',
          key: 'FRATE',
        },
        {
          title: '进度',
          dataIndex: 'PROGRESS',
          key: 'PROGRESS',
        },
        {
          title: '生产状况',
          dataIndex: 'PRODUCTION',
          key: 'PRODUCTION ',
        },
        {
          title: '计划停机',
          dataIndex: 'PSHUTDOWN',
          key: 'PSHUTDOWN',
        },
        {
          title: '异常停机',
          dataIndex: 'ASHUTDOWN',
          key: 'ASHUTDOWN',
        },
        {
          title: '累计时间',
          dataIndex: 'ACCTIME',
          key: 'ACCTIME',
        },
        {
          title:'OEE',
          dataIndex:'OEE',
          key:'OEE',
        },
      ];
      return columns3;
    };

    return (
      <div style={{ width: '100%', height: '100%', paddingTop:'0.2%',paddingLeft: '0.2%', paddingRight: '0.2%',position:'absolute' }}>
        <div style={{ height: '85%', }}>
          <Row gutter={1}>
            <Col span={12}>
              <Table dataSource={chaifen(baik(data1))[0]}
                     columns={biao1(data1)}
                     size={'middle'}
                     bordered
                     pagination={false}
                     rowClassName={
                       (record, index) => record.FRATE.replace(/[^\d.]/g,'') <= 15 ? styles.rowcolor3 :(record.FRATE=== '100%' ? styles.rowcolor2 : styles.rowcolor1 ) }
                     className='tuzhuangAshangliao'
              />
            </Col>
            <Col span={12}>
              <Table
                    dataSource={chaifen(baik(data1))[1]}
                     columns={biao2(data1)}
                     size={'middle'}
                     bordered
                     pagination={false}
                     rowClassName={(record, index) => record.FRATE.replace(/[^\d.]/g,'') <= 15 ? styles.rowcolor3 :(record.FRATE=== '100%' ? styles.rowcolor2 : styles.rowcolor1 ) }
                     className='tuzhuangAshangliao'
              />
            </Col>
          </Row>
        </div>
        <div style={{ height: '18%' }}>
          <Row>
            <Col span={24}>
              <Table dataSource={data2}
                     columns={biao3()}
                     bordered
                     pagination={false}
                     className='tuzhuangAshangliao'
              />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Ling8;
