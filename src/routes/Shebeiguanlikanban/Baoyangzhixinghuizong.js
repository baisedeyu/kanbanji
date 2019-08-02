import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import './Baoyangzhixinghuizong.less';
import BoardHeader from '../../components/BoardHeader3/BoardHeader';


@connect(({ baoyangzhixinghuizong, shebeihuizongkanban }) => ({
  baoyangzhixinghuizong, shebeihuizongkanban,
}))
class Baoyangzhixinghuizong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '六丰设备部管理看板—保养执行汇总看板',
      pageSize: 2,
      pageData: [],
      tableData: [],
      pageCount: BYZXHZ_count,
    };
  };

  componentWillReceiveProps(nexrProps) {
    if (nexrProps.baoyangzhixinghuizong.data !== this.state.tableData) {
      const { pageCount } = this.state;
      this.setState({
        tableData: nexrProps.baoyangzhixinghuizong.data,
        pageData: nexrProps.baoyangzhixinghuizong.data.slice(0, pageCount),
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
      type: 'baoyangzhixinghuizong/fetchData',
      payload: this.props.shebeihuizongkanban,
    });
  };

  changeDatas = () => {
    const { pageCount, pageSize } = this.state;
    const data = this.state.tableData;
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
    const { huizong } = this.props.baoyangzhixinghuizong;
    const column = [
      {
        title: '车间',
        dataIndex: 'attribute5',
        render: (text) => {
          return {
            children: text,
            props: {
              style: {
                color: 'white',
              },
            },
          };
        },
      }, {
        title: '保养类别',
        dataIndex: 'BYGRADENM',
        render: (text) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
      }, {
        title: '保养角色',
        dataIndex: 'USEROLENM',
      }, {
        title: '任务总数',
        dataIndex: 'TASKCount',
      }, {
        title: '未派工数',
        dataIndex: 'NotToDoCount',
      }, {
        title: '保养中',
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
        lastData.TASKCount = huizong['TASKCountAll'];
        lastData.NotToDoCount = huizong['NotToDoCountAll'];
        lastData.DoingCount = huizong['DoingCountAll'];
        lastData.Completed = huizong['CompletedAll'];
        lastData.NotCompleted = huizong['NotCompletedAll'];
        lastData.CompletedRate = huizong['CompletedRateAll'];
        d.push(lastData);
      }
      d.map((item, index) => {
        item.key = `${index}key`;
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
        <Table className='Baoyangzhixinghuizong' bordered pagination={false} dataSource={tableData()}
               columns={column}/>
      </div>
    );
  }
}

export default Baoyangzhixinghuizong;
