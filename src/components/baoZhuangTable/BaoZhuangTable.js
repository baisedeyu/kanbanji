import  React from 'react'
import { Row, Col,Carousel } from 'antd';
import { Table,Icon,Divider } from 'antd';
import styles from './baoZhuang.less'
import yeah from '../../assets/JD_Leading.png'
import fist from '../../assets/JD_Backward.png'

class BaoZhuangTable extends React.Component{

  render() {

    // for(let td1 of document.getElementsByClassName('td1')){
    //   td1.parentNode.previousSibling.style.background='#000000'
    // }

    const data  = this.props.data;

    //将获取的数据总数据进行拆分，分为上下两种表格的数据
    const chaifen1=(data=[])=>{
      let T1=[];
      T1.push(data.slice(0,data.length-1));
      T1.push(data.slice(data.length-1,data.length));
      return T1;
    };

    //表格没有数据显示白框，如果数据为空则无法正常显示
    const xuni=()=>{
      let T=[];
      for(let i=0;i<24;i++){
        T.push(
          {
            xianBie:'包装',
            xingShi:'',
            xiaXianShu:'',
            baoZhuangShu:'',
            jiaoKuShu:'',
            jiaoKuBi:'',
            jinDu:1,
          }
        )
      }
      return T;
    };

    //下表格数据
    let data3 = chaifen1(data)[1];

    //将数据平均拆分为两个
    const chaifen = (data = []) => {
      let size=data.length/2;
      if(data.length % 2 ===0){
        size = data.length/2
      }else{
        size = data.length/2+1
      }
      let T1 = [];
      T1.push(data.slice(0,size));
      T1.push(data.slice(size,data.length));
      return T1;
    };

    //将数正常数据复制到白框
    const baik=(data=[])=> {
      let data1=xuni();
      let data2=chaifen(data)[0];
      let data3=chaifen(data)[1];
      for (let i = 0; i < data2.length; i++) {
        data1[i]=data2[i];
      }
      for(let j=0;j<data3.length;j++){
        data1[j+12]=data3[j];
      }
      return data1;
    };

    const biaocolor=()=>{
      let obj = document.getElementsByClassName("ant-table-row-indent indent-level-0");
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].parentNode.rowSpan !== 1) {
          obj[i].parentNode.style.background = 'black';
        }
        // console.log(obj[i].parentNode.ro118wSpan)
      }
    };
    biaocolor();
    //跑马灯数据整理
    // const zhengli=(data)=>{
    //   let T1=[];
    //   let data1=chaifen1(data)[0];
    //   let count=Math.ceil(data1.length/22);
    //   for(let i=1;i<=count;i++){
    //     T1=T1.concat(chaifen(data1.slice((i-1)*22,22*i)));
    //   }
    //   return T1;
    // };

    const table2Column=(data=[])=>{
      let biao2= [
        {
          title:'线别',
          dataIndex:'xianBie',
          width:'12%',
          render:(text,row,index)=>{
            const cell={
              children:text,
              props:{}
            };
            if(index===0){
              cell.props.rowSpan = data.length;
            }else{
              cell.props.rowSpan=0;
            }
            return cell;
          }
        },
        {     title: '形式',
          dataIndex: 'xingShi',
          // render:(text,index,row)=>row===0?<div className={'td1'}>{text}</div>:<div>{text}</div>
        },
        {     title: '下线数',
          dataIndex: 'xiaXianShu',
        },
        {     title: '包装数',
          dataIndex: 'baoZhuangShu',
        },
        {     title: '缴库数',
          dataIndex: 'jiaoKuShu',
        },
        {
          title: '缴库比',
          dataIndex: 'jiaoKuBi',
        }
        ,
        {     title: '进度',
          dataIndex: 'jinDu',
          align:'center',
          render:(text,record)=> record.xingShi ==='' ? <div style={{visibility:'hidden'}}><img src={yeah} width="40px" height="40px"/></div> : text===1 ? <div><img src={yeah} width="40px" height="40px"/></div> : <div><img src={fist} width="40px" height="40px"/></div>
        },
      ];
      return biao2
    };

    const table3Column=(data=[])=>{
      const biao3= [
        {     title: '形式',
          dataIndex: 'xingShi',
        },
        {     title: '下线数',
          dataIndex: 'xiaXianShu',
        },
        {     title: '包装数',
          dataIndex: 'baoZhuangShu',
        },
        {     title: '缴库数',
          dataIndex: 'jiaoKuShu',
        },
        {    title: '缴库比',
          dataIndex: 'jiaoKuBi',
        },
        {     title: '进度',
          dataIndex: 'jinDu',
          align:'center',
          render:(text,record)=> record.xingShi ==='' ? <div style={{visibility:'hidden'}}><img src={yeah} width="40px" height="40px"/></div> : text===1 ? <div><img src={yeah} width="40px" height="40px"/></div> : <div><img src={fist} width="40px" height="40px"/></div>
        },
      ];
      return biao3;
    };

    const table4Column= [
      {     title: '线别',
        dataIndex: 'xianBie',
      },
      {     title: '担当',
        dataIndex: 'xiaXianShu',
      },
      {     title: '包装人数',
        dataIndex: 'baoZhuangRenShu',
      },
      {     title: '当班标量',
        dataIndex: 'dangBanBiaoLiang',
      },
      {     title: '下线数',
        dataIndex: 'xiaXianShu',
      },
      {     title: '包装数',
        dataIndex: 'baoZhuangShu',
      },
      {     title: '缴库数',
        dataIndex: 'jiaoKuShu',
      },
      {     title: '缴库比',
        dataIndex: 'jiaoKuBi',
      },
      {     title: '进度',
        dataIndex: 'jinDu',
        render:(text)=> text===1 ? <div><img src={yeah} width="40px" height="40px"/></div> : <div><img src={fist} width="40px" height="40px"/></div>
      },
      {     title: '生产状况',
        dataIndex: 'shengChanZhuangKuang',
      },
    ];

    return(
      <div style={{ width: '100%', height: '100%', paddingLeft: '0.2%', paddingRight: '0.2%',position:'absolute' }}>
       <div style={{height: '86%', }}>
         <Row gutter={1}>
                 <Col span={12}>
                   <Table
                     dataSource={chaifen(baik(chaifen1(data)[0]))[0]}
                     columns={table2Column(data)}
                     bordered
                     size={'middle'}
                     pagination={false}
                     className='baozhuangtable'
                     rowClassName={( record,index)=> record.jiaoKuBi==="100%" ? styles.rowcolor2 : (parseInt(record.jiaoKuBi)<=15 ? styles.rowcolor3 : styles.table2)}
                   />
                 </Col>
                 <Col span={12}>
                   <Table
                     rowClassName={(record,index)=> record.jiaoKuBi==="100%" ? styles.rowcolor2 : (parseInt(record.jiaoKuBi)<=15 ? styles.rowcolor3 : styles.table2)}
                     dataSource={chaifen(baik(chaifen1(data)[0]))[1]}
                     columns={table3Column(data)}
                     bordered
                     size={'middle'}
                     className='baozhuangtable'
                     pagination={false}/>
                 </Col>
         </Row>

       </div>

         <div style={{height: '18%'}}>
           <Row>
             <Col span={24}>
               <Table
                 pagination={false}
                 rowClassName={styles.table2}
                 dataSource={data3}
                 size={'middle'}
                 columns={table4Column}
                 className='baozhuangtable'
                 bordered/>
             </Col>
           </Row>
         </div>
      </div>
     )
  }
}

