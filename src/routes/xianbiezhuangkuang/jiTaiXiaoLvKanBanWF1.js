import React from 'react'
import {connect} from 'dva'
import {Table,Row,Col,Tabs,Card,Icon} from 'antd'
import styles from './tuBiao.css'
// 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
// // 引入柱状图
// import  'echarts/lib/chart/bar';
// // 引入折线图
// import  'echarts/lib/chart/line';
import ReactEcharts from 'echarts-for-react';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
// // 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';


const TabPane = Tabs.TabPane;

class jiTaiXiaoLvKanBanWF1 extends React.Component {

  constructor(props){
    super(props)
    this.state={
      activeKey:'a',
      id:''
    }
  }
  componentDidMount(){
    this.setState({myurl:'WF1工位看板——包装'})
    this.setState({myHeaderName:'早班'})
    //2取出willmount存入state的id调用接口
    const {dispatch} = this.props
    const {id}= this.state
    dispatch({
      type:'tuBiao/save',
      payload:id
    })
  }
  componentWillMount(){
    //1取出仪表点击后传过来的id,存入state
    const {data} =  this.props
    this.setState({
      id:data
    })
    console.log(data)
  }


  //tabs切换
  tabOnChange=(activeKey)=> {
    console.log(activeKey)
    this.setState({
      activeKey: activeKey
    })
  }

