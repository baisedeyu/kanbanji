import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import BoardHeader from '../../components/MojuMojianHeader/BoardHeader';
import './index.less';
import fetch from 'dva/fetch';
import $ from 'jquery';


@connect(({ fmcheckpasswp }) => ({ fmcheckpasswp }))
class FMCheckPassWP extends Component {

  state = {
    data: [],
  };

  componentDidMount() {
    this.getData().then(res => res.json()).then(response => this.setState({ data: response })).catch(() => console.log('错误'));
  }

  getData = () => {
    return fetch('http://10.169.100.51/WebWatchPanel/FGetPanelData.ashx');
    //  $.ajax({
    //    url: 'http://221.233.243.220/WebWatchPanel/FGetPanelData.ashx',
    //    type: 'GET',
    //    cache:false,
    //    datatype:'text',
    //    async:false,
    //    success: function (data) {
    //      alert(data)
    //    },
    //    error:function(err){
    //      alert(111)
    //    }
    //  })
  };

  render() {
    const { data } = this.state;
    console.log(data);
    const tableData = [];
    data.map((item, index) => {
      const aa = {};
      item[`Activity`].map(item => {
        aa[`${item[`ActivityID`]}`] = item[`IsComplete`];
      });
      tableData.push({
        MouldNo: item[`MouldNo`],
        mojufenjie: aa[`DS1PDA000000195`],
        dasha: aa[`DS1PDA000000069`],
        CTqueren: { shang: `${aa[`DS1PDA000000252`]}`, xia: `${aa[`DS1PDA000000253`]}` },
        penmo: { shang: `${aa[`DS1PDA000000073`]}`, xia: `${aa["DS1PDA000000255"]}` },
        penmoCT: aa[`DS1PDA000000255`],
        mojuzuzhuang: aa[`DS1PDA000000075`],
        mojucelou: aa[`DS1PDA000000077`],
        zuzhangqueren: aa[`DS1PDA000000071`],
      });
      tableData.push({
        dasha: aa[`DS1PDA000000104`],
      });
      tableData.push({
        dasha: aa[`DS1PDA000000079`], jianxiu: aa[`DS1PDA000000105`],
      });
    });
    console.log(tableData)
    if (tableData.length<12){
      const count=12-tableData.length
      for (let x =0;x<count;x++){
        tableData.push({key:`${x}key`})
      }
    }
    const column = [
      {
        title: '模具号',
        dataIndex: 'MouldNo',
        align: 'center',
        render: (text, record, index) => {
          const obj = {
            children: text,
            props: {},
          };
          if (index % 3 === 0) {
            obj.props.rowSpan = 3;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      }, {
        title: '模具分解',
        align: 'center',
        dataIndex: 'mojufenjie',
        render: (text, record, index) => {
          let child = ``;
          if (text === 1) {
            child = <img src={require('../../assets/img/complete.jpg')}/>;
          }else if (text===0) {
            child = <img src={require('../../assets/img/work.jpg')}/>;
          }
          const obj = {
            children: child,
            props: {},
          };
          if (index % 3 === 0) {
            obj.props.rowSpan = 3;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      }, {
        title: '上模检修',
        children: [
          {
            title: '下模检修',
            key: 'xiamojianxiu',
            children: [
              {
                title: '边模打砂',
                align: 'center',
                dataIndex: 'dasha',
                render: (text, record, index) => {
                  let child = ``;
                  if (text === 1) {
                    child = <img style={{height:'85%'}} src={require('../../assets/img/complete.jpg')}/>;
                  }else if (text===0) {
                    child = <img style={{height:'85%'}} src={require('../../assets/img/work.jpg')}/>;
                  }
                  const obj = {
                    children: child,
                    props: {},
                  };
                  if (index % 3 !== 2) {
                    obj.props.colSpan = 2;
                  } else {
                    obj.props.colSpan = 1;
                  }
                  return obj;
                },
              },
              {
                title: '边模检修',
                dataIndex: 'jianxiu',
                align: 'center',
                render: (text, record, index) => {
                  let child = ``;
                  if (text === 1) {
                    child = <img style={{height:'85%'}} src={require('../../assets/img/complete.jpg')}/>;
                  }else if (text===0) {
                    child = <img style={{height:'85%'}} src={require('../../assets/img/work.jpg')}/>;
                  }
                  const obj = {
                    children: child,
                    props: {},
                  };
                  if (index % 3 !== 2) {
                    obj.props.colSpan = 0;
                  }
                  return obj;
                },
              },
            ],
          },
        ],
      }, {
        title: <div>
          <div style={{ paddingBottom: '10px', borderBottom: '1px solid white' }}>上模CT确认</div>
          <div style={{ paddingTop: '10px' }}>下边CT确认</div>
        </div>,
        width:'12%',
        dataIndex: 'CTqueren',
        align: 'center',
        render: (text, record, index) => {
          let value1 = ``;
          let value2 = ``;
          value1 = record[`CTqueren`] === undefined ? ` ` : record[`CTqueren`][`shang`];
          value2 = record[`CTqueren`] === undefined ? ` ` : record[`CTqueren`][`xia`];
          value1 = value1 === 'undefined' ? `` : value1;
          value2 = value2 === 'undefined' ? `` : value2;
          let child1 = ``;
          let child2 = ``;
          if (value1 === `1`) {
            child1 = <img style={{ position: 'absolute', transform: 'translate(-50%,50%)' }}
                          src={require('../../assets/img/complete.jpg')}/>;
          }else if (value1 === `0`){
            child1 = <img style={{ position: 'absolute', transform: 'translate(-50%,50%)' }}
                          src={require('../../assets/img/work.jpg')}/>;
          }
          if (value2 === `1`) {
            child2 = <img style={{ position: 'absolute', transform: 'translate(-50%,50%)' }}
                          src={require('../../assets/img/complete.jpg')}/>;
          }else if (value2 === `0`){
            child2 = <img style={{ position: 'absolute', transform: 'translate(-50%,50%)' }}
                          src={require('../../assets/img/work.jpg')}/>;
          }
          const obj = {
            children: <div>
              <div style={{ position: 'relative', height: '80px', borderBottom: '1px solid white' }}>{child1}</div>
              <div style={{ position: 'relative', height: '80px' }}>{child2}</div>
            </div>,
            props: {
              style: {
                height: '110px',
              },
            },
          };

          if (index % 3 === 0) {
            obj.props.rowSpan = 3;

          } else {
            obj.props.rowSpan = 0;
          }

          return obj;
        },
      }, {
        title: <div>
          <div style={{ paddingBottom: '10px', borderBottom: '1px solid white' }}>上模喷模</div>
          <div style={{ paddingTop: '10px' }}>下边喷模</div>
        </div>,
        width:'12%',
        dataIndex: 'penmo',
        align: 'center',
        render: (text, record, index) => {
          let value1 = ``;
          let value2 = ``;
          value1 = record[`penmo`] === undefined ? ` ` : record[`penmo`][`shang`];
          value2 = record[`penmo`] === undefined ? ` ` : record[`penmo`][`xia`];
          value1 = value1 === 'undefined' ? `` : value1;
          value2 = value2 === 'undefined' ? `` : value2;
          let child1 = ``;
          let child2 = ``;
          console.log(value1)
          if (value1 === `1`) {
            child1 = <img style={{ position: 'absolute', transform: 'translate(-50%,50%)' }}
                          src={require('../../assets/img/complete.jpg')}/>;
          }else if (value1 === `0`){
            child1 = <img style={{ position: 'absolute', transform: 'translate(-50%,50%)' }}
                          src={require('../../assets/img/work.jpg')}/>;
          }
          if (value2 === `1`) {
            child2 = <img style={{ position: 'absolute', transform: 'translate(-50%,50%)' }}
                          src={require('../../assets/img/complete.jpg')}/>;
          }else if (value2 === `0`){
            child2 = <img style={{ position: 'absolute', transform: 'translate(-50%,50%)' }}
                          src={require('../../assets/img/work.jpg')}/>;
          }
          const obj = {
            children: <div>
              <div style={{ position: 'relative', height: '70px', borderBottom: '1px solid white' }}>{child1}</div>
              <div style={{ position: 'relative', height: '70px' }}>{child2}</div>
            </div>,
            props: {},
          };
          if (index % 3 === 0) {
            obj.props.rowSpan = 3;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      }, {
        title: '喷模CT确认',
        dataIndex: 'penmoCT',
        align: 'center',
        render: (text, record, index) => {
          let child = ``;
          if (text === 1) {
            child = <img src={require('../../assets/img/complete.jpg')}/>;
          }else if (text===0){
            child = <img src={require('../../assets/img/work.jpg')}/>;
          }
          const obj = {
            children: child,
            props: {},
          };
          if (index % 3 === 0) {
            obj.props.rowSpan = 3;

          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      }, {
        title: '模具组装',
        align: 'center',
        dataIndex: 'mojuzuzhuang',
        render: (text, record, index) => {
          let child = ``;
          if (text === 1) {
            child = <img src={require('../../assets/img/complete.jpg')}/>;
          }else if (text===0){
            child = <img src={require('../../assets/img/work.jpg')}/>;
          }
          const obj = {
            children: child,
            props: {},
          };
          if (index % 3 === 0) {
            obj.props.rowSpan = 3;

          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      }, {
        title: '模具测漏',
        align: 'center',
        dataIndex: 'mojucelou',
        render: (text, record, index) => {
          let child = ``;
          if (text === 1) {
            child = <img src={require('../../assets/img/complete.jpg')}/>;
          }else if (text===0){
            child = <img src={require('../../assets/img/work.jpg')}/>;
          }
          const obj = {
            children: child,
            props: {},
          };
          if (index % 3 === 0) {
            obj.props.rowSpan = 3;

          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      }, {
        title: '组长确认',
        align: 'center',
        dataIndex: 'zuzhangqueren',
        render: (text, record, index) => {
          let child = ``;
          if (text === 1) {
            child = <img src={require('../../assets/img/complete.jpg')}/>;
          }else if (text===0){
            child = <img src={require('../../assets/img/work.jpg')}/>;
          }
          const obj = {
            children: child,
            props: {},
          };
          if (index % 3 === 0) {
            obj.props.rowSpan = 3;

          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        },
      },
    ];
    return (
      <div style={{ background: '#2D1818', height: '100%' }}>
        <BoardHeader myurl={`备模中模具模检进度一览表`} myHeaderName={data.length}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%', width: '100%', position: 'relative', padding: '2px 5px' }}>
          <Table pagination={false} dataSource={tableData} className="FMCheckPassWp" columns={column} bordered/>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default FMCheckPassWP;
