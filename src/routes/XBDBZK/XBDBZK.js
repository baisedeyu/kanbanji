import React from 'react';
import { connect } from 'dva';
import { Table, Col, Row } from 'antd';
import BoardHeader from '../../components/BoardHeader2/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import XBDBZKH from '../../components/XBDBZK/XBDBZKH';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markLine';

@connect(({ xbdbzk }) => ({
  xbdbzk,
}))
class XBDBZK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '武汉六丰WM1管理看板—各线效率看板',
      myHeaderName: '早班',
    };
  }


  doechart = ({ xiabiao, value,sum }) => {
    const average=(sum/value.length).toFixed(2)
    const averages=[]
    value.map(item=>averages.push(average))
    const myChart = echarts.init(document.getElementById('xbdbzkEcharts'));
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        show: false,
      },
      grid: {
        x: 85,
        y: 50,
        x2: 249,
        y2: 50,
      },
      legend: {
        show: true,
        data: ['机床运行效率', '平均运行效率'],
        right: 20,
        top: 220,
        orient:"vertical",
        itemWidth: 40,
        itemHeight:20,
        textStyle: {
          color: 'yellow',
          fontSize: 18,
        },
      },
      xAxis: [
        {
          type: 'category',
          data: xiabiao,
          axisPointer: {
            type: 'shadow',
          },
          axisLabel: {
            textStyle: {
              color: 'yellow',
              fontSize: 20,
              padding: [0, 12, 10, 10],
            },
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: 'white',
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            textStyle: {
              color: 'yellow',
              fontSize: 20,
              padding: [0, 12, 10, 10],
            },
            formatter: '{value} %',
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: 'white',
            },
          },
        },
      ],
      series: [
        {
          name: '机床运行效率',
          type: 'bar',
          barWidth: 45,
          data: value,
          itemStyle: {
            color: '#97be46',
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}%',
          },
          // markLine: {
          //   name: '平均运行效率',
          //   lineStyle: {
          //     color: '#4c9fe0',
          //     width: 4,
          //     type: 'dashed',
          //   },
          //   label: {
          //     formatter: '{c}%',
          //     // position:'middle',
          //     textStyle: {
          //       fontSize: 20,
          //     },
          //   },
          //   data: [
          //     {
          //       type: 'average',
          //       name: '平均运行效率',
          //     },
          //   ],
          // },
        },
        {
          name: '平均运行效率',
          type: 'line',
          data: averages,
          itemStyle: {
            color: '#3973a5',
          },
          lineStyle: {
            width: 4,
          },
        },


      ],
    });
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'xbdbzk/fetchData',
      doechart: this.doechart,
    });


  }

  render() {
    const { value } = this.props.xbdbzk;
    let value1 = 0;
    let value2 = 0;
    let value3 = 0;
    let value4 = 0;
    value.map(item => {
      if (item > 60 && item <= 100) {
        value1 += 1;
      }else if (item >40){
        value2 +=1
      } else if (item >30){
        value3 +=1
      } else {
        value4 +=1
      }
    });
    const img1 = require('../../assets/img/0-30.png');
    const img2 = require('../../assets/img/30-40.png');
    const img3 = require('../../assets/img/40-60.png');
    const img4 = require('../../assets/img/60-100.png');
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
        <div style={{ height: '84%', width: '100%', position: 'relative' }}>
          <div style={{ width: '100%', height: '17%' }}>
            <Row style={{ height: '100%' }}>
              <Col span={5} style={{ height: '100%' }}>
                {XBDBZKH({ img: img1, qujian: '60-100',value:value1 })}
              </Col>
              <Col span={5} style={{ height: '100%' }}>
                {XBDBZKH({ img: img2, qujian: '40-60',value:value2 })}
              </Col>
              <Col span={5} style={{ height: '100%' }}>
                {XBDBZKH({ img: img3, qujian: '30-40',value:value3 })}
              </Col>
              <Col span={5} style={{ height: '100%' }}>
                {XBDBZKH({ img: img4, qujian: '0-30',value:value4 })}
              </Col>
            </Row>
          </div>
          <div id="xbdbzkEcharts" style={{
            marginLeft: '10px',
            marginRight: '5px',
            height: '80%',
            width: '98%',
            border: '1px solid  white',
          }}/>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default XBDBZK;
