import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import './Xray.less';

@connect(({ xray }) => ({
  xray,
}))

class LingZhong1 extends React.Component {

  componentWillMount() {
    this.getData();
    this.xtime = setInterval(this.getData, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.xtime);
  }

  getData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'xray/fetchData',
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      myurl: 'WF1--工位看板--Xray',
      myHeaderName: '早班',
    };
  }

  render() {
    const { tableData3, CurPage3, tableData1, CurPage1, tableData2, CurPage2, tableData4, CurPage4 } = this.props.xray;

    const data2 = this.props.xray.data2;
    const tableDatas2 = () => {
      const data = [];
      for (let x = 0; x < 4; x++) {
        data.push({});
      }
      if (data2.length === 0) {
        return [];
      } else {
        data2.map((item, index) => {
          data[index] = item;
        });
      }
      return data;
    };
    const column2 = [
      {
        title: '线别',
        dataIndex: 'DEVICESCODE',
        key: 'DEVICESCODE',
        render: (text) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
      },
      {
        title: '操作员',
        dataIndex: 'CHECKUSER',
        key: 'CHECKUSER',
      },
      {
        title: '当班标量',
        dataIndex: 'SHIFTPOUT',
        key: 'SHIFTPOUT',
      },
      {
        title: '投入数',
        dataIndex: 'SHIFTINPUT',
        key: 'SHIFTINPUT',
      },
      {
        title: '完成比率',
        dataIndex: 'completionRatio',
        key: 'completionRatio',
      },
      {
        title: '进度',
        dataIndex: 'speedOfProgress',
        key: 'speedOfProgress',
      },
      {
        title: '生产状况',
        dataIndex: 'RUNSTATE',
        key: 'RUNSTATE',
      },
      {
        title: '计划停机',
        dataIndex: 'PSTATE',
        key: 'PSTATE',
      },
      {
        title: '异常停机',
        dataIndex: 'FSTATE ',
        key: 'FSTATE ',
      },
      {
        title: '累计时间',
        dataIndex: 'LOSTTIME',
        key: 'LOSTTIME',
      },
      {
        title: '稼动率',
        dataIndex: 'UTILIZATIONRATE',
        key: 'UTILIZATIONRATE',
      },
    ];
    const header2 = ['型式', '投入数', '不良数', '不良率'];
    const data = this.props.xray.data;
    const columns = () => {
      const column1 = [];
      data.map((item, index) => {
        if (index < 4) {
          column1.push({
            title: item['DEVICESCODE'],
            key: `${index}ccc`,
            children: [
              {
                title: '型式',
                dataIndex: `${item['DEVICESCODE']}MODELNAME`,
                render: (text, record) => {
                  const obj = {
                    children: text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
                  };
                  return obj;
                },
              }, {
                title: '投入',
                dataIndex: `${item['DEVICESCODE']}SHIFTINPUT`,
              }, {
                title: '不良',
                dataIndex: `${item['DEVICESCODE']}SHIFTNGOUT`,
              }, {
                title: '不良率',
                dataIndex: `${item['DEVICESCODE']}RATE`,
              },
            ],
          });
        }

      });
      return column1;
    };

    const tableDatas = () => {
      const dataa = [{}, {}, {}, {}, {}, {}, {}, {}];
      const tableData = [{}, {}, {}, {}, {}, {}, {}, {}];

      let d1;
      let d2;
      let d3;
      let d4;
      if (tableData1[`lstDeviceXray`] !== undefined) {
        d1 = tableData1[`lstDeviceXray`].slice((CurPage1 - 1) * 8, CurPage1 * 8);
        d1.map((item, index) => {
          tableData[index][`${tableData1[`DEVICESCODE`]}MODELNAME`] = item['MODELNAME'];
          tableData[index][`${tableData1[`DEVICESCODE`]}SHIFTINPUT`] = item['SHIFTINPUT'];
          tableData[index][`${tableData1[`DEVICESCODE`]}SHIFTNGOUT`] = item['SHIFTNGOUT'];
          tableData[index][`${tableData1[`DEVICESCODE`]}RATE`] = item['RATE'];
        });
      }
      if (tableData2[`lstDeviceXray`] !== undefined) {
        d2 = tableData2[`lstDeviceXray`].slice((CurPage2 - 1) * 8, CurPage2 * 8);
        d2.map((item, index) => {
          tableData[index][`${tableData2[`DEVICESCODE`]}MODELNAME`] = item['MODELNAME'];
          tableData[index][`${tableData2[`DEVICESCODE`]}SHIFTINPUT`] = item['SHIFTINPUT'];
          tableData[index][`${tableData2[`DEVICESCODE`]}SHIFTNGOUT`] = item['SHIFTNGOUT'];
          tableData[index][`${tableData2[`DEVICESCODE`]}RATE`] = item['RATE'];
        });
      }

      if (tableData3[`lstDeviceXray`] !== undefined) {
        d3 = tableData3[`lstDeviceXray`].slice((CurPage3 - 1) * 8, CurPage3 * 8);
        d3.map((item, index) => {
          tableData[index][`${tableData3[`DEVICESCODE`]}MODELNAME`] = item['MODELNAME'];
          tableData[index][`${tableData3[`DEVICESCODE`]}SHIFTINPUT`] = item['SHIFTINPUT'];
          tableData[index][`${tableData3[`DEVICESCODE`]}SHIFTNGOUT`] = item['SHIFTNGOUT'];
          tableData[index][`${tableData3[`DEVICESCODE`]}RATE`] = item['RATE'];
        });
      }

      if (tableData4[`lstDeviceXray`] !== undefined) {
        d4 = tableData4[`lstDeviceXray`].slice((CurPage4 - 1) * 8, CurPage4 * 8);
        d4.map((item, index) => {
          tableData[index][`${tableData4[`DEVICESCODE`]}MODELNAME`] = item['MODELNAME'];
          tableData[index][`${tableData4[`DEVICESCODE`]}SHIFTINPUT`] = item['SHIFTINPUT'];
          tableData[index][`${tableData4[`DEVICESCODE`]}SHIFTNGOUT`] = item['SHIFTNGOUT'];
          tableData[index][`${tableData4[`DEVICESCODE`]}RATE`] = item['RATE'];
        });
      }
      return tableData;
    };

    return (
      <div style={{ height: '100%', backgroundColor: '#2d1818' }}>
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
        <div style={{ height: '84%', width: '100%', position: 'relative', paddingLeft: '2%', paddingRight: '2%' }}>
          <div>
            <Table className='Xray' dataSource={tableDatas()} columns={columns()} pagination={false} bordered/>
          </div>
          <div style={{ position: 'relative', top: '1%' }}>
            <Table className='Xray' dataSource={tableDatas2()} columns={column2} bordered pagination={false}/>
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default LingZhong1;
