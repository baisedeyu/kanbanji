import React from 'react';
import MjHeader from '../../components/MJHeader/MjHeader';
import { Table } from 'antd';
import { connect } from 'dva';
import './index.less';


@connect(({ muju }) => ({
  muju,
}))
class BMZKYLB extends React.Component {

  state = {
    clientHeight: document.body.clientHeight,
  };

  componentDidMount() {
    this.screenChange();
    this.props.dispatch({
      type: 'muju/getBMData',
    });
    this.BMTimeer = setInterval(this.getData, 5000);
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.resize, false);
    clearInterval(this.BMTimeer);
  }

  getData = () => {
    const { BMpage, BMTotalPage } = this.props.muju;
    if (BMpage === BMTotalPage) {
      this.props.dispatch({
        type: 'muju/getBMData',
      });
    } else {
      this.props.dispatch({
        type: 'muju/upBM_Page',
        BMpage: BMpage + 1,
      });
    }
  };

  resize = () => {
    this.setState({
      clientHeight: document.body.clientHeight,
    });
  };

  screenChange = () => {
    window.addEventListener('resize', this.resize, false);
  };


  render() {
    const { BMpage, BMData, BMTotal } = this.props.muju;
    const { clientHeight } = this.state;
    // const pageData = BMData.slice((BMpage - 1) * configs201905131052.BM_count, BMpage * configs201905131052.BM_count);
    const pageData = BMData.slice((BMpage - 1) * 6, BMpage * 6);
    if (pageData.length < 6) {
      const count = pageData.length;
      for (let x = 0; x < 6 - count; x++) {
        pageData.push({ key: `${x}key` });
      }
    }
    console.log(pageData);
    const title1 = '昆山六丰机械工业有限公司';
    const title2 = '备模中模具状况一览表';
    const leftTitle1 = '备模中模具：';

    const column = [
      {
        title: '型号',
        dataIndex: 'MODEL',
        align: 'center',
        width: '200px',
        render: (text) => {
          const obj = {
            children: text,
          };
          return obj;
        },
      }, {
        title: '模号',
        dataIndex: 'PATTERN',
        align: 'center',
        width: '200px',
      }, {
        title: '最新模况',
        dataIndex: 'CONDITION',
        align: 'center',
        width: '320px',
      }, {
        title: '生产问题反馈',
        dataIndex: 'QUESTION',
        render: (text) => {
          // const height = clientHeight * 0.75 / configs201905131052.BM_count;
          const height = clientHeight * 0.75 / 6;
          const obj = {
            children: text,
            props: {
              style: {
                height: `${height}px`,
              },
            },
          };
          return obj;
        },
      },
    ];

    return (
      <div style={{ width: '100%', height: '100%', background: '#2D1818' }}>
        <MjHeader
          title1={title1}
          title2={title2}
          leftTitle1={leftTitle1}
          leftTitle2={`${BMTotal}套`}
        />
        <div className="BMZKYLB">
          <Table dataSource={pageData} columns={column} bordered pagination={false}/>
        </div>
      </div>
    );
  }
}

export default BMZKYLB;
