import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import BoardHeader from '../../components/BoardHeader2/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './ZhuZaoSLDBFX.less';


@connect(({ zhuzaoshuliangduibifenxi }) => ({
  zhuzaoshuliangduibifenxi,
}))
class ZhuZaoSLDBFX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '武汉六丰WF1管理看板—铸造数量比对分析',
      PageIndex: 1,
    };
  }

  componentDidMount() {
    this.getData();
    // this.zzsldbfx = setInterval(this.getData, 20000);
  }

  componentWillUnmount() {
    // clearInterval(this.zzsldbfx);
  }

  accSub = (arg1, arg2) => {
    let r1, r2, m, n;
    try {
      r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  };

  getData = () => {
    const { dispatch } = this.props;
    // const {PageIndex}=this.state
    dispatch({
      type: 'zhuzaoshuliangduibifenxi/fetchData',
    });
    // if (PageIndex===1){
    //   this.setState({
    //     PageIndex:2
    //   })
    // } else {
    //   this.setState({
    //     PageIndex:1
    //   })
    // }
  };

  componentDidUpdate() {
    const { tubiaoshuju } = this.props.zhuzaoshuliangduibifenxi;
    var myChart = echarts.init(document.getElementById('echarts'));
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        right: 102,
        left: 198,
        bottom: 5,
      },
      xAxis: [
        {
          type: 'category',
          show: false,
          data: tubiaoshuju.DEVICENAME,
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '铸造个数',
          nameLocation: 'center',
          min: 0,
          max: 300,
          interval: 50,
          axisLabel: {
            textStyle: {
              color: 'yellow',
              fontSize: 20,
              padding: [0, 12, 10, 10],
            },
          },
          nameTextStyle: {
            color: 'yellow',
            fontSize: 20,
            padding: 50,
          },
          axisLine: {
            lineStyle: {
              color: 'white',
            },
          },
        },
        {
          type: 'value',
          min: 0,
          max: 100,
          interval: 20,
          axisLabel: {
            formatter: '{value}.00%',
            textStyle: {
              color: 'yellow',
              fontSize: 20,
              padding: [0, 0, 12, 0],
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            lineStyle: {
              color: 'white',
            },
          },
          axisLine: {
            lineStyle: {
              color: 'white',
            },
          },
        },
      ],
      series: [
        {
          name: '铸造个数',
          type: 'bar',
          data: tubiaoshuju.ACTOUTPUT,
          barWidth: '50',
          itemStyle: {
            color: '#00b050',
          },
        },
        {
          name: 'Xray良品数',
          type: 'line',
          data: tubiaoshuju.XRAYOUT,
          itemStyle: {
            color: '#92b251',
          },
          lineStyle: {
            width: 4,
          },
        },
        {
          name: '良率',
          type: 'line',
          yAxisIndex: 1,
          data: (()=>{
            const data=[...tubiaoshuju.XRAYOKRATE,]
            const data2=[]
            data.map(item=>{
              data2.push(this.accSub(100, parseFloat(item)) === '100' ? '0' : this.accSub(100, parseFloat(item)))
            })
            return data2
          })(),
          itemStyle: {
            color: '#4473ab',
          },
          lineStyle: {
            width: 4,
          },
          label: {

            // normal:{
            //
            //   show:true,
            //   color:'yellow',
            //   position:'right',
            //   formatter:function(a) {
            //     console.log(a.data)
            //   },
            // }
          },
        },
      ],
    });
  }

  render() {
    const tables = this.props.zhuzaoshuliangduibifenxi.tableData;
    const tubiaosj = this.props.zhuzaoshuliangduibifenxi.tubiaoshuju;
    const column = () => {
      const dd = [{
        title: '',
        dataIndex: 'gongxu',
        width: 100,
        align:'left',
        render: (text, record, index) => {
          const obj = {
          };
          if (index===0){
            obj.children=<div style={{
              width:'100%',
              display:"flex",
              // justifyContent:'center',
              alignItems:'center'
            }}>
              <div style={{width:'20px',height:"10px",background:'#00b050'}}/><span style={{paddingLeft:"5px"}}>{text}</span>
            </div>
          } else if (index===1){
            obj.children=<div style={{
              width:'100%',
              display:"flex",
              // justifyContent:'center',
              alignItems:'center'
            }}>
              <div style={{width:'20px',height:"3px",background:'#92b251'}}/><span style={{paddingLeft:"5px"}}>{text}</span>
            </div>
          }else if (index===2){
            obj.children=<div style={{
              width:'100%',
              display:"flex",
              // justifyContent:'center',
              alignItems:'center'
            }}>
              <div style={{width:'20px',height:"3px",background:'#4473ab'}}/><span style={{paddingLeft:"5px"}}>{text}</span>
            </div>
          }
          return obj;
        },
      },

      ];
      if (Object.keys(tubiaosj).length > 0) {
        tubiaosj.DEVICENAME.map((item, index) => {
          dd.push({
            title: item,
            dataIndex: item,
            width: '6.5%',
            render: (text, record, index) => {
              if (index === 2) {
                const x = this.accSub(100, parseFloat(text)) === '100' ? '0' : this.accSub(100, parseFloat(text));
                return `${x}%`;
              } else {
                return text;
              }
            },
          });
        });
      }
      return dd;
    };


    return (
      <div style={{ height: '100%', backgroundColor: '#2d1818' }}>
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
        <div style={{
          height: '84%',
          width: '100%',
          position: 'relative',
          paddingLeft: '0.3%',
          paddingRight: '0.3%',
          background: '#2d1818',
        }}>
          <div id="echarts" style={{ width: '100%', height: '79%' }}/>
          <div style={{ width: '94.8%', height: '20%', paddingLeft: '30px' }}>
            <Table dataSource={tables} className='zhuzaosldbfx' columns={column()} bordered pagination={false}/>
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default ZhuZaoSLDBFX;