export default BaoZhuangTable

// const table2Column= [
//   {
//     title:'线别',
//     dataIndex:'xianBie',
//     width:'11%',
//     render:(text,row,index)=>{
//       const cell={
//         children:text,
//         props:{}
//       };
//       if(index===0){
//         cell.props.rowSpan = 11;
//       }else{
//         cell.props.rowSpan=0;
//       }
//       return cell;
//
//     }
//   },
//   {     title: '形式',
//     dataIndex: 'xingShi',
//     render:(text,index,row)=>row===0?<div className={'td1'}>{text}</div>:<div>{text}</div>
//   },
//   {     title: '下线数',
//     dataIndex: 'xiaXianShu',
//   },
//   {     title: '包装数',
//     dataIndex: 'baoZhuangShu',
//   },
//   {     title: '缴库数',
//     dataIndex: 'jiaoKuShu',
//   },
//   {
//     title: '缴库比',
//     dataIndex: 'jiaoKuBi',
//     render: text => {
//       let html=[]
//       if(text==='100%'){
//         html.push(<div className={'td2'}>{text}</div>)
//         return html;
//       }else if(parseInt(text)<=15){
//         html.push(<div className={'td3'}>{text}</div>)
//         return html
//       }else{
//         return <div>{text}</div>
//       }
//     }
//   }
//   ,
//   {     title: '进度',
//     dataIndex: 'jinDu',
//     render:(text)=>{
//       if(text===1){
//         return  <img src={yeah} width="40px" height="40px"/>
//       }
//       if(text===0){
//         return <img src={fist}  width="40px" height="40px"/>
//       }
//     }
//   },
// ];

