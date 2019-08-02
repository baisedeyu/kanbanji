import React from 'react';
import { Row, Col, Table } from 'antd';
import styles from '../Ling1/Ling1.css';
import './Ling12.less';

class Ling1 extends React.Component {
  render() {
    const { zhishi2, lvtang2, CHECKER, PHONENO, SHIFTDESC } = this.props;

    const data1 = () => {
      const data = lvtang2;
      const count = data.length;
      data.map((item, index) => {
        item.key = item['CFFXNO'] + index;
      });
      if (count === 0) {
        return [];
      } else if (count < 15) {
        for (let x = 0; x < 15 - count; x++) {
          data.push({ key: `${x}lv` });
        }
        return data;
      } else {
        return data.slice(0, 15);
      }
    };

    const data2 = () => {
      const da = {};
      const data = zhishi2;
      const tableD = [];
      data.map(item => {
        const d = item['STIME'].toString();
        const ed = item['ETIME'].toString();
        const Ttime = `${d.length < 6 ? '0' + d.substr(0, 1) : d.substr(0, 2)}:${d.length < 6 ? d.substr(1, 2) : d.substr(2, 2)}-${ed.length < 6 ? '0' + ed.substr(0, 1) : ed.substr(0, 2)}:${ed.length < 6 ? ed.substr(1, 2) : ed.substr(2, 2)}`;
        item.Ttime = Ttime;
        const ke = `${Ttime}${item.DSSCODE}`;
        if (da.hasOwnProperty(ke)) {
          switch (item.ITEMCODE) {
            case '15791':
              da[ke]['Mg'] = item.ADDAMOUNT;
              break;
            case '15702':
              da[ke]['Si'] = item.ADDAMOUNT;
              break;
            case '15701':
              da[ke]['AlTib'] = item.ADDAMOUNT;
              break;
          }
        } else {
          const year = `${item[`STIME`]}`;
          const time = `${item[`ETIME`]}`.length === 5 ? `0${item[`ETIME`]}` : `${item[`ETIME`]}`;
          const timer=`${year.substr(0,4)}/${year.substr(4,2)}/${year.substr(6,2)} ${time.substr(0,2)}:${time.substr(2,2)}`
          da[ke] = {
            Time: timer,
            DSSCODE: item.DSSCODE,
            Mg: 0,
            Si: 0,
            AlTib: 0,
            key: ke,
          };
          switch (item.ITEMCODE) {
            case '15791':
              da[ke]['Mg'] = item.ADDAMOUNT;
              break;
            case '15702':
              da[ke]['Si'] = item.ADDAMOUNT;
              break;
            case '15701':
              da[ke]['AlTib'] = item.ADDAMOUNT;
              break;
          }
        }

      });
      for (let key in da) {
        tableD.push(da[key]);
      }
      const count = tableD.length;
      if (count < 8) {
        for (let x = 0; x < 8 - count; x++) {
          tableD.push({
            key:
              `${x}zhishib`,
          });
        }
        return tableD;
      } else {
        return tableD.slice(0, 8);
      }

    };


    const columns1 = [
      {
        title: '样式编号',
        dataIndex: 'CFFXNO',
        // width: '27%',
        align: 'center',
        render: (text) => {
          const obj = {
            children: text,
            props: {},
          };
          return obj;
        },
      }, {
        title: '注入机台',
        dataIndex: 'MACHINENO',
        width: '25%',
        align: 'center',
        render: (text) => {
          let d =
            ``
          ;
          if (text !== undefined) {
            if (text !== '') {
              d = text.replace(/;/g, '#');
              if (d.charAt(d.length - 1) !== '#') {
                d += '#';
              }
            }
          }

          const obj = {
            children: d,
            props: {},
          };
          return obj;
        },
      }, {
        title: '时间',
        dataIndex: 'STATICTIME',
        width: '8%',
        align: 'center',
        render: text => {
          if (text !== undefined && text !== '') {
            const mytime = text.split(' ')[1].split(':');
            const data =
              `${mytime[0].length < 2 ? '0' + mytime[0] : mytime[0]}:${mytime[1].length < 2 ? '0' + mytime[1] : mytime[1]}`
            ;
            return data;
          } else {
            return '';
          }
        },
      }, {
        title: '成分判定',
        dataIndex: 'AIWATERRESULT',
        width: '14%',
        align: 'center',
        render: (text, record) => text === undefined ? <div style={{ visibility: 'hidden' }}>{'1'} </div> :
          text === '1' ? <div>合格</div> : text === '0' ? <div>不合格</div> : <div>{''}</div>,
      }, {
        title: '含氢量(g/cm)',
        dataIndex: 'HYDROGENNUM',
        width: '22%',
        align: 'center',
      }];

    const columns2 = [
      {
        title: '添加时间段',
        dataIndex: 'Time',
        align: 'center',
        render: (text) => <div style={{ color: 'white' }}>{text}</div>,
      },
      {
        title: '炉号',
        dataIndex: 'DSSCODE',
        align: 'center',

      },
      {
        title: 'Mg(克)',
        dataIndex: 'Mg',
        align: 'center',
      },
      {
        title: 'Si(克)',
        dataIndex: 'Si',
        align: 'center',
        render: (text, record) => text === undefined ? <div style={{ visibility: 'hidden' }}>{'1'} </div> :
          <div>{text}</div>,
      },
      {
        title: 'AITib(克)',
        dataIndex: 'AlTib',
        align: 'center',
      },
    ];

    return (
      <div style={{ width: '100%', height: '100%', position: 'absolute', paddingLeft: '0.2%', paddingRight: '0.2%' }}>
        <div style={{ height: '100%', width: '60%', float: 'left' }}>
          <div>
            <Row>
              <Col span={6}>
                      <span style={{ color: '#fefdff', textAlign: 'left', fontSize: '3vh ' }}>班别：{
                        `${SHIFTDESC}`
                      }</span>
              </Col>
              <Col span={6}>
                      <span style={{ color: '#fefdff', textAlign: 'left', fontSize: '3vh ' }}>检测者：{
                        `${CHECKER}`
                      }</span>
              </Col>
              <Col span={12}>
                      <span style={{ color: '#fefdff', textAlign: 'left', fontSize: '3vh ' }}>联络电话：{
                        `${PHONENO}`
                      }</span>
              </Col>
            </Row>
          </div>

          <div style={{ height: '100%', width: '99%' }}>
            <hr/>
            <Table dataSource={data1()}
                   className='lvtangtable'
                   columns={columns1}
                   bordered
                   pagination={false}
                   rowClassName={(record) => record.AIWATERRESULT === 'NG' ? styles.lvtangrowcolor : styles.lvtangrowcolor1}
            />
          </div>
        </div>

        <div style={{ height: '100%', width: '40%', float: 'left' }}>
          <div><p style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '9vh',
            marginBottom: '1%',
            marginTop: '6%',
          }}>添加指示</p></div>
          <hr/>
          <Table dataSource={data2()}
                 className='lvtangtable'
                 columns={columns2}
                 bordered
                 pagination={false}
                 rowClassName={styles.lvtangrowcolor1}
          />
        </div>
      </div>
    );
  }
}

export default Ling1;
