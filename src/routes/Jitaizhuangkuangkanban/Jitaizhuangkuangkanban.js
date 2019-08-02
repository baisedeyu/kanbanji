import React from 'react';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { Row, Col, Table } from 'antd';
import styles from './Jitaizhuangkuangkanban.less';
import { connect } from 'dva';

const data = [
  {
    'ACHIEVINGRATE': 0,
    'BACKWARD': 0,
    'CHECKUSER': '',
    'DEVICESCODE': '2#',
    'DIFFERENCE': 0,
    'DISPLAYPOINTCODE': 'YND01009',
    'FSTATE': '0',
    'LMGSTATE': '0',
    'LOSTTIME': 0,
    'MTSTATE': '0',
    'OEE': 0,
    'OPUSER': '',
    'ORGID': 118,
    'PSTATE': '0',
    'QR': 0,
    'QSTATE': '0',
    'RUNSTATE': '停机',
    'SHIFTDESC': '白班',
    'SHIFTINPUT': 0,
    'SHIFTOUT': 0,
    'SHIFTPOUT': 0,
    'SYSID': 900000000000000002,
    'TOTALOUT': 0,
    'UTILIZATIONRATE': 100,
  }, {
    'ACHIEVINGRATE': 0,
    'BACKWARD': 0,
    'CHECKUSER': '',
    'DEVICESCODE': '3#',
    'DIFFERENCE': 0,
    'DISPLAYPOINTCODE': 'YND01009',
    'FSTATE': '0',
    'LMGSTATE': '0',
    'LOSTTIME': 0,
    'MTSTATE': '0',
    'OEE': 0,
    'OPUSER': '',
    'ORGID': 118,
    'PSTATE': '0',
    'QR': 0,
    'QSTATE': '0',
    'RUNSTATE': '停机',
    'SHIFTDESC': '白班',
    'SHIFTINPUT': 0,
    'SHIFTOUT': 0,
    'SHIFTPOUT': 0,
    'SYSID': 900000000000000002,
    'TOTALOUT': 0,
    'UTILIZATIONRATE': 100,
  },
];


const biaoti = ['当班标量', '即时产量', '累计产量', '超前', '稼动率', '落后'];


@connect(({ jtzkkb }) => ({ jtzkkb }))
class Jitaizhuangkuangkanban extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'jtzkkb/fetchData',
    });
  }

  render() {
    const { data: dataa,title } = this.props.jtzkkb;
    const dddd = () => {
      const dd = [{}, {}, {}];
      dataa.map((item, index) => {
        dd[index] = item;
      });
      return dd;
    };

    const column = [
      {
        dataIndex: 'value',
        key: 'value',
        render: (text, record) => <div style={{ color: 'white' }}>{text}</div>,
      },
      {
        dataIndex: 'value1',
        key: 'value1',
        render: (text, record,indexs) => {
          const obj = {
            children: text,
            props: {
              style: {
                color: 'yellow',
              },
            },
          };
          if (text === undefined | text === NaN) {
            obj.children = '';
          }
         if (indexs===4){
           if (text===-1){
             obj.children=''
           } else {
             obj.children=`${text}%`
           }
         }
          return obj;
        },
      },
    ];
    const tableData = (params) => {
      const data1 = [];
      const data2 = [dddd()[params].SHIFTPOUT, dddd()[params].SHIFTPOUT_CUR, dddd()[params].SHIFTOUT, dddd()[params].BACKWARD, dddd()[params].UTILIZATIONRATE];
      for (let x = 0; x < 5; x++) {
        data1.push({});
      }
      data1.map((item, index) => {
        if (index === 3) {
          console.log(data2[index]);
          if (data2[index] >= 0) {
            item.value = biaoti[index];
            item.value1 = data2[index];
          } else {
            item.value = biaoti[5];
            item.value1 = Math.abs(data2[index]);
          }

        } else {
          item.value = biaoti[index];
          item.value1 = data2[index];
        }

      });
      return data1;
    };

    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#2d1818' }}>
        <BoardHeader myurl={title} myHeaderName={title}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%' }}>
          <div style={{ width: '98%', height: '85%', float: 'left', marginLeft: '1%', marginTop: '0.5%' }}>
            <Row type="flex" justify="space-around">

              <Col span={8}>
                <div style={{ width: '100%', height: '100%' }}>
                  <div className={styles.devIDBox}>{dddd()[0] !== undefined ? dddd()[0].DEVICESCODE : ''}</div>
                  <img style={{ width: '90%', paddingLeft: '8%' }}
                       src={require('../../assets/img/jitaizhuangtai.png')}/>
                  <div className={styles.devState}
                       style={{ background: dddd()[0].RUNSTATE === '停机' ? 'red' : 'green' }}>{dddd()[0] !== undefined ? dddd()[0].RUNSTATE : ''}</div>
                </div>
                <div style={{ position: 'absolute', top: '110%', left: '20%', width: '60%' }}>
                  <Table className='jitaizhuangkuang' showHeader={false} dataSource={tableData(0)} columns={column}
                         bordered pagination={false}/>
                </div>

              </Col>
              <Col span={8}>
                <div style={{ width: '100%', height: '100%' }}>
                  <div className={styles.devIDBox}>{dddd()[1] !== undefined ? dddd()[1].DEVICESCODE : ''}</div>
                  <img style={{ width: '90%', paddingLeft: '8%' }}
                       src={require('../../assets/img/jitaizhuangtai.png')}/>
                  <div className={styles.devState}
                       style={{ background: dddd()[1].RUNSTATE === '停机' ? 'red' : 'green' }}>{dddd()[1] !== undefined ? dddd()[1].RUNSTATE : ''}</div>
                </div>
                <div style={{ position: 'absolute', top: '110%', left: '20%', width: '60%' }}>
                  <Table className='jitaizhuangkuang' showHeader={false} dataSource={tableData(1)} columns={column}
                         bordered pagination={false}/>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ width: '100%', height: '100%' }}>
                  <div className={styles.devIDBox}>{dddd()[2] !== undefined ? dddd()[2].DEVICESCODE : ''}</div>
                  <img style={{ width: '90%', paddingLeft: '8%' }}
                       src={require('../../assets/img/jitaizhuangtai.png')}/>
                  <div className={styles.devState}
                       style={{ background: dddd()[2].RUNSTATE === '停机' ? 'red' : 'green' }}>{dddd()[2] !== undefined ? dddd()[2].RUNSTATE : ''}</div>
                </div>
                <div style={{ position: 'absolute', top: '110%', left: '20%', width: '60%' }}>
                  <Table className='jitaizhuangkuang' showHeader={false} dataSource={tableData(2)} columns={column}
                         bordered pagination={false}/>
                </div>
              </Col>

            </Row>
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default Jitaizhuangkuangkanban;
