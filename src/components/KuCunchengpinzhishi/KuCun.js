import React, { useState, useEffect, Component } from 'react';
import { Table, Popover, message } from 'antd';
import { connect } from 'dva';
import './KuCun.less'
//divRefs集合 变色
const refs = [];
// export default connect(({ KuCunModel }) => ({ KuCunModel }))(function(props) {
@connect(({ KuCunModel }) => ({ KuCunModel }))
class KuCunKanBan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    }
    //定义表头
    this.Column = [
      {
        // width:'30px',
        title: '序号',
        dataIndex: 'xuHao',
        // textAlign: 'center',
        render:value=><div style={{color:'yellow'}}>{value===0?'':value}</div>
      },
      {
        // width:60,
        title: '料号',
        dataIndex: 'MITEMNAME',
        render:value=><div style={{color:'yellow'}}>{value===0?'':value}</div>
      },
      {
        // width:50,
        title: '当前库存',
        dataIndex: 'ONHAND',
        render:value=><div style={{color:'yellow'}}>{value===0?'':value}</div>
      },
      {
        // width:50,
        title: '本回出货',
        dataIndex: 'PSHIPQTY',
        render:value=><div style={{color:'yellow'}}>{value===0?'':value}</div>
      },
      {
        // width:50,
        title: '下回出货',
        dataIndex: 'PSHIPQTYNEXT',
        render:value=><div style={{color:'yellow'}}>{value===0?'':value}</div>
      },
      {
        // width:50,
        title: '待出货',
        dataIndex: 'PSHIPQTYWF',
        render:value=><div style={{color:'yellow'}}>{value===0?'':value}</div>
      },
      {
        // width:50,
        title: '状态',
        dataIndex: 'STATE',
        render: (value) => this.panDuanZhuangTai(value),
      }, {
        width:'1000px',
        title: '指示',
        dataIndex: 'FEEDDSC',
        render:value=><div style={{color:'yellow'}}>{value===0?'':value}</div>
      },
    ];
  }
  UNSAFE_componentWillMount() {
    //props
    //TODO props.location.query里有拼在url后面的参数对象
    const urls = window.location.search.substr(1).split('&');
    const data = {};
    urls.map(item => {
      data[item.split('=')[0]] = item.split('=')[1];
    });
    // const ORGID = data['OrgID'];
    // const myurl = data['EKANServer'];
    // const DspointCode = data.DSPOINTCODE;
    // const tmplcode=data[`TMPLCODE`]
    const chaXunTiaoJian = data
    console.log(chaXunTiaoJian)
    //显示点
    const xianShiDian = chaXunTiaoJian.DSPOINTCODE;
    //页尺码
    const pageSize = chaXunTiaoJian.PAGESIZE;
    //orgid
    const orgid = chaXunTiaoJian.OrgID;
    //url
    const url = chaXunTiaoJian.EKANServer;
    //TMPLCODE
    const TMPLCODE = chaXunTiaoJian.TMPLCODE;

    const { dispatch } = this.props;
    dispatch({
      type: 'KuCunModel/chaXunKuCun',
      payload: { pageIndex: 1, pageSize: pageSize, url: url, TMPLCODE: TMPLCODE, orgid: orgid, xianShiDian: xianShiDian },
      callback: (data, msg) => {
        console.log(data, 16);
        if (data.length > 0) {
          data.map((item, index) => {
            //添加序号
            item['xuHao'] = index + 1;
            //判断状态
            if (item.ONHAND > item.MAXQTY) {
              item['STATE'] = 3;
            } else if (item.ONHAND > item.SAFEQTY && item.ONHAND < item.MAXQTY) {
              console.log('我是绿色！');
              item['STATE'] = 2;
            } else if (item.ONHAND < item.MINQTY) {
              item['STATE'] = 1;
            }
          });
          console.log(data, 30)
          this.setState({
            tableData: data
          });

        } else {
          message.warn(msg);
        }
      },
    });

    setInterval(()=>{
      console.log(refs,115);
      if (refs.length > 0) {    
        refs.map((item, index) => {
          console.log(item,118);
          if(item.ref){
            item.ref.parentNode.style.backgroundColor = item.color;
            item.ref.parentNode.onclick = () => {
              message.info(item.tip);
            };
          }
          return null;
        },
        );
      }
    },1000);
  }
  componentDidMount() { }
  //判断状态
  panDuanZhuangTai = (value) => {
    const ZhuangTaiMap = new Map([
      [1, <div ref={ref => refs.push({ ref: ref, color: 'yellow', tip: '超标' })} />],
      [2, <div ref={ref => refs.push({ ref: ref, color: 'green', tip: '正常' })} />],
      [3, <div ref={ref => refs.push({ ref: ref, color: 'red', tip: '缺货' })} />]],
    );
    return ZhuangTaiMap.get(value);
  };
  render() {
    return <div>
      <Table className="kucun" dataSource={this.state.tableData} columns={this.Column} loading={false} bordered pagination={false} />
    </div>
  }
}

export default connect()(KuCunKanBan)

// //usestate
// const [xuanRan, setXuanRan] = useState(true);
// const [tableData, setTableData] = useState([]);

// //副作用
// useEffect(() => {

// }, [xuanRan]);
// // 以下函数返回 min（包含）～ max（包含）之间的数字：
// const getRndInteger = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// //模拟数据
// let i = 0;
// const totalCount = 30;
// const moNiShuJu = [];
// let xuHao = 1;
// while (i <= 20) {
//   moNiShuJu.push({
//     a: xuHao++,
//     b: `Q${getRndInteger(1, 9)}${getRndInteger(1, 9)}`,
//     c: `8000`,
//     d: `${getRndInteger(1, 9)}${getRndInteger(1, 9)}00`,
//     e: `${getRndInteger(1, 9)}${getRndInteger(1, 9)}00`,
//     f: `80000`,
//     g: getRndInteger(1, 3),
//     h: `拣货${getRndInteger(1, 9)}000，预计28日交货`,
//   });
//   i++;
// }


// //分页
// const onChange = (currentPage, pageSize) => {
//   refs.splice(0, refs.length);
//   //告诉副作用运行
//   setXuanRan(!xuanRan);
// };
// //显示尺寸更变
// const onShowSizeChange = (currentPage, pageSize) => {
//   refs.splice(0, refs.length);
//   //告诉副作用运行
//   setXuanRan(!xuanRan);
// };
// //分页设置
// const pagination = {
//   showTotal: (total, range) => <div style={{ marginLeft: 0 }}>共查到{totalCount ? totalCount : '0'}条数据</div>,
//   total: totalCount,
//   defaultCurrentPage: 1,
//   defaultPageSize: 10,
//   showQuickJumper: true,
//   showSizeChanger: true,
//   //把下面这两个函数变为对象，这样它们的函数里就了this再bind this就没问题了
//   onShowSizeChange: onShowSizeChange,
//   onChange: onChange,
// };

// return (

// );
// });
