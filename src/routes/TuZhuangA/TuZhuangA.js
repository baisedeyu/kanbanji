import React from 'react';
import { connect } from 'dva';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { Table } from 'antd';
import './TuZhuangA.less';

@connect(({ tzAslzl }) => ({ tzAslzl }))
class TuZhuangA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: 'WP1工位看板——涂装A上料指令',
      myHeaderName: '早班',
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'tzAslzl/getData',
    });
  }

  render() {
    const { data1, data2, data3 } = this.props.tzAslzl;
    const columm = [
      {
        title: '线边仓',
        dataIndex: 'bxc',
        align: 'center',
        render: (text, row, index) => {
          const obj = {
            children: `A12`,
            props: {},
          };
          if (index === 0) {
            obj.props.rowSpan = 10;
          } else if (index >= 10) {
            obj.props.rowSpan = 1;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      }, {
        title: '型式',
        dataIndex: 'MODEL',
        align: 'center',
        render: (text, row, index) => {
          const obj = {
            children: text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
            props: {},
          };
          return obj;
        },
      }, {
        title: '最小批次量',
        dataIndex: 'BATCHNUM',
        align: 'center',
      }, {
        title: '待上LOT数',
        dataIndex: 'WAITLOTS',
        align: 'center',
      }, {
        title: '待上料数',
        dataIndex: 'WAITNUM',
        align: 'center',
      },
    ];
    const column2 = [
      {
        title: 'value1',
        dataIndex: 'value1',
        align: 'center',
        width: '42%',
        render: (text, row, index) => {
          return {
            props: {
              style: {
                color: 'white',
                fontWeight: 5000,
                fontSize: '53px',
                padding: '7px 0px 8px 0px',
              },
            },
            children: text,
          };
        },
      },
      {
        title: 'value2',
        dataIndex: 'value2',
        align: 'center',
        render: (text, row, index) => {
          const obj = {
            props: { style: { fontWeight: 5000, fontSize: '53px', padding: '7px 0px 8px 0px' } },
            children: text,
          };
          if (index === 0) {
            obj.props.style.color = 'green';
          } else if (index === 1) {
            obj.props.style.color = 'yellow';
            obj.props.style.fontSize = `36px`;
          } else if (index === 2) {
            obj.props.style.color = 'yellow';
          } else if (index === 3) {
            obj.props.style.color = 'yellow';
          } else if (index === 4) {
            obj.props.style.color = 'red';
          }
          return obj;
        },
      },
    ];
    const column3 = [
      {
        title: '工位',
        dataIndex: 'gw',
        align: 'center',
        render: (text) => {
          return text === `` ? <div style={{ visibility: 'hidden' }}>1</div> : text;
        },
      }, {
        title: '操作员',
        dataIndex: 'czy',
        align: 'center',
      }, {
        title: '当班标量',
        dataIndex: 'dbbl',
        align: 'center',
      }, {
        title: '投入数',
        dataIndex: 'trs',
        align: 'center',
      }, {
        title: '完成比率',
        dataIndex: 'wcbl',
        align: 'center',
      }, {
        title: '进度',
        dataIndex: 'jd',
        align: 'center',
      }, {
        title: '生产状况',
        dataIndex: 'sczk',
        align: 'center',
      }, {
        title: '计划停机',
        dataIndex: 'jhtj',
        align: 'center',
      }, {
        title: '异常停机',
        dataIndex: 'yctj',
        align: 'center',
      }, {
        title: '累计时间',
        dataIndex: 'ljsj',
        align: 'center',
      }, {
        title: 'OEE',
        dataIndex: 'OEE',
        align: 'center',
      },
    ];

    const tableData1 = () => {
      const data = data1;
      if (data.length < 10) {
        const count = data.length;
        for (let x = 0; x < 10 - count; x++) {
          data.push({});
        }
      }
      return data;
    };
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#2d1818' }}>
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
        <div style={{ height: '84%', width: '100%', position: 'relative', padding: '5px 8px' }}>
          <div>
            <div style={{ float: 'left', width: '55%' }}>
              <Table  pagination={false} dataSource={tableData1()} className='TuZhuangATable'
                     columns={columm} bordered/>
            </div>
            <div style={{ float: 'left', marginLeft: '8px', width: '44%' }}>
              <Table  showHeader={false} pagination={false} dataSource={data2}
                     columns={column2} bordered />
            </div>
          </div>

          <div style={{ float: 'left', paddingRight: '8px', marginTop: '10px', width: '100%', height: '20%' }}>
            <Table  pagination={false} dataSource={data3} columns={column3} bordered
                   className='TuZhuangATable3'/>
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default TuZhuangA;
