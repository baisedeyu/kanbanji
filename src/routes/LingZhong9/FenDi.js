import React from 'react';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { connect } from 'dva';
import { Table } from 'antd';
import './FenDI.less';


@connect(({ fendi }) => ({
  fendi,
}))

class FenDi extends React.Component {
  state = {
    DSPOINTCODE: '',
  };

  componentDidMount() {
    const url = window.location.search.substr(1).split('&');
    const data = {};
    url.map(item => {
      data[item.split('=')[0]] = item.split('=')[1];
    });
    const DSPOINTCODE = data[`DSPOINTCODE`];
    this.setState({
      DSPOINTCODE,
    });
    const { dispatch } = this.props;
    if (DSPOINTCODE === `DPRESBZ`) {
      dispatch({
        type: 'fendi/fetchData2',
        DSPOINTCODE,
      });
    } else {
      dispatch({
        type: 'fendi/fetchData',
        DSPOINTCODE,
      });
    }

  }



  render() {
    const { data1, data2, title } = this.props.fendi;
    const tableData1 = [];
    if (data1.length > 0) {
      data1[0][`lstOut`].map((item, index) => {
        if (index % 2 === 0) {
          tableData1.push({ ...item, key: `${index}data` });
        } else {
          const count = parseInt(index / 2);
          const keys = Object.keys(item);
          keys.map(items => {
            tableData1[count][`${items}1`] = item[items];
          });
        }
      });
    }
    const dataLength = tableData1.length;
    if (dataLength < 10) {
      for (let x = 0; x < 10 - dataLength; x++) {
        tableData1.push({ key: `${x}bu` });
      }
    }

    let column = [
      {
        title: '线 别',
        dataIndex: 'DEVICESCODE',
        align: 'center',
        render: (text, record, index) => {
          const obj = {
            children: text,
            props: {}
          }
          if (index === 0) {
            obj.props.rowSpan = 10;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj
        }
      }, {
        title: '型 式',
        dataIndex: 'MODEL',
        align: 'center',
      }, {
        title: '当班标量',
        dataIndex: 'SHIFTOUT',
        align: 'center',
        render: (text, record, index) => {
          return {
            children: record[`SHIFTINPUT`]
          }
        }
      }, {
        title: `${this.state.DSPOINTCODE === 'DPRESZJ' ? '检验数' : "当班投入数"}`,
        dataIndex: 'SHIFTINPUT',
        align: 'center',
      }, {
        title: '完成比率',
        dataIndex: 'QR',
        align: 'center',
        render: (text, record, index) => {
          const dbtrs = record['SHIFTINPUT']
          const dbbl = record[`SHIFTINPUT`]
          let children = ``
          if (text !== undefined) {
            children = `${text}%`
          }
          return {
            children
          }
        }
      }, {
        title: '型 式',
        dataIndex: 'MODEL1',
        align: 'center',
      }, {
        title: '当班标量',
        dataIndex: 'SHIFTOUT1',
        align: 'center',
      }, {
        title: `${this.state.DSPOINTCODE === 'DPRESZJ' ? '检验数' : "当班投入数"}`,
        dataIndex: 'SHIFTINPUT1',
        align: 'center',
      }, {
        title: '完成比率',
        dataIndex: 'QR1',
        align: 'center',
        render: (text, record, index) => {
          const dbtrs = record['SHIFTINPUT1']
          const dbbl = record[`SHIFTINPUT1`]
          let children = ``
          if (text !== undefined) {
            children = `${text}%`
          } else {
            children = <div style={{ visibility: 'hidden' }}>1</div>
          }
          return {
            children
          }
        }
      },
    ];

    if (this.state.DSPOINTCODE === 'DPRESSQ' | this.state.DSPOINTCODE === 'DPRESFT' | this.state.DSPOINTCODE === 'DPRESKSL') {
      column.splice(5, 0, {
        title: "重修率",
        dataIndex: 'chongxiulv',
        align: 'center',
      })
      column.splice(10, 0, {
        title: "重修率",
        dataIndex: 'chongxiulv1',
        align: 'center',
      })
    }
    if (this.state.DSPOINTCODE === `DPRESKSL`) {
      column.splice(6, 0, {
        title: "良 率",
        dataIndex: 'QR',
        align: 'center',
        render: (text, record, index) => {
          let children = ``
          if (text !== undefined) {
            children = `${text}%`
          }
          return {
            children
          }
        }
      })
      column.splice(12, 0, {
        title: "良 率",
        dataIndex: 'QR1',
        align: 'center',
        render: (text, record, index) => {
          let children = ``
          if (text !== undefined) {
            children = `${text}%`
          }
          return {
            children
          }
        }
      })
    }

    if (this.state.DSPOINTCODE === `DPRESZJ`) {
      column.splice(5, 0, {
        title: "良品数",
        dataIndex: 'SHIFTOUT',
        align: 'center',
      })
      column.splice(10, 0, {
        title: "良品数",
        dataIndex: 'SHIFTOUT1',
        align: 'center',
      })
      column.splice(6, 0, {
        title: "良 率",
        dataIndex: 'QR',
        align: 'center',
        render: (text, record, index) => {
          let children = ``
          if (text !== undefined) {
            children = `${text}%`
          }
          return {
            children
          }
        }
      })
      column.splice(12, 0, {
        title: "良 率",
        dataIndex: 'QR1',
        align: 'center',
        render: (text, record, index) => {
          let children = ``
          if (text !== undefined) {
            children = `${text}%`
          }
          return {
            children
          }
        }
      })
    }

    const column2 = [
      {
        title: '线别',
        dataIndex: 'DEVICESCODE',
        align: 'center',
      }, {
        title: '担当',
        dataIndex: 'CHECKUSER',
        align: 'center',
      }, {
        title: '当班标量',
        dataIndex: 'SHIFTOUT',
        align: 'center',
      }, {
        title: '投入数',
        dataIndex: 'SHIFTINPUT', align: 'center',
      }, {
        title: '完成比率',
        dataIndex: 'QR', align: 'center',
        render: (text) => (`${text}%`),
      }, {
        title: '进度',
        dataIndex: '3', align: 'center',
      }, {
        title: '生产状况',
        dataIndex: 'RUNDESC', align: 'center',
      }, {
        title: '计划停机',
        dataIndex: 'PSTATE', align: 'center',
      }, {
        title: '异常停机',
        dataIndex: '2', align: 'center',
      }, {
        title: '累计时间',
        dataIndex: 'LOSTTIME', align: 'center',
      }, {
        title: '稼动率',
        dataIndex: 'UTILIZATIONRATE', align: 'center',
      },
    ];


    if (this.state.DSPOINTCODE === `DPRESZJ`) {
      column = [
        {
          title: '线 别',
          dataIndex: 'DEVICESCODE',
          align: 'center',
          render: (text, record, index) => {
            const obj = {
              children: text,
              props: {}
            }
            if (index === 0) {
              obj.props.rowSpan = 10;
            } else {
              obj.props.rowSpan = 0;
            }
            return obj
          }
        }, {
          title: '型 式',
          dataIndex: 'MODEL',
          align: 'center',
        }, {
          title: "检验数",
          dataIndex: 'SHIFTINPUT',
          align: 'center',
        }, {
          title: "良品数",
          dataIndex: 'SHIFTOUT',
          align: 'center',
        }, {
          title: "NG数",
          dataIndex: 'SHIFTNGOUT',
          align: 'center',
        }, {
          title: "良率",
          dataIndex: 'QR',
          align: 'center',
          render: (text, record, index) => {
            //   const dbtrs = record['SHIFTINPUT']
            //   const dbbl = record[`SHIFTINPUT`]
            let children = ``
            if (text !== undefined) {
              children = `${text}%`
            }
            return {
              children
            }
          }
        }, {
          title: '型 式',
          dataIndex: 'MODEL1',
          align: 'center',
        }, {
          title: "检验数",
          dataIndex: 'SHIFTINPUT1',
          align: 'center',
        }, {
          title: "良品数",
          dataIndex: 'SHIFTOUT1',
          align: 'center',
        }, {
          title: "NG数",
          dataIndex: 'SHIFTNGOUT1',
          align: 'center',
        }, {
          title: "良率",
          dataIndex: 'QR1',
          align: 'center',
          render: (text, record, index) => {
            let children = ``
            if (text !== undefined) {
              children = `${text}%`
            } else {
              children = <div style={{ visibility: 'hidden' }}>1</div>
            }
            return {
              children
            }
          }
        },
      ]
    }

    if (this.state.DSPOINTCODE === `DPRESBZ`) {
      column = [
        {
          title: '线 别',
          dataIndex: 'DEVICESCODE',
          align: 'center',
          render: (text, record, index) => {
            const obj = {
              children: text,
              props: {}
            }
            if (index === 0) {
              obj.props.rowSpan = 10;
            } else {
              obj.props.rowSpan = 0;
            }
            return obj
          }
        }, {
          title: '型 式',
          dataIndex: 'MODEL',
          align: 'center',
        }, {
          title: '下线数',
          dataIndex: 'SHIFTINPUT',
          align: 'center',
        }, {
          title: '包装数',
          dataIndex: 'SHIFTOUT',
          align: 'center',
        }, {
          title: '缴库数',
          dataIndex: 'SHIFTNGOUT',
          align: 'center',
        }, {
          title: '缴库比',
          dataIndex: 'QR',
          align: 'center',
          render:(text)=>{
            let children=``
            if (text !== undefined) {
              children = `${text}%`
            } else {
              children = <div style={{ visibility: 'hidden' }}>1</div>
            }
            return {
              children
            }
          }
        }, {
          title: '型 式',
          dataIndex: 'MODEL1',
          align: 'center',
        }, {
          title: '下线数',
          dataIndex: 'SHIFTINPUT1',
          align: 'center',
        }, {
          title: '包装数',
          dataIndex: 'SHIFTOUT1',
          align: 'center',
        }, {
          title: '缴库数',
          dataIndex: 'SHIFTNGOUT1',
          align: 'center',
        }, {
          title: '缴库比',
          dataIndex: 'QR1',
          align: 'center',
        }
      ]
    }


    const column3 = [
      {
        title: "线别",
        dataIndex: "DISPLAYCODE",
        align: "center"
      }, {
        title: "检验人数",
        align: "center",
        dataIndex: "OPNUMBER"
      }, {
        title: "检验数",
        align: "center",
        dataIndex: 'TOTALINPUT',
      }, {
        title: "良品数",
        align: "center",
        dataIndex: "TOTALOUT",
      }, {
        title: "NG数",
        align: "center",
        dataIndex: 'TOTALNG'
      }, {
        title: "良率",
        align: "center",
        dataIndex: "TOTALQR",
        render: (text, record, index) => {
          let children = ``
          children = `${text}%`
          return {
            children
          }
        }
      }
    ]

    const column4 = [
      {
        title: "线别",
        dataIndex: "DISPLAYCODE",
        align: "center"
      }, {
        title: "担当",
        dataIndex: "DEVICESCODE",
        align: "center"
      }, {
        title: "包装人数",
        dataIndex: "OPNUMBER",
        align: "center"
      },
      // {
      //   title: "当班标量",
      //   dataIndex: "OPNUMBER",
      //   align: "center"
      // },
      {
        title: "下线数",
        dataIndex: "TOTALINPUT",
        align: "center"
      },
      {
        title: "包装数",
        dataIndex: "TOTALOUT",
        align: "center"
      }, {
        title: "缴库数",
        dataIndex: "TOTALNG",
        align: "center"
      }, {
        title: "缴库比",
        dataIndex: "TOTALQR",
        align: "center"
      },
    ]

    return (
      <div style={{ background: '#2D1818', height: '100%' }}>
        <BoardHeader myurl={`WP1工位看板——${title}`} myHeaderName={`WP1工位看板——${title}`}>
        </BoardHeader>
        <br />
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }} />
        <div style={{ height: '84%', width: '100%', position: 'relative' }}>
          <Table className='fendi' dataSource={tableData1} columns={column} pagination={false} bordered />
          <br />
          {
            this.state.DSPOINTCODE === `DPRESZJ` ?
              <Table className='fendi' dataSource={data1} columns={column3} pagination={false} bordered /> :
              this.state.DSPOINTCODE === `DPRESBZ` ?
                <Table className='fendi' dataSource={data1} columns={column4} pagination={false} bordered /> :
                <Table className='fendi' dataSource={data2} columns={column2} pagination={false} bordered />
          }

        </div>
        <BoardFoot />
      </div>
    );
  }
}

export default FenDi;


