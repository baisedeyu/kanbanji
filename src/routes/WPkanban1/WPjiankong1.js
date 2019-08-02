import React from 'react';
import { Table, Row, Col, Icon } from 'antd';
import './WPjiankong1.less';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { connect } from 'dva/index';


class WPjiankong1 extends React.Component {


  render() {


    const data = [
      {
        xiangmu: '汤洗1',
        biaozhun: '40±10',
        shiji: '40',
        zhuangtai: '正常',
      },
      {
        xiangmu: '汤洗2',
        biaozhun: '40±10',
        shiji: '30',
        zhuangtai: '正常',
      },
      {
        xiangmu: '预脱',
        biaozhun: '80±10',
        shiji: '80',
        zhuangtai: '正常',
      },
      {
        xiangmu: '主脱',
        biaozhun: '80±10',
        shiji: '80',
        zhuangtai: '正常',
      },
      {
        xiangmu: '水切炉温',
        biaozhun: '110±10',
        shiji: '112',
        zhuangtai: '正常',
      },
      {
        xiangmu: '粉底炉温',
        biaozhun: '180±20',
        shiji: '189',
        zhuangtai: '正常',
      },
      {
        xiangmu: '液底炉温',
        biaozhun: '150±20',
        shiji: '143',
        zhuangtai: '正常',
      },
      {
        xiangmu: '色漆炉温',
        biaozhun: '160±10',
        shiji: '159',
        zhuangtai: '正常',
      },
      {
        xiangmu: '粉透炉温',
        biaozhun: '170±10',
        shiji: '169',
        zhuangtai: '正常',
      },
      {
        xiangmu: 'KSL炉温',
        biaozhun: '200+20',
        shiji: '199',
        zhuangtai: '正常',
      },
    ];

    const data1 = [
      {
        xiangmu: '前处理A线速',
        biaozhun: '5±1',
        shiji: '5.5',
        zhuangtai: '正常',
      },
      {
        xiangmu: '前处理B线速',
        biaozhun: '5±1',
        shiji: '5.5',
        zhuangtai: '正常',
      },
      {
        xiangmu: '',
        biaozhun: 'T',
        shiji: '',
        zhuangtai: '',
      },
      {
        xiangmu: '',
        biaozhun: 'T',
        shiji: '',
        zhuangtai: '',
      },
      {
        xiangmu: '水切线速',
        biaozhun: '5±1',
        shiji: '5.5',
        zhuangtai: '正常',
      },
      {
        xiangmu: '粉底线速',
        biaozhun: '5±1',
        shiji: '5.5',
        zhuangtai: '正常',
      },
      {
        xiangmu: '液底线速',
        biaozhun: '5±1',
        shiji: '5.5',
        zhuangtai: '正常',
      },
      {
        xiangmu: '色漆线速',
        biaozhun: '5±1',
        shiji: '5.5',
        zhuangtai: '正常',
      },
      {
        xiangmu: '粉透线速',
        biaozhun: '5±1',
        shiji: '5.5',
        zhuangtai: '正常',
      },
      {
        xiangmu: 'KSL线速',
        biaozhun: '5±1',
        shiji: '5.5',
        zhuangtai: '正常',
      },

    ];


    const column1 = [
      {
        title: '项目',
        dataIndex: 'xiangmu',
        render: (text) => <div style={{ color: 'white' }}>{text}</div>,
      },
      {
        title: '标准值',
        dataIndex: 'biaozhun',
        render: (text) => {
          if (text === 'T') {
            return (
              <div style={{ visibility: 'hidden' }}>{1}</div>
            );
          } else {
            return <div>{text}</div>;
          }
        },
      },
      {
        title: '实际值',
        dataIndex: 'shiji',

      },
      {
        title: '状态',
        dataIndex: 'zhuangtai',
        align:'center',
        render:(text,record,index)=>{
          {/*<div style={{position:'relative'}}>*/}
            {/*<div style={{background:'red',width:'20px',height:'20px',position:'absoulte',margin:'auto'}}/>*/}
          {/*</div>*/}
          return text
        }
      },
    ];


    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#2d1818' }}>
        <BoardHeader myurl={'武汉六丰WP1设备看板—设备监控'} myHeaderName={111}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%', width: '100%' }}>
          <div style={{ width: '50%', height: '100%', float: 'left' }}>
            <Table
              className='WPjiankongless'
              dataSource={data}
              columns={column1}
              pagination={false}
              bordered={true}/>
          </div>
          <div style={{ width: '50%', height: '100%', float: 'right' }}>
            <Table
              className='WPjiankongless'
              dataSource={data1}
              columns={column1}
              pagination={false}
              bordered={true}/>
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default WPjiankong1;
