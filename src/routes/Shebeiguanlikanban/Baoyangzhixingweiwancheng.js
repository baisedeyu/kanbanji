import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import './Baoyangzhixingweiwancheng.less';
import BoardHeader from '../../components/BoardHeader3/BoardHeader';

@connect(({ baoyangzhixingweiwancheng, shebeihuizongkanban }) => ({
  baoyangzhixingweiwancheng, shebeihuizongkanban,
}))
class Baoyangzhixingweiwancheng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '六丰设备部管理看板—保养执行未完成看板',
      pageSize: 2,
      pageData: [],
      tableData: [],
      pageCount: BYWWC_count,
    };
  };

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

  componentWillReceiveProps(nexrProps) {
    if (nexrProps.baoyangzhixingweiwancheng.data !== this.state.tableData) {
      const { pageCount } = this.state;
      this.setState({
        tableData: nexrProps.baoyangzhixingweiwancheng.data,
        pageData: nexrProps.baoyangzhixingweiwancheng.data.slice(0, pageCount),
      });
    }
  }

  getDatas = () => {
    this.props.dispatch({
      type: 'baoyangzhixingweiwancheng/fetchData',
      payload: this.props.shebeihuizongkanban,
    });
  };

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

  render() {
    const { TotalCount } = this.props.baoyangzhixingweiwancheng;
    const { pageData: d, pageCount, pageSize } = this.state;
    const TotalPage = Math.ceil(TotalCount / pageCount);
    const tableData = () => {
      const count = d.length;
      if (count < pageCount) {
        for (let x = 0; x < pageCount - count; x++) {
          d.push({});
        }
      }
      d.map((item, index) => {
        item.key = `${index}key`;
      });
      return d;
    };
    const column = [
      {
        title: '车间',
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
        title: '保养类别',
        dataIndex: 'BYGRADENM',
        render: (text, record, index) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
      }, {
        title: '保养角色',
        dataIndex: 'USEROLENM',
      }, {
        title: '设备',
        dataIndex: 'DEVICEDESCRIPTION',
      }, {
        title: '计划开始',
        dataIndex: 'PLANTIME',
      }, {
        title: '计划完成',
        dataIndex: 'PLANFINISHTIME',
      }, {
        title: '状态',
        dataIndex: 'BYSTATENM',
      }, {
        title: '实际开始',
        dataIndex: 'FRTIME',
      }, {
        title: '保养人',
        dataIndex: 'EMPNONM',
      }, {
        title: '作业小时',
        dataIndex: 'OverPlusTime',
      },
    ];

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

        <Table bordered pagination={false} dataSource={tableData()} className='Baoyangzhixingweiwancheng'
               columns={column}/>
      </div>
    );
  }
}

export default Baoyangzhixingweiwancheng;
