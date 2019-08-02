import React from 'react';
import { Row, Col } from 'antd';
import { Table,Icon,Divider } from 'antd';
import  styles from './Xray.css'

class RXrayTable extends React.Component{
  render(){
   const data  = this.props.data;

    for(var i = 0;i< document.getElementsByClassName('b').length;i++){
      document.getElementsByClassName('b')[i].parentNode.parentNode.style.background='#00BBFF'
    }

    const columns2 = [
      {
        title: '线别',
        dataIndex: 'xianBie',
        key: 'xianBie',
      },{
        title: '操作员',
        dataIndex: 'caoZuoYuan',
        key: 'caoZuoYuan',
      },{
        title: '当班标量',
        dataIndex: 'dangBanBiaoLiang',
        key: 'dangBanBiaoLiang',
      },{
        title: '投入数',
        dataIndex: 'touRuShu',
        key: 'touRuShu'},
      {
        title: '完成比率',
        dataIndex: 'wanChengBiLv',
        key: 'wanChengBiLv',
      },{
        title: '进度',
        dataIndex: 'jinDu',
        key: 'jinDu',
      },{
        title: '生产状况',
        dataIndex: 'shengChanZhuangKuang',
        key: 'shengChanZhuangKuang',
      },{
        title: '计划停机',
        dataIndex: 'jiHuaTingJi',
        key: 'jiHuaTingJi'},
      {
        title: '异常停机',
        dataIndex: 'yiChangTingJi',
        key: 'yiChangTingJi',
      },{
        title: '累计时间',
        dataIndex: 'leiJiShiJian',
        key: 'leiJiShiJian',
      },{
        title: 'OEE',
        dataIndex: 'OEE',
        key: 'OEE',
        render: (text,record) =><div className={'O'}>{text}</div>
      },
    ];

    return(
      <div style={{ width: '100%', height: '100%', paddingLeft: '0.2%', paddingRight: '0.2%',position:'absolute' }}>
      <div style={{height:'67%', overflow: 'auto' }}>
          <Row>
            {
              (()=>{
                //antd table字段
                let columns1 = [];
                let html =[];
                for(let i=1;i<data.length-1;i++){
                  columns1=[
                    {
                      title:i+'#',
                      children:[
                        {
                          title: '形式',
                          dataIndex: 'xingShi',
                          key: 'xingShi',
                        }, {
                          title: '投入数',
                          dataIndex: 'touRuShu',
                          key: 'touRuShu',
                        }, {
                          title: '不良数',
                          dataIndex: 'buLiangShu',
                          key: 'buLiangShu',
                        }, {
                          title: '不良率',
                          dataIndex: 'buLiangLv',
                          key: 'buLiangLv',
                          render: text => text >= 0.75 ? <div className={'b'}>{text * 100 + '%'}</div> : <div>{text * 100 + '%'}</div>
                        }
                      ]
                    }
                  ];

                  html.push(
                    <Col span={24/(data.length-2)}>
                      <Table dataSource={data[i]}
                             columns={columns1}
                             size={'middle'}
                             pagination ={false}
                             bordered rowClassName={styles.tableRow}/>
                    </Col>
                  )
                }
                return html
              })()
            }
          </Row>
      </div>
          <div style={{height:'33%'}}>
          <Row>
            <Col>
              <Table dataSource={data[0]}
                     columns={columns2}
                     size={'middle'}
                     pagination ={false}
                     colClassName={styles.tableRow}
                     rowClassName={styles.tableRow}
                     bordered/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default RXrayTable
