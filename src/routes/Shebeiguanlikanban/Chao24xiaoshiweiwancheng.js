import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import './Chao24xiaoshiweiwancheng.less';
import BoardHeader from '../../components/BoardHeader3/BoardHeader';



@connect(({ chao24xiaoshiweiwancheng, shebeihuizongkanban }) => ({
  chao24xiaoshiweiwancheng, shebeihuizongkanban,
}))
class Chao24xiaoshiweiwancheng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '六丰设备管理看板—24小时故障维修汇总看板',
      pageSize: 2,
      pageData: [],
      tableData: [],
      pageCount: C24XSWWC_count,
    };
  };

  componentWillReceiveProps(nexrProps) {
    if (nexrProps.chao24xiaoshiweiwancheng.data !== this.state.tableData) {
      const { pageCount } = this.state;
      this.setState({
        tableData: nexrProps.chao24xiaoshiweiwancheng.data,
        pageData: nexrProps.chao24xiaoshiweiwancheng.data.slice(0, pageCount),
      });
    }
  }

  componentDidMount() {
    this.getDatas();
    const location = this.props.location.pathname;
    const params=this.props.shebeihuizongkanban.yemiancanshu
    const time=parseInt(params[location][`showtime`])*1000
    this.timer = setInterval(this.changeDatas,time);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getDatas = () => {
    this.props.dispatch({
      type: 'chao24xiaoshiweiwancheng/fetchData',
      payload: this.props.shebeihuizongkanban,
    });
  };

  changeDatas = () => {
    const { pageCount } = this.state;
    const data = this.state.tableData;
    const pageSize = this.state.pageSize;
    if (Math.ceil(data.length / pageCount) > pageSize - 1) {
      const pageData = data.slice((pageSize - 1) * pageCount, pageSize * pageCount);
      this.setState({
        pageData,
        pageSize: pageSize + 1,
      });
    } else {
      this.props.dispatch({
        type: 'shebeihuizongkanban/geturl',
      });
    }
  };


  render() {
    const { huizong } = this.props.chao24xiaoshiweiwancheng;
    const column = [
      {
        title: '车间',
        align: 'center',
        dataIndex: 'attribute5',
        render: (text, record, index) => {
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
        title: '设备类型',
        dataIndex: 'DTCLASSNAME',
        render: (text) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
      }, {
        title: '故障报修',
        dataIndex: 'GZCOUNT',
      }, {
        title: '未派工',
        dataIndex: 'NotToDoCount',
      }, {
        title: '维修中',
        dataIndex: 'DoingCount',
      }, {
        title: '已完成',
        dataIndex: 'Completed',
      }, {
        title: '未完成',
        dataIndex: 'NotCompleted',
      }, {
        title: '完成比率',
        dataIndex: 'CompletedRate',
      },
    ];

    const tableData = () => {
      const d = this.state.pageData;
      // const c=d.pop()
      const count = d.length;
      const { pageSize, tableData, pageCount } = this.state;
      if (count < pageCount) {
        for (let x = 0; x < pageCount - count; x++) {
          d.push({});
        }
      }
      //todo 判断是否是最后一页
      if (Math.ceil(tableData.length / pageCount) === pageSize - 1) {
        const lastData = {};
        lastData.attribute5 = '累计';
        lastData.TASKCount = huizong.TASKCountAll;
        lastData.NotToDoCount = huizong.NotToDoCountAll;
        lastData.DoingCount = huizong.DoingCountAll;
        lastData.Completed = huizong.CompletedAll;
        lastData.NotCompleted = huizong.NotCompletedAll;
        lastData.CompletedRate = huizong.CompletedRateAll;
        d.push(lastData);
      }
      d.map((item, index) => {
        d[index]['key'] = `${index}key`;
      });
      return d;
    };

    const location = this.props.location.pathname;
    const headnames = this.props.shebeihuizongkanban.yemiancanshu;
    const headnamesCount = Object.keys(headnames).length;
    const headname = headnamesCount === 0 ? '' : headnames[location]['title'];

    return (
      <div style={{ height: '100%', backgroundColor: '#2d1818' }}>
        <BoardHeader myurl={headname}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          border: 'none',
          borderTop: '2px solid white',
        }}/>
          <Table dataSource={tableData()} columns={column} className='Chao24xiaoshiweiwancheng' bordered
                 pagination={false}/>

      </div>
    );
  }
}

export default Chao24xiaoshiweiwancheng;
