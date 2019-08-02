import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import './Guzhangweiwancheng.less';
import BoardHeader from '../../components/BoardHeader3/BoardHeader';


@connect(({ guzhangweiwancheng, shebeihuizongkanban }) => ({
  guzhangweiwancheng, shebeihuizongkanban,
}))
class Guzhangweiwancheng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '六丰设备管理看板—故障未完成看板',
      tableData: [],
      pageSize: 2,
      pageData: [],
      pageCount: GZWWC_count,
    };
  };

  componentDidMount() {
    this.getDatas();
    const location = this.props.location.pathname;
    const params=this.props.shebeihuizongkanban.yemiancanshu
    const time=parseInt(params[location][`showtime`])*1000
    this.timer = setInterval(this.changeDatas, time);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  componentWillReceiveProps(nexrProps) {
    if (nexrProps.guzhangweiwancheng.data !== this.state.tableData) {
      const { pageCount } = this.state;
      this.setState({
        tableData: nexrProps.guzhangweiwancheng.data,
        pageData: nexrProps.guzhangweiwancheng.data.slice(0, pageCount),
      });
    }
  }

  changeDatas = () => {
    const { pageCount } = this.state;
    const data = this.state.tableData;
    const pageSize = this.state.pageSize;
    if (Math.ceil(data.length / pageCount) >= pageSize) {
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

  getDatas = () => {
    this.props.dispatch({
      type: 'guzhangweiwancheng/fetchData',
      payload: this.props.shebeihuizongkanban,
    });
  };


  render() {
    const { TotalCount } = this.props.guzhangweiwancheng;
    const { pageData: d, pageCount, pageSize } = this.state;
    const TotalPage = Math.ceil(TotalCount / pageCount);
    const column = [
      {
        title: '车间',
        align: 'center',
        dataIndex: 'attribute5',
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
        title: '设备',
        dataIndex: 'DEVICEDESCRIPTION',
        render: (text, record, index) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
      }, {
        title: '等级',
        dataIndex: 'GRADEID',
      }, {
        title: '报修时间',
        dataIndex: 'BXTIME',
      }, {
        title: '故障等级',
        dataIndex: 'BREAKDOWNGRADENM',
      }, {
        title: '设备状态',
        dataIndex: 'BXSTATENM',
      }, {
        title: '处理状态',
        dataIndex: 'WXSTATENM',
      }, {
        title: '实际开始',
        dataIndex: 'FRTIME',
      }, {
        title: '维修人',
        dataIndex: 'EMPLNAME',
      }, {
        title: '故障小时',
        dataIndex: 'OverPlusTime',
      },
    ];

    const tableData = () => {
      const count = d.length;
      if (count < pageCount) {
        for (let x = 0; x < pageCount - count; x++) {
          d.push({});
        }
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
        <BoardHeader
          myurl={headname}
          TotalPage={TotalPage}
          pageSize={pageSize}
        />
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          border: 'none',
          borderTop: '2px solid white',
        }}/>
        <Table dataSource={tableData()} columns={column} className='Guzhangweiwancheng' bordered pagination={false}/>
      </div>
    );
  }
}

export default Guzhangweiwancheng;
