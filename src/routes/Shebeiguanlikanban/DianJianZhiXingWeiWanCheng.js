import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import './DianJianZhiXingWeiWanCheng.less';
import BoardHeader from '../../components/BoardHeader3/BoardHeader';


@connect(({ dianjianzhixingweiwancheng, shebeihuizongkanban }) => ({
  dianjianzhixingweiwancheng, shebeihuizongkanban,
}))
class DianJianZhiXingWeiWanCheng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '六丰设备部管理看板—点检执行未完成看板',
      pageSize: 2,
      pageData: [],
      tableData: [],
      pageCount: DJZXWWC_count,
    };
  };

  componentWillReceiveProps(nexrProps) {
    if (nexrProps.dianjianzhixingweiwancheng.data !== this.state.tableData) {
      const { pageCount } = this.state;
      this.setState({
        tableData: nexrProps.dianjianzhixingweiwancheng.data,
        pageData: nexrProps.dianjianzhixingweiwancheng.data.slice(0, pageCount),
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
      type: 'dianjianzhixingweiwancheng/fetchData',
      payload: this.props.shebeihuizongkanban,
    });
  };

  changeDatas = () => {
    const data = this.state.tableData;
    const pageSize = this.state.pageSize;
    const { pageCount } = this.state;
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
    const { TotalCount } = this.props.dianjianzhixingweiwancheng;
    const { pageData: d, pageCount, pageSize } = this.state;
    const TotalPage = Math.ceil(TotalCount / pageCount);
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
        title: '点检周期',
        dataIndex: 'DJRATEKM',
        render: (text) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
      }, {
        title: '点检角色',
        dataIndex: 'DJROLEKM',
      }, {
        title: '设备',
        dataIndex: 'DEVICEDESCRIPTION',
      }, {
        title: '计划开始',
        dataIndex: 'FRTIME',
      }, {
        title: '计划完成',
        dataIndex: 'TOTIME',
      }, {
        title: '状态',
        dataIndex: 'DJSTATEKM',
      }, {
        title: '点检人',
        dataIndex: 'EMPLNAME',
      }, {
        title: '剩余小时',
        dataIndex: 'OverPlusTime',
      },
    ];

    const tableData = () => {
      if (d.length < pageCount) {
        const count = d.length;
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
          <Table dataSource={tableData()} className='DianJianZhiXingWeiWanCheng' columns={column} bordered
                 pagination={false}/>
      </div>
    );
  }
}

export default DianJianZhiXingWeiWanCheng;
