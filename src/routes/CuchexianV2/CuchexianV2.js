import React from 'react';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import { Table } from 'antd';
import styles from './CuchexianV2.less';
import { connect } from 'dva';
// const data=[
//   {
//     DEVICESCODE:'1#',
//     MODEL:'Q52',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'1#',
//     MODEL:'Q52',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'2#',
//     MODEL:'Q50',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'2#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'2#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'2#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'3#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'3#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'3#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'4#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'4#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   },{
//     DEVICESCODE:'4#',
//     MODEL:'Q51',
//     SHIFTINPUT:50,
//     SHIFTOUT:40,
//     SHIFTNGOUT:1,
//     QR:80,
//     PQCSTATE:'首检'
//   }
// ]


@connect(({ cuchexian }) => ({
  cuchexian,
}))
class CuchexianV2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myurl: 'WM1工位看板——粗车线1单元',
      myHeaderName: '早班',
      divHeight: 100.,
    };
  };

  componentDidMount() {
    // this.ddd()
    this.props.dispatch({
      type: 'cuchexian/fetchData',
    });
  }

  // ddd(){
  //   this.setState({
  //     divHeight:(document.getElementsByClassName('mastDiv')[0].offsetHeight-45)/(data.length+1)
  //   })
  // }

  render() {
    console.log(this.state.divHeight);
    const { OUTPUT, WMPRODUCTION } = this.props.cuchexian;
    console.log(OUTPUT, WMPRODUCTION, 333);
    const tableData2 = () => {
      const hengmykey = [];
      const shumykey = ['SHIFTPOUT', 'SHIFTINPUT', 'SHIFTOUT', 'QR', 'MTLOSSTIME', 'QLOSSTIME', 'FLOSTTIME', 'LMGLOSTTIME', 'LOSTTIME', 'RUNSTATE', 'UTILIZATIONRATE'];
      WMPRODUCTION.map(item => {
        hengmykey.push(item.DEVICESCODE);
      });
      const xianbie = ['标量', '投入数', '良品数', '良率', '保养指示', '计划停机', '设备故障', '缺料指示', '累计时间', '运行状态', '稼动率'];
      const postdata = [];
      shumykey.map((item, index) => {
        const dd = {};
        dd.xianbie = xianbie[index];
        hengmykey.map((items, indexx) => {
          dd[items] = WMPRODUCTION[indexx][item];
        });
        postdata.push(dd);
      });
      postdata.map((item, index) => {
        item.key = `${index}table2`;
      });
      console.log(postdata,'post')
      return postdata;
    };
    const column2 = () => {
      const tableColumn = [];
      tableColumn.push({
        title: '线别',
        dataIndex: 'xianbie',
        key: 'xianbie',
        align: 'center',
        render: (text, record) => <div style={{ color: 'white' }}>{text}</div>,
      });

      WMPRODUCTION.map((item, indexs) => {
        tableColumn.push({
          title: `${item.DEVICESCODE}`,
          align: 'center',
          dataIndex: `${item.DEVICESCODE}`,
          key: `${item.DEVICESCODE}`,
          render: (text, record, index) => {
            const obj = {
              children: text,
              props: {},
            };
            if (index===3){
              obj.children=`${text}%`
            }
            if (index === 4) {
              if (WMPRODUCTION[indexs][`MTSTATE`] !== '0')
                obj.props.style = {
                  background: 'red',
                };
            }
            if (index === 5) {
              if (WMPRODUCTION[indexs][`QSTATE`] !== '0')
                obj.props.style = {
                  background: 'red',
                };
            }
            if (index === 6) {
              if (WMPRODUCTION[indexs][`FSTATE`] !== '0')
                obj.props.style = {
                  background: 'red',
                };
            }
            if (index === 7) {
              if (WMPRODUCTION[indexs][`LMGSTATE`] !== '0')
                obj.props.style = {
                  background: 'red',
                };
            }
            if (index === 9) {
              console.log(WMPRODUCTION[indexs][`RUNSTATE`])
              if (WMPRODUCTION[indexs][`RUNSTATE`] === '停机' | WMPRODUCTION[indexs][`RUNSTATE`] === '离线'){
                obj.props.style = {
                  background: 'red',
                };
              }
            }
            if (index === 10) {
              console.log(WMPRODUCTION[indexs][`UTILIZATIONRATE`])
              if (WMPRODUCTION[indexs][`UTILIZATIONRATE`] === -1){
                obj.children=''
              }else {
                obj.children=`${text}%`
              }

            }
            return obj;
          },
        });
      });
      return tableColumn;
    };

    const tableData1 = () => {
      let tableData = [];
      if (OUTPUT.length > 0) {
        tableData = OUTPUT;
        for (let key = 0; key <= tableData.length - 1; key++) {
          if (key === tableData.length - 1) {
            tableData[key].rowspanCount = 1;
          } else {
            if (tableData[key].DEVICESCODE !== tableData[key + 1].DEVICESCODE) {
              tableData[key].rowspanCount = 1;
            } else {
              let flag = 2;
              if (key === tableData.length - 2) {
                tableData[key].rowspanCount = flag;
                key += flag;
              } else {
                a: for (let keys = key; keys < tableData.length - 1; keys++) {
                  // console.log(tableData[keys+1].DEVICESCODE,tableData[keys+2].DEVICESCODE)
                  if (tableData[keys + 2] === undefined) {
                    tableData[key].rowspanCount = flag;
                    key += flag;
                  } else {
                    if (tableData[keys + 1].DEVICESCODE === tableData[keys + 2].DEVICESCODE) {
                      flag += 1;
                    } else {
                      tableData[key].rowspanCount = flag;
                      key += flag - 1;
                      break a;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const count = tableData.length;
      if (count < 12) {
        for (let x = 0; x < 12 - count; x++) {
          tableData.push({ rowspanCount: 1 });
        }
      }
      tableData.map((item, index) => {
        item.key = `${index}table1`;
      });
      return tableData;
    };
    const column1 = [
      {
        title: '机台',
        dataIndex: 'DEVICESCODE',
        key: 'DEVICESCODE',
        render: (text, record, index) => {
          const obj = {
            children: <div style={{ color: 'white' }}>{text}</div>,
            props: {},
          };
          if (record.rowspanCount !== undefined) {
            obj.props.rowSpan = record.rowspanCount;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      },
      {
        title: '型式',
        dataIndex: 'MODEL',
        key: 'MODEL',
        // render:(text)=><div style={{height:`${this.state.divHeight}px`,lineHeight:`${this.state.divHeight}px`}}>{text}</div>
        render: (text) => {
          if (text === undefined) {
            return <div style={{ visibility: 'hidden' }}>1</div>;
          }else {
            return text
          }
        },
      }, {
        title: '投入数',
        dataIndex: 'SHIFTINPUT',
        key: 'SHIFTINPUT',

      }, {
        title: '良品数',
        dataIndex: 'SHIFTOUT',
        key: 'SHIFTOUT',

      }, {
        title: '不良',
        dataIndex: 'SHIFTNGOUT',
        key: 'SHIFTNGOUT',

      }, {
        title: '不良率',
        dataIndex: 'QR',
        key: 'QR',

      }, {
        title: '送检指示',
        dataIndex: 'PQCSTATE',
        key: 'PQCSTATE',
        width: '22%',
      },
    ];

    return (
      <div ref='fullscreen' style={{ background: '#2D1818', height: '100%' }}>
        <BoardHeader myurl={this.props.cuchexian.title} myHeaderName={this.props.cuchexian.title}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%', width: '100%', position: 'relative' }}>
          <div style={{ float: 'left', width: '55%', height: '100%' }}>
            <Table
              className='cuchexianV2'
              bordered
              dataSource={tableData1()}
              columns={column1}
              pagination={false}/>
          </div>
          <div style={{ paddingLeft: '0.5%', float: 'left', color: 'red', width: '45%', height: '100%' }}>
            <Table
              className='cuchexianV2Table'
              dataSource={tableData2()}
              columns={column2()}
              pagination={false}
              bordered={true}
            />
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default CuchexianV2;
