import React from 'react';
import { connect } from 'dva';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { Table } from 'antd';
import './TZSBJK.less';

@connect(({ tzsbjk }) => ({ tzsbjk }))
class TZSBJK extends React.Component {
  state = {
    myurl: '武汉六丰WP1设备看板—设备监控',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'tzsbjk/getData',
    });
  }


  render() {
    const { data, data2 } = this.props.tzsbjk;
    const tableData = {};
    data.map((item, index) => {
      if (tableData.hasOwnProperty(item[`SYSID`])) {
        tableData[`${item[`SYSID`]}`][`ACTVALUE2`] = item[`ACTVALUE`];
        tableData[`${item[`SYSID`]}`][`TAGDESC2`] = item[`TAGDESC`];
        tableData[`${item[`SYSID`]}`][`STANDARDVALUE2`] = item[`STANDARDVALUE`];
      } else {
        tableData[`${item[`SYSID`]}`] = {
          ACTVALUE: item[`ACTVALUE`],
          ATTRIBUTE1: item[`ATTRIBUTE1`],
          STANDARDVALUE: item[`STANDARDVALUE`],
          TAGDESC: item[`TAGDESC`],
          key: `${index}xh`,
        };
      }
    });
    data2.map((item) => {
      if (tableData.hasOwnProperty(`${item[`SYSID`]}`)) {
        tableData[`${item[`SYSID`]}`][`RUNSTATE`] = item[`RUNSTATE`];
        tableData[`${item[`SYSID`]}`][`RUNSTATE2`] = item[`RUNSTATE2`];
        tableData[`${item[`SYSID`]}`][`RUNDESC`] = item[`RUNDESC`];
        tableData[`${item[`SYSID`]}`][`RUNDESC2`] = item[`RUNDESC2`];
      }
    });
    const tableDatas = [];
    for (let key in tableData) {
      tableDatas.push(tableData[key]);
    }

    const column = [
      {
        title: '项目',
        dataIndex: 'TAGDESC',
        align: 'center',
        render: (text) => {
          const obj = {
            children: text,
            props: {
              style: {
                color: 'white',
              },
            },
          };
          return obj;
        },
      },
      {
        title: '标准值',
        dataIndex: 'STANDARDVALUE',
        align: 'center',
      }, {
        title: '实际值',
        dataIndex: 'ACTVALUE',
        align: 'center',
        render: (text) => {
          const obj = {
            children: Math.round(parseFloat(text)),
          };
          return obj;
        },
      }, {
        title: '状态',
        dataIndex: 'RUNSTATE',
        align: 'center',
        render: (text, record) => {
          let background;
          let value = record[`RUNDESC`];
          if (text === `1`) {
            background = 'grey';
          } else if (text === '2') {
            const biaozhunzhi = record[`STANDARDVALUE`];
            const zhi = biaozhunzhi.split(`±`);
            const max = parseFloat(zhi[0]) + parseFloat(zhi[1]);
            const min = parseFloat(zhi[0]) - parseFloat(zhi[1]);
            const shijizhi = Math.round(parseFloat(record[`ACTVALUE`]));
            // console.log(max,min,shijizhi)
            if (max >= shijizhi && min <= shijizhi) {
              background = 'green';
            } else {
              background = 'red';
              value = '超标';
            }
          } else {
            background = 'red';
          }
          const obj = {
            children: value,
            props: {
              style: {
                background,
              },
            },
          };
          return obj;
        },
      }, {
        title: '项目',
        dataIndex: 'TAGDESC2',
        align: 'center',
        render: (text) => {
          const obj = {
            children: text,
            props: {
              style: {
                color: 'white',
              },
            },
          };
          return obj;
        },
      }, {
        title: '标准值',
        dataIndex: 'STANDARDVALUE2',
        align: 'center',
      }, {
        title: '实际值',
        dataIndex: 'ACTVALUE2',
        align: 'center',
        render: (text, record) => {
          return record[`RUNDESC2`] === `停线` ? 0 : text;
        },
      }, {
        title: '状态',
        dataIndex: 'RUNSTATE2',
        align: 'center',
        render: (text, record) => {
          let background;
          let value = record[`RUNDESC2`];
          if (text === `1`) {
            background = 'grey';
          } else {
            const biaozhunzhi = record[`STANDARDVALUE2`];
            const zhi = biaozhunzhi.split(`±`);
            const max = parseFloat(zhi[0]) + parseFloat(zhi[1]);
            const min = parseFloat(zhi[0]) - parseFloat(zhi[1]);
            const shijizhi = parseFloat(record[`ACTVALUE2`]);
            background = 'green';
            if (max > shijizhi && min < shijizhi) {
              background = 'green';
            } else {
              background = 'red';
              value = '超标';
            }
          }
          const obj = {
            children: value,
            props: {
              style: {
                background,
              },
            },
          };
          return obj;
        },
      },
    ];
    return (
      <div className='tuzhuangshebeijiankong' style={{ width: '100%', height: '100%', backgroundColor: '#2d1818' }}>
        <BoardHeader myurl={this.state.myurl}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%', width: '100%', position: 'relative', padding: '5px 25px' }}>
          <Table bordered columns={column} pagination={false} dataSource={tableDatas}/>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default TZSBJK;
