import React from 'react';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import { connect } from 'dva/index';
import { Table, Icon, Row, Col } from 'antd';
import './Rechulishebei.less';


// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
@connect(({ rechulishebei }) => ({
  rechulishebei,
}))
class Rechulishebei extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'rechulishebei/fetchData',
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      myurl: 'WF1工位看板——热处理炉设备状况',
      myHeaderName: '早班',
    };
  };

  render() {
    const data = this.props.rechulishebei.data;
    const data1 = this.props.rechulishebei.data1;

    //第二张表的表头数据
    const devCount2 = () => {
      const c2 = [];
      data1.map(item => {
        if (c2.indexOf(item.DEVICESCODE) === -1) {
          c2.push(item.DEVICESCODE);
        }
      });
      return c2;
    };

    const column2State = () => {
      const data2 = {};
      data1.map(item => {
        if (!data2.hasOwnProperty(item['DEVICESCODE'])) {
          data2[item['DEVICESCODE']] = item.RUNSTATE;
        }
      });
      return data2;
    };

    //第二张表的表头
    const column2 = () => {
      const columnData = [
        {
          title: '',
          dataIndex: 'jitaizhuangtai',
          key: 'jitaizhuangtai',
          width: '35%',
        },
      ];
      devCount2().map((item, index) => {
        columnData.push(
          {
            title: `${item}`,
            dataIndex: `${item}`,
            key: `${item}`,
            render: (text, record, indexx) => {
              const obj = {
                children: text,
                props: {
                  style: {
                    background: (() => {
                      if (indexx === 0) {
                        if (column2State()[`${item}`] !== '正常') {
                          return 'red';
                        } else {
                          return null;
                        }
                      } else {
                        return null;
                      }
                    })(),
                  },
                },
              };
              return obj;
            },
          },
        );
      });
      return columnData;
    };

    //第一张表的表头数据
    const devCount = () => {
      const c1 = [];
      data.map(item => {
        if (c1.indexOf(item.ATTRIBUTE1) === -1) {
          c1.push(item.ATTRIBUTE1);
        }
      });
      return c1;
    };

    //第二张表数据
    const tableData2 = () => {
      const d2 = {
        RUNSTATE: '机台状态',
        FSTATE: '故障停机',
        QSTATE: '品质停机',
        PSTATE: '计划停机',
        LOSTTIME: '累计时间',
      };
      const dd = ['RUNSTATE', 'FSTATE', 'QSTATE', 'PSTATE', 'LOSTTIME'];
      const tableData22 = [{}, {}, {}, {}, {}];
      dd.map((item, index) => {
        tableData22[index].jitaizhuangtai = d2[item];
        data1.map(items => {
          tableData22[index][items.DEVICESCODE] = items[item];
        });

      });
      return tableData22;
    };

    const columnState = () => {
      const datas = {};
      data.map(item => {
        if (!data.hasOwnProperty(item.ATTRIBUTE1)) {
          datas[item.ATTRIBUTE1] = item.DEVICESTATUS;
        }
      });
      return datas;
    };

    // 第一张表头
    const column1 = () => {
      const columnData = [
        {
          title: '',
          dataIndex: 'columnValue1',
          width: '26%',
          align: 'center',
          render: (text, record) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> :
            <div style={{ color: 'white' }}>{text}</div>,
        }, {
          title: '标准',
          dataIndex: 'biaozhun',
          align: 'center',
          width: '19%',
          render: (text, record) => <div style={{ color: '#BCBCBC' }}>{text}</div>,
        },
      ];
      devCount().map(item => {
        columnData.push(
          {
            title: <div style={{ background: columnState()[item] !== '正常' ? '#a8a8a8' : null }}>{`${item}`}</div>,
            dataIndex: `${item}`,
            key: `${item}`,
            align: 'center',
            width: '17%',
            render: (text, record) => {
              console.log(record[`${item}state`])
              // console.log(text,3333)

              const value = () => {
                if (record[`${item}state`] !== '离线') {
                  const reg = /^[0-9]+.?[0-9]*$/;
                  if (reg.test(parseInt(text))) {
                    return Math.round(parseInt(text));
                  } else {
                    return text;
                  }
                } else {
                  return 0;
                }
              };
              const bground = () => {
                if (record[`${item}state`] === '正常') {
                  if (text === undefined) {
                    return null;
                    // 超过最大值
                  } else if (record.biaozhun === '') {
                    return null;
                  }
                  else if (Math.round(parseInt(text)) > record.MAXVALUE) {
                    return 'red';
                    // 小于最小值
                  } else if (Math.round(parseInt(text)) < record.MINVALUE) {
                    return 'red';
                    // 正常
                  } else {
                    return null;
                  }
                } else {
                  if (record[`${item}state`] === undefined) {
                    return null;
                  } else {
                    return '#a8a8a8';
                  }
                }
              };


              const obj = {
                children: value(),
                props: {
                  style: {
                    background: bground(),
                    color: '#FFFF00',
                  },
                },
              };
              return obj;
            },
          },
        );
      });
      return columnData;
    };

    const tableData1 = () => {
      const tableData = [];
      for (let x = 0; x < 9; x++) {
        tableData.push({ key: `${x}zzzz` });
      }
      const devCount1 = devCount().length;
      const tableCount = data.length / devCount1;
      data.map((item, index) => {
        const flag = index % tableCount;
        tableData[flag][`${item.ATTRIBUTE1}state`] = item.DEVICESTATUS;
        tableData[flag].columnValue1 = item.TAGDESC;
        tableData[flag].biaozhun = item.STANDARDVALUE;
        tableData[flag][item.ATTRIBUTE1] = item.ACTVALUE;
        tableData[flag].MAXVALUE = item.MAXVALUE;
        tableData[flag].MINVALUE = item.MINVALUE;
        tableData[flag].key = `${index}zzz`;
      });
      return tableData;
    };

    const column3 = [
      {
        title: '项次',
        dataIndex: 'xiangci',
        key: 'xiangci',
      },
      {
        title: '发生时间',
        dataIndex: 'fashengshijian',
        key: 'fashengshijian',
        render: (text) => text === '' ? <div style={{ visibility: 'hidden' }}>1</div> :
          <div style={{ color: 'yellow' }}>{text}</div>,
      },
      {
        title: '故障代码',
        dataIndex: 'daima',
        key: 'daima',
        render: (text) => <div style={{ color: 'yellow' }}>{text}</div>,
      },
      {
        title: '故障描述',
        dataIndex: 'miaoshu',
        key: 'miaoshi',
        render: (text) => <div style={{ color: 'yellow' }}>{text}</div>,
      },
    ];

    const data3 = [
      {
        xiangci: '',
        fashengshijian: '',
        daima: '',
        miaoshu: '',
      },
      {
        xiangci: '',
        fashengshijian: '',
        daima: '',
        miaoshu: '',
      }, {
        xiangci: '',
        fashengshijian: '',
        daima: '',
        miaoshu: '',
      }, {
        xiangci: '',
        fashengshijian: '',
        daima: '',
        miaoshu: '',
      },
    ];

    return (
      <div ref='fullscreen' style={{ background: '#2D1818', height: '100%' }}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ paddingLeft: '0.2%', paddingRight: '0.2%', height: '84%', width: '100%' }}>
          <div style={{ width: '59%', float: 'left' }}>
            <Table className='rechulishebei'
                   dataSource={tableData1()}
                   columns={column1()}
                   bordered
                   pagination={false}/>
          </div>

          <div style={{ width: '41%', paddingLeft: '1%', float: 'left' }}>
            <Table className='rechulishebeiTable2'
                   bordered
                   columns={column2()}
                   dataSource={tableData2()}
                   pagination={false}/>

            <div style={{ paddingTop: '8%' }}>
              <Table
                className='rechulishebeiTable2'
                bordered
                columns={column3}
                dataSource={data3}
                pagination={false}
              />
            </div>
          </div>
          {/*<div style={{paddingTop:'5.2%'}}>*/}

          {/*</div>*/}

          {/*<Icon style={{fontWeight:'bold',fontSize:'6vh',color:'red'}} type="arrow-up" />*/}
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default Rechulishebei;
