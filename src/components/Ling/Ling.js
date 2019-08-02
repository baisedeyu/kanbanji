import React from 'react';
import { Table, Row, Col } from 'antd';
import styles from '../Ling/Lingc.css';
import './Ling.less';

class Ling extends React.Component {

  render() {

    // for( let d of document.getElementsByClassName('d')){
    //   d.parentNode.style.background = 'black'
    // }
    const touliao2 = this.props.touliao1;
    const jianshi2 = this.props.jianshi1;


    const data1 = () => {
      touliao2.map((item, index) => {
        let time = `${item['DROPTIME']}`
        if (time.length < 6) {
          while (time.length < 6) {
            time = '0' + time
          }
        }
        item.key = `${index}touliao`;
        const yue = `${item['DROPDATE']}`.substr(4, 2);
        const day = `${item['DROPDATE']}`.substr(6, 2);
        const hour = time.substr(0, 2);
        const min = time.substr(2, 2);
        item.TLtime = `${yue}-${day} ${hour}:${min}`;
        item.xuhao = touliao2.length - index;
      });
      const count = touliao2.length;
      if (count > 16) {
        return touliao2.slice(0, 16);
      } else {
        for (let i = 0; i < 16 - count; i++) {
          touliao2.push({ xuhao: '', ITEMNAME: '', DSSCODE: '', DROPUSER: '', QTY: '', TLtime: '', key: `${i}ktl` });
        }
        return touliao2;
      }
    };

    const data2 = () => {
      jianshi2.map((item, index) => {
        item.key = `${index}jianshi`;
      });
      return jianshi2;
    };

    const hebingcount = () => {
      const data = {};
      jianshi2.map((item, index) => {
        if (data.hasOwnProperty(item['DSSCODE'])) {
          data[item['DSSCODE']]['count'] = data[item['DSSCODE']]['count'] + 1;
        } else {
          data[item['DSSCODE']] = { index: index, count: 1 };
        }
      });
      const data1 = [];
      for (let key in data) {
        data1.push(data[key]['count']);
        for (let x = 0; x < data[key]['count'] - 1; x++) {
          data1.push(0);
        }
      }
      return data1;
    };
    
    const hebingcount2=()=>{
      const data=[]
      data2().map((item,index)=>{
        if(item.ITEMNAME===configs201905131052.RJTLnum){
          data.push(1)
        }else{
          if(data2()[index-1]){
            if(data2()[index-1][`ITEMNAME`]===configs201905131052.RJTLnum){
              data.push(1)
            }else{
              data[data.length-1]=data[data.length-1]+1
            }
          }else{
            data.push(1)
          }
        }
      })
      const dd=[]
      data.map(item=>{
        if(item===1){
          dd.push(item)
        }else{
          dd.push(item)
          for(let x=0;x<item-1;x++){
            dd.push(0)
          }
        }
      })
      return dd
    }
    

    const columns1 = [
      {
        title: '项次',
        dataIndex: 'xuhao',

        render: text => text !== '' ? <div>{text}</div> : <div style={{ visibility: 'hidden' }}>{'1'}</div>,
      },
      {
        title: '物料描述',
        dataIndex: 'ITEMNAME',

      },
      {
        title: '投入炉号',
        dataIndex: 'DSSCODE',
        className: '',
      },
      {
        title: '投料员',
        dataIndex: 'DROPUSER',
        key: 'DROPUSER',
      },
      {
        title: '投入重量（KG）',
        dataIndex: 'QTY',
      },
      {
        title: '投料时间',
        dataIndex: 'TLtime',
      },
    ];
    //数据必须是连续两个炉号相同，否则会出现数据混乱，
    const columns2 = [
      {
        title: '炉号',
        dataIndex: 'DSSCODE',
        key: 'DSSCODE',
        render: (text, row, index) => {
          const obj = {
            children: text,
            props: { },
          };
          // if (index % 2 === 0) {
          //   obj.props.rowSpan = 2;
          // } else {
          //   obj.props.rowSpan = 0;
          // }
          obj.props.rowSpan = hebingcount()[index];
          return obj;
        },
      },
      {
        title: '物料描述',
        dataIndex: 'ITEMDESC',
        key: 'ITEMNAME',
      },
      {
        title: '当前比例',
        dataIndex: 'DROPRATE',
        key: 'DROPRATE',
      },
      {
        title: '标准',
        dataIndex: 'ITEMDESC',
        render: (text, record, index) => {
          let children = ``
          if (record['ITEMNAME'] === configs201905131052.RJTLnum) {
            children = `${configs201905131052.RJTLYBZ}`
          } else {
            children = `${configs201905131052.RJTLEBZ}`
          }
          const obj={
            children:children,
            props: { },
          }
          if(configs201905131052.RJTLnum !== record.ITEMNAME){
            obj.props.rowSpan = hebingcount2()[index];
          }
          return obj
        }
      },
    ];


    return (
      <div style={{ width: '100%', height: '100%', paddingLeft: '0.2%', paddingRight: '0.2%' }}>
        <div style={{ height: '100%', width: '60%', float: 'left', marginTop: '8px' }}>

          <Table dataSource={data1()}
            className='rongjietouliao'
            columns={columns1}
            bordered
            size={'middle'}
            pagination={false}
            rowClassName={styles.rowcolor1} />
        </div>
        <div style={{ height: '100%', width: '40%', float: 'left', paddingLeft: '1%', marginTop: '8px' }}>
          <Table dataSource={data2()}
            title={() => <div style={{ width: '100%', color: 'white', textAlign: 'center' }}>熔炉监视</div>}
            className='rongjietouliao'
            columns={columns2}
            bordered
            size={'middle'}
            pagination={false}
            rowClassName={styles.rowcolor1} />
          <hr />
          {/*<span style={{ color: 'white', fontSize: 'x-large' }}>警示</span>*/}
          <br />
          {/*{(() => {*/}
          {/*let html = [];*/}
          {/*for (let i = 0; i < jianshi2.length; i++) {*/}
          {/*if (jianshi2[i].STANDARD.indexOf('>') > -1) {*/}
          {/*if (jianshi2[i].PROPORTION.replace(/[^\d.]/g, '') < jianshi2[i].STANDARD.replace(/[^\d.]/g, '')) {*/}
          {/*html.push(*/}
          {/*<span style={{*/}
          {/*color: '#ffff00',*/}
          {/*fontSize: '3vh',*/}
          {/*height: 'auto',*/}
          {/*}}>{jianshi2[i].ATTRIBUTE1 + '号炉，料号' + jianshi2[i].ITEMNAME + '投放比例不符合标准'}<br/></span>,*/}
          {/*);*/}
          {/*}*/}
          {/*}*/}
          {/*else {*/}
          {/*if (jianshi2[i].PROPORTION.replace(/[^\d.]/g, '') > jianshi2[i].STANDARD.replace(/[^\d.]/g, '')) {*/}
          {/*html.push(*/}
          {/*<span style={{*/}
          {/*color: '#ffff00',*/}
          {/*fontSize: '3vh',*/}
          {/*height: 'auto',*/}
          {/*}}>{jianshi2[i].ATTRIBUTE1 + '号炉，料号' + jianshi2[i].ITEMNAME + '投放比例不符合标准'}<br/></span>,*/}
          {/*);*/}
          {/*}*/}
          {/*}*/}
          {/*// Curate[i]=jianshi2[i].PROPORTION.replace(/[^\d.]/g,'');//正则表达式, 只保留数字以及小数点*/}
          {/*// Std=jianshi2[i].STANDARD.replace(/[^\d.]/g,'');*/}
          {/*}*/}
          {/*return html;*/}
          {/*})()*/}
          {/*}*/}

        </div>
      </div>

    );
  }
}

export default Ling;

