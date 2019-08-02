import React from 'react';
import { connect } from 'dva';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import {Table} from 'antd'
import './TuZhuangTiaoZheng.less'

@connect(({ tztz }) => ({
  tztz,
}))
class TuZhuangTiaoZheng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: 'WP1工位看板——涂装A上料',
      myHeaderName: '早班',
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'tztz/getData',
    });
  }

  render() {

    const { table } = this.props.tztz;
    table.map((item, index) => {
      item[`key`] = `${index}tztz`;
    });

    const column = [
      {
        title: '线别',
        dataIndex: 'DSSCODE',
        align: `center`,
        render: (text, record, index) => {
          const obj = {
            children: text,
            props: {
              style: {
                color: `white`,
                background:'black'
              },
            },
          };
          if (index === 0) {
            obj.props.rowSpan = 10;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      }, {
        title: '型式',
        dataIndex: 'MODEL',
        align: `center`,
        render: (text) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
      }, {
        title: '当班标量',
        dataIndex: 'SHIFTAMOUNT',
        align: `center`,
      }, {
        title: '当班投入数',
        dataIndex: 'SHIFTIN',
        align: `center`,
      }, {
        title: '完成比率',
        dataIndex: 'FINISHRATE',
        align: `center`,
      }, {
        title: '型式',
        dataIndex: 'MODEL2',
        align: `center`,
      }, {
        title: '当班标量',
        dataIndex: 'SHIFTAMOUNT2',
        align: `center`,
      }, {
        title: '当班投入数',
        dataIndex: 'SHIFTIN2',
        align: `center`,
      }, {
        title: '完成比率',
        dataIndex: 'FINISHRATE2',
        align: `center`,
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
    const dat3 = [
      {
        gw: '',
        czy: '',
        dbbl: '',
        trs: '',
        wcbl: '',
        jd: '',
        sczk: '',
        jhtj: '',
        yctj: '',
        ljsj: '',
        OEE: '',
      },
    ];
    return (
      <div className={`tztz`} style={{ width: '100%', height: '100%', backgroundColor: '#2d1818' }}>
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
          <Table columns={column} dataSource={table} pagination={false} bordered={true}/>
          <div style={{ float: 'left', marginTop: '10px', width: '100%', height: '20%' }}>
            <Table  pagination={false} dataSource={dat3} columns={column3} bordered/>
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default TuZhuangTiaoZheng;