  render() {
    //3取出didmount调用接口后取出的数据
    const {data} = this.props
    console.log(data)
    //todo type分辨是柱状折线还是饼图
    const type = 1
    //todo lalala1是模拟
    const lalala1 = 2
    //todo payload是拼接的表数据和chart对象和chartName字符串的数组
    const payload =[1]
    //todo 根据接口返回的columns遍历拼接表头
    const column  = []
    //低压铸造
    const DiYaZhuZao=[
      {
        title:'机台',
        dataIndex:'jiTai'
      },
      {
        title:'标量',
        dataIndex:'biaoLiang'
      },
      {
        title:'铸造数',
        dataIndex:'zhuZaoShu'
      },
      {
        title:'良品数',
        dataIndex:'liangPinShu'
      },
    ]
    const diYaZhuZao=[
      {
        jiTai:'1#',
        biaoLiang:70,
        zhuZaoShu:90,
        liangPinShu:147
      },
      {
        jiTai:'2#',
        biaoLiang:70,
        zhuZaoShu:80,
        liangPinShu:147
      },
      {
        jiTai:'3#',
        biaoLiang:70,
        zhuZaoShu:65,
        liangPinShu:147
      },
      {
        jiTai:'4#',
        biaoLiang:70,
        zhuZaoShu:46,
        liangPinShu:147
      },
      {
        jiTai:'5#',
        biaoLiang:70,
        zhuZaoShu:59,
        liangPinShu:147
      },
      {
        jiTai:'6#',
        biaoLiang:70,
        zhuZaoShu:90,
        liangPinShu:147
      },
      {
        jiTai:'7#',
        biaoLiang:70,
        zhuZaoShu:67,
        liangPinShu:147
      },
      {
        jiTai:'8#',
        biaoLiang:70,
        zhuZaoShu:46,
        liangPinShu:142
      },
      {
        jiTai:'9#',
        biaoLiang:70,
        zhuZaoShu:60,
        liangPinShu:147
      },
      {
        jiTai:'10#',
        biaoLiang:70,
        zhuZaoShu:80,
        liangPinShu:147
      },
      {
        jiTai:'11#',
        biaoLiang:70,
        zhuZaoShu:77,
        liangPinShu:147
      },
      {
        jiTai:'12#',
        biaoLiang:70,
        zhuZaoShu:50,
        liangPinShu:125
      },
      {
        jiTai:'13#',
        biaoLiang:70,
        zhuZaoShu:46,
        liangPinShu:147
      },
      {
        jiTai:'14#',
        biaoLiang:70,
        zhuZaoShu:60,
        liangPinShu:147
      },
      {
        jiTai:'15#',
        biaoLiang:70,
        zhuZaoShu:78,
        liangPinShu:147
      },
      {
        jiTai:'16#',
        biaoLiang:70,
        zhuZaoShu:42,
        liangPinShu:147
      },
      {
        jiTai:'17#',
        biaoLiang:70,
        zhuZaoShu:95,
        liangPinShu:147
      },
      {
        jiTai:'18#',
        biaoLiang:70,
        zhuZaoShu:65,
        liangPinShu:147
      },
      {
        jiTai:'19#',
        biaoLiang:70,
          zhuZaoShu:55,
        liangPinShu:118
      },
      {
        jiTai:'20#',
        biaoLiang:70,
        zhuZaoShu:98,
        liangPinShu:147
      },
      {
        jiTai:'21#',
        biaoLiang:70,
        zhuZaoShu:40,
        liangPinShu:147
      },
      {
        jiTai:'22#',
        biaoLiang:70,
        zhuZaoShu:88,
        liangPinShu:127
      },
      {
        jiTai:'23#',
        biaoLiang:70,
        zhuZaoShu:58,
        liangPinShu:147
      },
      {
        jiTai:'24#',
        biaoLiang:70,
        zhuZaoShu:50,
        liangPinShu:147
      },
      {
        jiTai:'25#',
        biaoLiang:70,
        zhuZaoShu:41,
        liangPinShu:149
      },
      {
        jiTai:'26#',
        biaoLiang:70,
        zhuZaoShu:57,
        liangPinShu:147
      },
      {
        jiTai:'27#',
        biaoLiang:70,
        zhuZaoShu:50,
        liangPinShu:118
      },
      {
        jiTai:'28#',
        biaoLiang:70,
        zhuZaoShu:31,
        liangPinShu:147
      },
    ]
    //分页对象
    const pagination={
      pageSize:15
    }

   //todo 遍历处理数据也就是拼接payload
   const x = []
     for(let i of diYaZhuZao){
            x.push(i['jiTai'])
     }
     const biaoLiang=[];
    const zhuZaoShu=[];
    const liangPinShu=[];
   for(let i of diYaZhuZao){
     biaoLiang.push(i.biaoLiang);
     zhuZaoShu.push(i.zhuZaoShu);
     liangPinShu.push(i.liangPinShu);
   }

 //返回视图
    return (
      <div style={{width:'100%',height:'100%',backgroundColor:'#2d1818'}}>
        <BoardHeader myurl={'武汉六丰WF1车间看板—生产状况'} myHeaderName={111}/>
        <br/>
        <hr style={{paddingLeft: '0.2%', paddingRight: '0.2%',position:'relative',top:'5px',border:'none',borderTop:'1px solid white',}}/>

        <div style={{background:'#2d1818',width:'100%',height:'81%'}}>
          <div style={{width:'100%',height:'25%'}}>
           <div style={{width:'25%',height:'100%',color:'yellow', float:'left'}}>
            <div style={{width:'50%',height:'100%',float:'left'}}>
             <Icon type="picture" theme="twoTone" style={{fontSize:'20vh',color:'white',background:'#A2F0E0'}}/>
            </div>
             <div style={{width:'50%',height:'100%',float:'left',marginLeft:'-30px',paddingTop:'30px'}}>
               <span style={{fontSize:'7vh'}}>{"14台"}</span>
               <br/>
               <span style={{fontSize:'2.5vh'}}>{"效率区间（60-100）"}</span>
             </div>
           </div>
            <div style={{width:'25%',height:'100%',color:'yellow',float:'left'}}>
              <div style={{width:'50%',height:'100%',float:'left'}}>
                <Icon type="picture" theme="twoTone" style={{fontSize:'20vh',color:'white',background:'#F0758A'}}/>
              </div>
              <div style={{width:'50%',height:'100%',float:'left',marginLeft:'-30px',paddingTop:'30px'}}>
                <span style={{fontSize:'7vh'}}>{"13台"}</span>
                <br/>
                <span style={{fontSize:'2.5vh'}}>{"效率区间（40-60）"}</span>
              </div>
            </div>
            <div style={{width:'25%',height:'100%',color:'yellow',float:'left'}}>

              <div style={{width:'50%',height:'100%',float:'left'}}>
                <Icon type="picture" theme="twoTone" style={{fontSize:'20vh',color:'white',background:'#F0EE58'}}/>
              </div>
              <div style={{width:'50%',height:'100%',float:'left',marginLeft:'-30px',paddingTop:'30px'}}>
                <span style={{fontSize:'7vh'}}>{"1台"}</span>
                <br/>
                <span style={{fontSize:'2.5vh'}}>{"效率区间（30-40）"}</span>
              </div>
            </div>
            <div style={{width:'25%',height:'100%',color:'yellow',float:'left'}}>

              <div style={{width:'50%',height:'100%',float:'left'}}>
                <Icon type="picture" theme="twoTone" style={{fontSize:'20vh',color:'white',background:'#4AD5F0'}}/>
              </div>
              <div style={{width:'50%',height:'100%',float:'left',marginLeft:'-30px',paddingTop:'30px'}}>
                <span style={{fontSize:'7vh'}}>{"0台"}</span>
                <br/>
                <span style={{fontSize:'2.5vh'}}>{"效率区间（0-30）"}</span>
              </div>
            </div>
          </div>

          <div style={{width:'100%',height:'75%'}}>
            <Card style={{width:'100%',height:'96%',background:'#2d1818'}} >
                   {/*<Col style={{marginTop:30}} span={6}>*/}
                     {/*{*/}
                       {/*(()=>{*/}
                         {/*let html=[]*/}
                         {/*//todo 遍历payload表数据和chart对象和chartName字符串的数组lala*/}
                         {/*payload.map((item,i)=>{*/}
                           {/*html.push(*/}
                             {/*<Table className='tuBiao' rowClassName={styles.background} dataSource={diYaZhuZao} columns={DiYaZhuZao} pagination={pagination}/>*/}
                           {/*)*/}
                         {/*})*/}
                         {/*return html*/}
                       {/*})()*/}
                     {/*}*/}
                  {/*</Col>*/}

                     {
                       (()=>{
                         let html =[]
                         // 判断显示的是什么类型的图表
                         if(type===1||type===3) {
                           console.log('柱状图或折线图')

                           //动态生成Option

                           let Option = {
                             legend: {
                               //图表示例--------------------------------Option.legend.data需遍历payload中xy属性中的ys属性生成
                               data:['机台运行效率','平均运行效率'],
                               textStyle:{
                                 color:'white'
                               }
                             },
                             //鼠标悬停提示
                             tooltip: {
                               trigger: 'axis',
                               axisPointer: {
                                 type: 'cross',
                                 crossStyle: {
                                   color: '#999'
                                 },
                                 label:{color:'black'}
                               }
                             },
                             //暂不清楚
                             toolbox: {
                               feature: {
                                 dataView: {show: true, readOnly: false},
                                 magicType: {show: true, type: ['line', 'bar']},
                                 restore: {show: true},
                                 saveAsImage: {show: true}
                               },
                             },
                             //x轴坐标--------------------------------Option.xAxis.data需根据payload中xy属性中的x属性动态生成
                             xAxis: [
                               {
                                 type: 'category',
                                 data:x,
                                 axisPointer: {
                                   type: 'shadow'
                                 },
                                 axisLine:{
                                   lineStyle:{
                                     color:'white'
                                   }
                                 }
                               }
                             ],
                             //y轴坐标--------------------------------需向Option.yAxis这个数组中放入对象（通过遍历payload中xy属性中的ys属性获取），最大最小值根据series中的数组生成
                             yAxis:[
                               {
                                 type: 'value',
                                 name: '效率(%)',
                                 min: 0,
                                 max: 100,
                                 interval: 50,
                                 axisLine:{
                                   lineStyle:{
                                     color:'white'
                                   }
                                 },
                               },
                               {
                                 type: 'value',
                                 name: '平均效率(%)',
                                 min: 0,
                                 max: 100,
                                 interval: 50,
                                 axisLine:{
                                   lineStyle:{
                                     color:'white'
                                   }
                                 },
                               },
                             ],
                             //y轴图形数据--------------------------------需向Option.series这个数组中放入对象（通过遍历payload中xy属性中的ys属性获取）
                             series: [
                               {
                                 name: '机台运行效率',
                                 type: 'bar',
                                 data:zhuZaoShu,
                               },
                               {
                                 name: '平均运行效率',
                                 type: 'line',
                                 data: biaoLiang,
                                 color:'yellow'
                               },
                             ]
                           }

                           html.push(
                             <ReactEcharts
                               style={{width:'100%',height:'400px',}}
                               option={Option}
                             />
                           );
                           console.log(Option.legend.data)
                           return html

                         }else if(type===2){
                           payload.map((item,i)=>{
                             html.push(
                             )
                           })
                         }
                         return html
                       })()
                     }
            </Card>
          </div>

      </div>
        <BoardFoot/>
      </div>
    )

   }
}