// const table3Column= [
//   {     title: '形式',
//     dataIndex: 'xingShi',
//   },
//   {     title: '下线数',
//     dataIndex: 'xiaXianShu',
//   },
//   {     title: '包装数',
//     dataIndex: 'baoZhuangShu',
//   },
//   {     title: '缴库数',
//     dataIndex: 'jiaoKuShu',
//   },
//   {    title: '缴库比',
//     dataIndex: 'jiaoKuBi',
//     render: (text) => {
//       let html=[];
//       if(text==='100%'){
//         html.push(<div className={'td2'}>{text}</div>);
//         return html;
//       }else if(parseInt(text)<=15){
//         html.push(<div className={'td3'}>{text}</div>);
//         return html
//       }else{
//         return <div>{text}</div>
//       }
//     }
//   },
//   {     title: '进度',
//     dataIndex: 'jinDu',
//     render:(text)=>{
//
//       if(text===1){
//         // html.push(
//         //   <div> /></div>
//         //
//         //
//         // )
//         return  <div><img src={yeah} width="40px" height="40px"/></div>
//       }
//       if(text===0){
//         return <img src={fist} width="40px" height="40px"/>
//       }
//     }
//   },
// ];

{/*//以跑马灯形式显示*/}
{/*<Carousel*/}
{/*autoplay*/}
{/*autoplaySpeed={5000}*/}
{/*dots={false}*/}
{/*>*/}
{/*{(()=>{*/}
{/*let html=[];*/}
{/*for(let i=0;i<zhengli(data).length;i=i+2){*/}
{/*html.push(*/}
{/*<Row align='center'>*/}
{/*<Col span={12}>*/}
{/*<Table*/}
{/*dataSource={zhengli(data)[i]}*/}
{/*columns={table2Column(data)}*/}
{/*bordered*/}
{/*size={'middle'}*/}
{/*pagination={false}*/}
{/*rowClassName={( record,index)=> record.jiaoKuBi==="100%" ? styles.rowcolor2 : (parseInt(record.jiaoKuBi)<=15 ? styles.rowcolor3 : styles.table2)}*/}
{/*/>*/}
{/*</Col>*/}
{/*<Col span={12}>*/}
{/*<Table*/}
{/*rowClassName={(record,index)=> record.jiaoKuBi==="100%" ? styles.rowcolor2 : (parseInt(record.jiaoKuBi)<=15 ? styles.rowcolor3 : styles.table2)}*/}
{/*dataSource={zhengli(data)[i+1]}*/}
{/*columns={table3Column(data)}*/}
{/*bordered*/}
{/*size={'middle'}*/}
{/*pagination={false}/>*/}
{/*</Col>*/}
{/*</Row>*/}
{/*)*/}
{/*}*/}
{/*return html;*/}
{/*})()*/}
{/*}*/}
{/*</Carousel>*/}
