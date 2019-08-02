import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import BoardHeader from '../../components/BoardHeader2/BoardHeader';
import './index.less';

@connect(({ sczk }) => ({ sczk }))
class ShengChanZhuangKuang extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'sczk/fetchData',
    });
  }

  render() {
    const { data, tableData } = this.props.sczk;
    const column = [{
      title: '线别',
      dataIndex: 'title',
      align: 'center',
      width: '18%',
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
    }];
    data.map((item, index) => {
      column.push({
        title: `${item[`DEVICESCODE`]}`,
        dataIndex: `${item[`DEVICESCODE`]}`,
        align: 'center',
        width: `${82 / data.length}%`,
        render: (text, record, indexs) => {
          const obj = {
            children: text,
            props: {
              style: {
                color: 'yellow',
              },
            },
          };
          if (indexs===3){
            obj.children=`${text}%`
          }
          if (indexs === 9) {
            obj.children = item[`RUNDESC`];
            if (text === `1`) {
              obj.props.style.background = 'red';
            }
            if (text === `2`) {
              obj.props.style.background = 'green';
            }
          }
          return obj;
        },
      });
    });

    const column2 = [
      {
        title: '标题',
        dataIndex: 'biaori',
        width:'25%',
        align:"center",
        render:(text,record,index)=>{
          const obj={
            children:text,
            props:{
              style:{
                color:'white'
              }
            }
          }
          if (index%2===0){
            obj.props.rowSpan=2
          } else {
            obj.props.rowSpan=0
          }
          return obj
        }
      },{
        title:'指示',
        dataIndex:'zhishi',
        width:'20%',
        align:"center",
        render:(text,record,index)=>{
          return{
            children:text,
            props:{
              style:{
                color:'white'
              }
            }
          }
        }
      },{
        title:'值',
        dataIndex:'zhi',
        width:'30%',
        align:"center",
        render:(text)=>{
          return{
            children:text,
            props:{
              style:{
                color:'yellow'
              }
            }
          }
        }
      },
      // {
      //   title:'图标',
      //   dataIndex:'tubiao',
      //   width:'25%',
      //   align:"center",
      //   render:(text,record,index)=>{
      //     const obj={
      //       children:'',
      //       props:{
      //         style:{
      //           color:'white'
      //         }
      //       }
      //     }
      //     if (index%2===0){
      //       obj.props.rowSpan=2
      //     } else {
      //       obj.props.rowSpan=0
      //     }
      //     return obj
      //   }
      // }
    ];

    const tableData2=[
      {
        biaori:'成品',
        zhishi:'标准',
        zhi:'',
        tubiao:''
      },{
        biaori:'成品',
        zhishi:'实际',
        zhi:'',
        tubiao:''
      },
      {
        biaori:'包装',
        zhishi:'标准',
        zhi:'',
        tubiao:''
      },{
        biaori:'包装',
        zhishi:'实际',
        zhi:'',
        tubiao:''
      },{
        biaori:'缴库',
        zhishi:'标准',
        zhi:'',
        tubiao:''
      },{
        biaori:'缴库',
        zhishi:'实际',
        zhi:'',
        tubiao:''
      },{
        biaori:'良率',
        zhishi:'标准',
        zhi:'',
        tubiao:''
      },{
        biaori:'良率',
        zhishi:'实际',
        zhi:'',
        tubiao:''
      },{
        biaori:'一次执行率',
        zhishi:'标准',
        zhi:'',
        tubiao:''
      },{
        biaori:'一次执行率',
        zhishi:'实际',
        zhi:'',
        tubiao:''
      },{
        biaori:'OEE',
        zhishi:'标准',
        zhi:'',
        tubiao:''
      },{
        biaori:'OEE',
        zhishi:'实际',
        zhi:'',
        tubiao:''
      },
    ]

    return (
      <div ref='fullscreen' style={{ background: '#2D1818', height: '100%' }}>
        <BoardHeader myurl={`武汉六丰WP1管理看板—生产状况看板`} myHeaderName={`111`}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%', width: '100%', position: 'relative' }}>
          <div style={{ height: '100%', width: '65%', padding: '0px 5px' ,float:'left'}}>
            <Table dataSource={tableData} className='sczk' columns={column} bordered pagination={false}/>
          </div>
          <div style={{height: '100%', width: '34%', padding: '0px 5px' ,float:'left'}}>
            <Table className='sczk2' dataSource={tableData2} columns={column2} bordered pagination={false} showHeader={false}/>
          </div>
        </div>
        <BoardFoot/>
      </div>

    );
  }
}

export default ShengChanZhuangKuang;
