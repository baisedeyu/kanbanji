import React from 'react'
import {connect } from 'dva';
import styles from './pingHengHaiLouTable.less'
import Header from  '../../components/BoardHeader/BoardHeader'
import GlobalFoot from '../../components/GlobalFooter/index'
import BoardFoot from '../../components/BoardFoot/BoardFoot'
import {Row,Col,Table} from 'antd'

class PingHengHaiLouTable extends React.Component{

  render(){

    // for(let i of document.getElementsByClassName('t')){
    //   i.parentNode.parentNode.style.background='red'
    // }

  const mytabledata = this.props.mytabledata;
    var data1 =[];
    var data2 =[];

    data1 = mytabledata[0];
    data2 = mytabledata[1];

    var column1 = [
      {
        title:'线别',
        dataIndex:'xianBie'
      },
      {
        title:'型式',
        dataIndex:'xingShi'
      },
      {
        title:'投入数',
        dataIndex:'touRuShu',
        render:text=> parseInt(text)<=700?<div className={'t'}>{text}</div>:<div>{text}</div>
      },
      {
        title:'PH C/T',
        dataIndex:'PHCT'
      },
      {
        title:'PH良品数',
        dataIndex:'PHliangPinShu'
      },
      {
        title:'良率',
        dataIndex:'liangLv'
      },
      {
        title:'HL良品数',
        dataIndex:'HLliangPinShu'
      },
      {
        title:'HL C/T',
        dataIndex:'HLCT'
      },
      {
        title:'良率',
        dataIndex:'liangLV'
      },
      {
        title:'直通率',
        dataIndex:'zhiTongLv'
      },
    ];

    var column2 = [
      {title:'机台',
        dataIndex:'jiTai',
      },
      {title:'操作员',
        dataIndex:'caoZuoYuan',
      },
      {title:'生产状况',
        dataIndex:'shengChanZhuangKuang',
      },
      {title:'标量',
        dataIndex:'biaoLiang',
      },

      {title:'投入数',
        dataIndex:'touRuShu',
      },

      {title:'良品数',
        dataIndex:'liangPinShu',
      },

      {title:'良率',
        dataIndex:'liangLv',
      },

      {title:'计划停机',
        dataIndex:'jiHuaTingJi',
      },

      {title:'异常停机',
        dataIndex:'yiChangTingJi',
      },

      {title:'累计时间',
        dataIndex:'leiJiShiJian',
      },

      {title:'稼动率',
        dataIndex:'jiaDongLv',
      },

    ];

    return (
      <div style={{ width: '100%', height: '100%', paddingLeft: '0.2%', paddingRight: '0.2%',position:'absolute' }}>
        <div style={{ height: '78%', overflow: 'auto'}}>
          <Row>
            <Col span='24'>
              <Table dataSource={data1}
                     columns={column1}
                     rowClassName={styles.table1td}
                     bordered
                     pagination={false}
                     className='pinghehailou'
              />
            </Col>
          </Row>
          </div>
        <div style={{height:'22%'}}>
          <Row>
            <Col span='24'>
              <Table dataSource={data2}
                     columns={column2}
                     rowClassName={styles.table1td}
                     bordered
                     pagination={false}
                     className='pinghehailou'
              />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export  default PingHengHaiLouTable
