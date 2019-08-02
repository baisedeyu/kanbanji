import React, { Component } from 'react';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import ReactEcharts from 'echarts-for-react';
import { Table } from 'antd'
import './index.less'


const data = [
    {
        Model: 'Q35',
        OnHand: 12000,
        SafeQty: 8000,
        MaxQty: 18000
    }, {
        Model: 'Q34',
        OnHand: 12000,
        SafeQty: 10000,
        MaxQty: 17000
    }, {
        Model: 'Q33',
        OnHand: 13000,
        SafeQty: 11000,
        MaxQty: 19000
    }, {
        Model: 'Q32',
        OnHand: 18000,
        SafeQty: 12000,
        MaxQty: 18621
    }, {
        Model: 'Q31',
        OnHand: 11000,
        SafeQty: 9000,
        MaxQty: 15000
    }, {
        Model: 'Q30',
        OnHand: 8000,
        SafeQty: 8000,
        MaxQty: 16900
    }, {
        Model: 'Q29',
        OnHand: 9000,
        SafeQty: 1000,
        MaxQty: 21000
    }, {
        Model: 'Q28',
        OnHand: 9500,
        SafeQty: 8989,
        MaxQty: 19500
    }, {
        Model: 'Q27',
        OnHand: 7400,
        SafeQty: 11111,
        MaxQty: 19999
    }, {
        Model: 'Q26',
        OnHand: 9633,
        SafeQty: 4500,
        MaxQty: 4700
    }, {
        Model: 'Q25',
        OnHand: 8888,
        SafeQty: 8000,
        MaxQty: 16700
    }, {
        Model: 'Q24',
        OnHand: 4555,
        SafeQty: 4000,
        MaxQty: 18000
    }, {
        Model: 'Q23',
        OnHand: 6000,
        SafeQty: 3000,
        MaxQty: 18888
    }, {
        Model: 'Q22',
        OnHand: 7140,
        SafeQty: 12000,
        MaxQty: 15000
    }, {
        Model: 'Q21',
        OnHand: 6933,
        SafeQty: 11000,
        MaxQty: 12000
    }, {
        Model: 'Q20',
        OnHand: 7777,
        SafeQty: 10000,
        MaxQty: 14000
    }, {
        Model: 'Q19',
        OnHand: 5555,
        SafeQty: 3000,
        MaxQty: 14500
    }, {
        Model: 'Q18',
        OnHand: 17777,
        SafeQty: 4000,
        MaxQty: 13500
    },
]

class ChengPinKanBan extends Component {
    state = {}
    render() {

        const column = [
            {
                title: "型式",
                dataIndex: "Model",
                render: (text, record) => text === '' ? <div style={{ visibility: 'hidden' }}>1</div> : <div>{text}</div>
            }, {
                title: "C(EA)",
                dataIndex: 'OnHand'
            }, {
                title: 'S(EA)',
                dataIndex: "SafeQty"
            }, {
                title: "U(EA)",
                dataIndex: "MaxQty"
            }
        ]

        // x轴刻度
        const xData = []
        data.map(item => xData.push(item[`Model`]))

        // C(EA)
        const seriesData1 = []
        data.map(item => seriesData1.push(item[`OnHand`]))

        // S(EA)
        const seriesData2 = []
        data.map(item => seriesData2.push(item[`SafeQty`]))

        // U(EA)
        const seriesData3 = []
        data.map(item => seriesData3.push(item[`MaxQty`]))

        // y轴刻度最大刻度
        let yData = 0
        const seriesData = [...seriesData1, ...seriesData2, ...seriesData3]
        if (seriesData.length !== 0) {
            yData = seriesData.reduce((a, b) => {
                return b > a ? b : a
            })
        }

        console.log(yData)



        const option = {
            title: {
                text: '当前成品库存',
                textStyle: {
                    color: 'white'
                }
            },
            grid: {
                left: '4%',
                right: '2%',
                top: '5%',
                bottom: '7%'
            },
            legend: {
                data: ['C(EA)', 'S(EA)', 'U(EA)'],
                textStyle: {
                    color: "white"
                }
            },

            xAxis: {
                type: 'category',
                // boundaryGap: false,
                data: xData,
                nameTextStyle: {},
                axisLabel: {
                    color: "white",
                    interval: 0,
                    // rotate: "45",
                    textStyle: {
                        fontSize: 15
                    }

                },
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    // formatter: '{value} °C',
                },
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                // 最大刻度
                max: yData*1.2
            },
            series: [
                {
                    name: 'C(EA)',
                    type: 'bar',
                    data: seriesData1,
                    barGap: 0,
                    itemStyle: {
                        normal: {
                            color: '#70AD47',
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: "white"
                                }
                            }
                        }
                    },
                    // barWidth: 30,
                }, {
                    name: 'S(EA)',
                    type: 'line',
                    data: seriesData2,
                    itemStyle: {
                        normal: {
                            color: '#63A3E0',
                        }
                    },
                    // barWidth: 30,
                }, {
                    name: 'U(EA)',
                    type: 'line',
                    data: seriesData3,
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    },
                },
            ]
        }


        return (
            <div ref='fullscreen' style={{ width: '100%', height: '100%', backgroundColor: '#2d1818' }}>
                <BoardHeader myurl={`武汉六丰仓库——成品看板`} myHeaderName={`武汉六丰WF1工位看板——成品看板`} />
                <br />
                <div className="cpkb" style={{ width: '100%', height: '84%', paddingLeft: "5px" }}>
                    <hr style={{ paddingLeft: '0.2%', paddingTop: "5px", paddingRight: '0.2%', position: 'relative', top: '5px', border: 'none', borderTop: '1px solid white', }} />
                    <div style={{ width: "25%", float: "left" }}>
                        <Table dataSource={data} columns={column} bordered pagination={false} />
                    </div>
                    <div style={{ width: "75%", float: "left",height:"100%" }}>
                        <ReactEcharts
                            option={option}
                            style={{ height: '100%', width: '98%' }}
                        />
                    </div>
                </div>
                <BoardFoot />
            </div >
        );
    }
}

export default ChengPinKanBan;