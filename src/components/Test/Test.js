import React from 'react';
import { Row, Col, Table } from 'antd';
import styles from '../Test/Test.css'

class Test extends React.Component {


  // componentDidMount(){
  //   for( let d of document.getElementsByClassName('d')){
  //     d.parentNode.style.background = 'black'
  //   }
  // }

  render() {

    //表格单元格背景颜色
    for( let d of document.getElementsByClassName('d')){
        d.parentNode.previousSibling.style.background = 'black';
        d.parentNode.previousSibling.style.color='white';
    }

    const data1 = this.props.se1;
    const data2 = this.props.se2;

    //将数据data1拆分为2个数组
    const chaifen = (data = []) => {
      let size;
      if(data.length<=13 && data.length>=1){
        size=data.length;
      }else if(data.length>13 && data.length<=26){
        size=13;
      }else {
        size=(data.length+1)/2
      }

      let T1 = [];
      for (let i = 0; i < data.length; i = i + size) {
        let T2 = [];
        T2 = data;
        T1.push(T2.slice(i, i + size));
      }
      return T1;
    };

    const biao1 = (data = []) => {
      let columns1 = [
        {
          title: '线别',
          dataIndex: 'LINE',
          key: 'LINE',
          width: '9%',
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
          render:(text,row,index)=> index===0 ? <div className={'d'}>{text}</div> : <div>{text}</div>
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
          title:'稼动率',
          dataIndex:'JRATE',
          key:'JRATE',
        },
      ];
      return columns3;
    };

    return (
      <div style={{ width: '100%', height: '100%', paddingLeft: '0.2%', paddingRight: '0.2%',position:'absolute' }}>
        <div style={{ height: '81%', overflow: 'auto'}}>
          <Row >
            <Col span={12}>
              <Table dataSource={chaifen(data1)[0]}
                     columns={biao1(data1)}
                     size={'middle'}
                     bordered
                     pagination={false}
                    rowClassName={(record, index) => record.FRATE.replace(/[^\d.]/g,'') <= 15 ? styles.rowcolor3 :(record.FRATE=== '100%' ? styles.rowcolor2 : styles.rowcolor1 ) }
              />
            </Col>
            <Col span={12}>
              <Table dataSource={chaifen(data1)[1]}
                     columns={biao2(data1)}
                     size={'middle'}
                     bordered
                     pagination={false}
                    rowClassName={(record, index) => record.FRATE.replace(/[^\d.]/g,'') <= 15 ? styles.rowcolor3 :(record.FRATE=== '100%' ? styles.rowcolor2 : styles.rowcolor1 ) }
              />
            </Col>
          </Row>
        </div>
        <br/>
        <div style={{ height: '19%' }}>
          <Row>
            <Col span={24}>
              <Table dataSource={data2}
                     columns={biao3()}
                     size={'middle'}
                     bordered
                     pagination={false}
                     rowClassName={styles.rowcolor1}
              />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Test;
