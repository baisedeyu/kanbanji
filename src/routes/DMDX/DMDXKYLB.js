import React from 'react';
import MjHeader from '../../components/MJHeader/MjHeader';
import { Table } from 'antd';
import styles from '../../components/MJHeader/index.less';
import './index.less';
import { connect } from 'dva';


const Dev = [
  '定线计划', '生产中', '已备好', '备模中', '待备模',
];

@connect(({ muju }) => ({
  muju,
}))
class DMDXKYLB extends React.Component {
  state = {
    height: document.body.clientHeight,
    width: document.body.clientWidth,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'muju/getData',
    });
    window.addEventListener(`resize`, this.changScreen);
    this.DMDXTime = setInterval(this.getData, configs201905131052.DMDX_time);
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.changScreen);
    clearInterval(this.DMDXTime);
  }

  getData = () => {
    const { page, totalPage } = this.props.muju;
    if (page === totalPage) {
      this.props.dispatch({
        type: 'muju/getData',
      });
    } else {
      this.props.dispatch({
        type: 'muju/upDMDX_Page',
        page: page + 1,
      });
    }

  };

  changScreen = () => {
    this.setState({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });
  };

  render() {
    const { data, page } = this.props.muju;
    const { width, height } = this.state;

    const column = [
      {
        title: '机台号',
        dataIndex: 'DEVICE',
        align: 'center',
        width: '250px',
        render: (text) => {
          const obj = {
            children: text,
            props: {
              style: {
                color: `yellow`,
              },
            },
          };
          return obj;
        },
      },
    ];
    const tableData = [];

    const pageData = data.slice((page - 1) * configs201905131052.DMDX_count, page * configs201905131052.DMDX_count);
    pageData.map((item) => {
      column.push({
        title: item[`DssCode`],
        dataIndex: item[`DssCode`],
        width: `${(width - 260) / pageData.length}px`,
        render: (text, record, index) => {
          const value = [];
          if (index === 1 | index === 2) {
            text.map((item, indexs) => {
              let color = null;
              const hour = parseInt(item[`HOURS`]);
              if (index === 1) {
                if (item[`IsInDMDX`] === `N`) {
                  color = `yellow`;
                } else if (hour > 72) {
                  color = `red`;
                }
              }
              if (index === 2) {
                if (168 >= hour > 72) {
                  color = `yellow`;
                } else if (hour > 168) {
                  color = `red`;
                }
              }
              value.push(
                <div style={{ color }} key={`${index}hang${indexs}`}>
                  {`${item[`MOULDNO`]} ${item[`HOURS`] === null ? 0 : item[`HOURS`]}H`}
                </div>,
              );
            });
          } else {
            text.map((item, indexs) => {
              value.push(
                <div key={`${index}hang${indexs}`}>
                  {`${item[`MOULDNO`]}`}
                </div>,
              );
            });
          }
          const tableHeight = height * 0.75;
          let rowheight;
          if (index === 0 | index === 2) {
            rowheight = tableHeight * 0.25;
          } else if (index === 1) {
            rowheight = tableHeight * 0.11;
          } else if (index === 3) {
            rowheight = tableHeight * 0.15;
          } else if (index === 4) {
            rowheight = tableHeight * 0.24;
          }
          const obj = {
            children: value,
            props: {
              style: {
                color: null,
                height: `${rowheight}px`,
              },
            },
          };
          return obj;
        },
      });
    });

    Dev.map((item, index) => {
      tableData.push({
        DEVICE: item,
        key: `${index}datas`,
      });
    });

    pageData.map((item) => {
      tableData[0][item[`DssCode`]] = item[`lstMouldDMDX`];
      tableData[1][item[`DssCode`]] = item[`lstMouldLoad`];
      tableData[2][item[`DssCode`]] = item[`lstMouldInv`];
      tableData[3][item[`DssCode`]] = item[`lstMouldBM`];
      tableData[4][item[`DssCode`]] = item[`lstMouldUnBM`];
    });

    const title1 = '昆山六丰机械工业有限公司';
    const title2 = '定模定线一览表';
    const leftTitle1 = '当前车间：';
    const leftTitle2 = 'WLF1';
    const rightIcon1 = <img className={styles.headImg} src={require(`../../assets/img/shouzhi.png`)}/>;
    const rightIcon2 = <img className={styles.headImg} src={require(`../../assets/img/gantanhao.png`)}/>;
    const rightTitle1 = '指示备模';
    const rightTitle2 = '应急备模';
    return (
      <div style={{ width: '100%', height: '100%', background: 'black' }}>
        <MjHeader
          title1={title1}
          title2={title2}
          leftTitle1={leftTitle1}
          leftTitle2={leftTitle2}
          rightIcon1={rightIcon1}
          rightIcon2={rightIcon2}
          rightTitle1={rightTitle1}
          rightTitle2={rightTitle2}
        />
        <div className="MJZLYLB">
          <Table
            columns={column}
            dataSource={tableData}
            bordered
            pagination={false}
          />
        </div>
      </div>
    );
  }
}

export default DMDXKYLB;