export default connect()(jiTaiXiaoLvKanBanWF1)

{/*遍历顶端卡片数据*/}
{/*{*/}
{/*(()=>{*/}
{/*//模拟顶端卡片数据*/}
{/*const monikapian=[*/}

{/*{*/}
{/*title: { name: '效率区间(60-100)' },*/}
{/*content: [{ name: '', value: 14 },*/}
{/*]*/}
{/*},*/}

{/*{*/}
{/*title: { name: '效率区间(40-60)' },*/}
{/*content: [{ name: '', value: 13 },*/}
{/*]*/}
{/*},*/}

{/*{*/}
{/*title: { name: '效率区间(30-40)' },*/}
{/*content: [{ name: '', value: 1 },*/}
{/*]*/}
{/*},*/}

{/*{*/}
{/*title: { name: '效率区间(0-30)' },*/}
{/*content: [{ name: '', value: 0 },*/}
{/*]*/}
{/*},*/}
{/*// {*/}
{/*//   title: { name: '10-熔解精炼' },*/}
{/*//   content: [{ name: '出汤数', value: '34(桶)' },*/}
{/*//     { name: '熔解铝(一次铝)', value: '40(T)' },*/}
{/*//     { name: '报废数', value: '40(EA)' },*/}
{/*//     { name: '报废数', value: '40(EA)' }*/}
{/*//   ]*/}
{/*// },*/}
{/*];*/}

{/*let html =[];*/}
{/*monikapian.map((item,i)=>{*/}
{/*html.push(*/}
{/*<div className={styles.background} style={{height:200,width:100/monikapian.length-1.1 +'%',float:'left',margin:10,border:'2px solid white',background:'black'}}>*/}
{/*<p style={{marginLeft:'3%',marginTop:'3%',fontSize:40}}>{item.title.name}</p>*/}
{/*{*/}
{/*(()=>{*/}
{/*let html = [];*/}
{/*item.content.map((item1,j)=>{*/}
{/*html.push(*/}
{/*<p style={{marginLeft:'10%',fontSize:30,height:100/(item.content.length)-25+'%'}} >{item1.name}:&nbsp;&nbsp;&nbsp;&nbsp;{item1.value}台</p>*/}
{/*)*/}
{/*})*/}
{/*return html*/}
{/*})()*/}
{/*}*/}
{/*</div>*/}
{/*)*/}
{/*return html*/}
{/*})*/}
{/*return html*/}
{/*})()*/}
{/*}*/}
