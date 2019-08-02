import React from 'react';
import { connect } from 'dva';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import {Table} from 'antd'
import Icon from 'antd/lib/icon';
import './KuCunMingXi.less';

@connect(({ kucunmingxi }) => ({ kucunmingxi }))
class KuCunMingXi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '武汉六丰仓库管理——库存明细',
      myHeaderName: '早班',
    };
  }

  componentDidMount() {
    this.getData();
    this.timers = setInterval(this.renovate, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.timers);
  }

  renovate = () => {
    const { currentPage, totalPage } = this.props.kucunmingxi;
    if (currentPage === totalPage - 1) {
      this.getData();
      this.props.dispatch({
        type: 'kucunmingxi/clearCurrentPage',
      });
    } else {
      this.props.dispatch({
        type: 'kucunmingxi/upData',
      });
    }
  };

  getData = () => {
    this.props.dispatch({
      type: 'kucunmingxi/getData',
    });
  };


  toThousands = (num) => {
    if (num !== undefined) {
      let num1 = (num || 0).toString(), result = '';
      while (num1.length > 3) {
        result = ',' + num1.slice(-3) + result;
        num1 = num1.slice(0, num1.length - 3);
      }
      if (num1) {
        result = num1 + result + '.00';
      }
      return result;
    } else {
      return '';
    }
  };


  render() {
    const { tableData, currentPage, totalPage, nowUser } = this.props.kucunmingxi;
    const benhuishiyong = nowUser[0];
    const xiahuishiyong = () => {
      if (nowUser.length > 0) {
        if (nowUser.length === 1) {
          return nowUser[0];
        } else {
          for (let x = 1; x < nowUser.length; x++) {
            if (nowUser[x] !== benhuishiyong) {
              return nowUser[x];
            }
          }
        }
        return '';
      }

    };


    const data = () => {
      const d = [];
      for (let x = 0; x < 15; x++) {
        d.push({ key: `${x}kong` });
      }
      return d;
    };

    const tdata = () => {
      const da = data();
      const ttdata = tableData.slice(currentPage * 15, (currentPage + 1) * 15);
      ttdata.map((item, index) => {
        if (index < 15) {
          item.key = `${index}you`;
          da[index] = item;
        }
      });
      if (currentPage === totalPage - 1) {
        let zongshu = 0;
        tableData.map((item, index) => {
          zongshu += item[`QTY`];
        });
        da[ttdata.length] = {
          QTY: zongshu,
          INVENTORYCODE: '合计',
          key: 'heji',
        };
      }
      return da;
    };


    const column = [
      {
        title: '序号',
        dataIndex: 'SEQUENCE',
        align: 'center',
        render: (text) => text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : <div>{text}</div>,
      }, {
        title: '料号',
        dataIndex: 'MITEMNAME',
        align: 'center',
      }, {
        title: '品名',
        dataIndex: 'MITEMDESC',
        align: 'center',
      }, {
        title: '供应商',
        dataIndex: 'VENDORNAME',
        align: 'center',
      }, {
        title: '批号',
        dataIndex: 'BATCHNO',
        align: 'center',
      }, {
        title: '仓库',
        dataIndex: 'INVENTORYCODE',
        align: 'center',
      },
      {
        title: '储位',
        dataIndex: 'INVENTORYLOCATION',
        align: 'center',
      },
      {
        title: '库存量',
        dataIndex: 'QTY',
        render: (text) => {
          const obj = {
            children: this.toThousands(text),
            props: {
              className: 'kcmx_kydq',
            },
          };
          return obj;
        },
      }, {
        title: '单位',
        dataIndex: 'UNIT',
        align: 'center',
      }, {
        title: '进厂日期',
        dataIndex: 'RECDATE',
        align: 'center',
      }, {
        title: '状态',
        dataIndex: 'STATUS',
        align: 'center',
        width: '80px',
        render: (text, row) => {
          if (text === '1') {
            return <Icon type="smile"/>;
          } else if (text === '2') {
            return <Icon type="frown"/>;
          } else if (text === '3') {
            return <Icon type="clock-circle"/>;
          }
        },
      }, {
        title: '使用状况',
        align: 'center',
        width: '140px',
        render: (text, record) => {
          let str;
          let background;
          if (record[`SEQUENCE`] !== undefined) {
            if (record[`BATCHNO`] === benhuishiyong) {
              str = '本回使用';
              background = `green`;
            } else if (record[`BATCHNO`] === xiahuishiyong()) {
              str = '下回使用';
              background = `blue`;
            } else {
              str = '暂不使用';
              background = `black`;
            }
          } else {
            str = '';
            background = null;
          }
          const obj = {
            children: str,
            props: {
              style: {
                background,
              },
            },
          };
          return obj;
        },
      },
    ];

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
        <div style={{ height: '84%', width: '100%', position: 'relative', padding: '5px 30px' }}>
          <Table dataSource={tdata()} className='kcmxTable' bordered pagination={false} columns={column}/>
          <div style={{ width: '100%', paddingTop: '5px' }}>
            <div style={{ width: '220px', float: 'right', fontSize: '2.8vh', color: 'yellow' }}>
              <div style={{ width: '80px', textAlign: 'center', float: 'left' }}>
                <Icon type="clock-circle"/>
              </div>
              <div style={{ width: '140px' , float: 'left' }}>
                {`待检`}
              </div>
            </div>
            <div style={{ width: '240px', float: 'right', fontSize: '2.8vh', color: 'yellow' }}>
              <div style={{ width: '80px', textAlign: 'center', float: 'left' }}>
                <Icon type="frown"/>
              </div>
              <div style={{ width: '160px', float: 'left' }}>
                {`检验不合格`}
              </div>
            </div>
            <div style={{ width: '220px', float: 'right', fontSize: '2.8vh', color: 'yellow' }}>
              <div style={{ width: '80px', textAlign: 'center', float: 'left' }}>
                <Icon type="smile"/>
              </div>
              <div style={{ width: '140px', float: 'left' }}>
                {`检验合格`}
              </div>
            </div>
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default KuCunMingXi;
