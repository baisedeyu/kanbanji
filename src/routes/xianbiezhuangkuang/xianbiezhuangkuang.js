import React from 'react';
import { Table, Row, Col } from 'antd';
import './xianbiezhuangkuang.less';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { connect } from 'dva/index';


@connect(({ xianbieshengchan }) => ({
  xianbieshengchan,
}))

class xianbiezhuangkuang extends React.Component {

  state = {
    buchong: true,
    // PageIndex: 1,
  };

  componentDidMount() {
    this.getData();
    // this.xianbieshengchan = setInterval(this.getData, 20000);
  }

  componentWillUnmount() {
    // clearInterval(this.xianbieshengchan);
  }

  getData = () => {
    const { dispatch } = this.props;
    const { PageIndex } = this.state;
    dispatch({
      type: 'xianbieshengchan/fetchData',
      // PageIndex,
    });
    // if (PageIndex === 1) {
    //   this.setState({
    //     PageIndex: 2,
    //   });
    // } else {
    //   this.setState({
    //     PageIndex: 1,
    //   });
    // }
  };

  render() {
    const { data } = this.props.xianbieshengchan;
    const data1 = data.slice(0, 20);
    const tableData = () => {
      const shumykey = [];
      const datas = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 10 }];
      for (let key in data[0]) {
        shumykey.push(key);
      }
      shumykey.splice(0, 1);
      shumykey.map((item, index) => {
        biaotou().map((items, indexs) => {
          datas[index][`${Object.keys(items)[0]}`] = data[indexs][item];
        });
      });
      const xianbie = ['当班标量', '生产型式', '当班产出', '达成率', '差异', '品质异常', '设备故障', '计划停机', '累计时间', '稼动率'];
      xianbie.map((item, index) => {
        datas[index]['xianbie'] = item;
      });
      return datas;

    };

    const biaotou = () => {
      const ddd = {};
      data.map((item, index) => {
        if (!ddd.hasOwnProperty(item.xianbie)) {
          ddd[item.xianbie] = 1;
        } else {
          ddd[item.xianbie] = ddd[item.xianbie] + 1;
        }
      });
      const dd = [];
      for (let key in ddd) {
        for (let x = 1; x <= ddd[key]; x++) {
          const a = `${key}${x}`;
          if (x > 1) {
            const a = `${key}${x}`;
            dd.push({ [a]: 0 });
          } else {
            const a = `${key}`;
            dd.push({ [a]: ddd[key] });
          }
        }
      }
      return dd;
    };
    //表头
    const column = (data = []) => {
      const tableColumn = [];
      tableColumn.push({
        title: '线别',
        dataIndex: 'xianbie',
        key: 'xianbie',
        align: 'center',
        width: '9%',
        render: (text, record, index) => <div style={{ color: 'white' }}>{text}</div>,
      });
      biaotou().map((item, index) => {
        tableColumn.push({
          title: <div style={{ color: 'yellow' }}>{`${Object.keys(item)[0]}`}</div>,
          dataIndex: `${Object.keys(item)[0]}`,
          align: 'center',
          colSpan: item[`${Object.keys(item)[0]}`],
          width: '6.5%',
          render: (text, record, index) => {
            let data;
            if (index === 3) {
              if (text === 0) {
                data = '0%';
              } else {
                let str = Number(text * 100).toFixed(0);
                str += '%';
                data = str;
              }
            } else {
              data = text;
            }

            const obj = {
              children: data,
              props: {
                style: {
                  color: 'yellow',
                },
              },
            };
            if (index !== 1 && index !== 2) {
              obj.props.colSpan = item[`${Object.keys(item)[0]}`];
            }
            return obj;
          },
        });
      });

      // data.map(item=>{
      //   tableColumn.push(
      //     {
      //       title:`${item.xianbie}`,
      //       align:'center',
      //       dataIndex:`${item.xianbie}`,
      //       key:`${item.xianbie}`,
      //       render:(text,record,index)=>{
      //         if(index===3){
      //           if(text<'50%'){
      //             return(
      //               <div style={{color:'red'}}>{text}</div>
      //             )
      //           }
      //           return(
      //           <div style={{color:'green'}}>{text}</div>
      //           )
      //         }else if(index===9){
      //           return(
      //             <div style={{color:'green'}}>{text}</div>
      //           )
      //         }else {
      //           return(
      //             <div style={{color:'yellow'}}>{text}</div>
      //           )
      //         }
      //       }
      //     })
      // });
      return tableColumn;
    };

    console.log(tableData(data1))
    // const biaocolor=()=>{
    //   let obj = document.getElementsByTagName("th");
    //   for (let i = 0; i < obj.length; i++) {
    //     obj[i].style.fontSize = '5.0vh';
    //   }
    // };
    // biaocolor();
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#2d1818' }}>
        <BoardHeader myurl={'武汉六丰WF1车间看板—生产状况'} myHeaderName={111}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%' }}>
          <div style={{ width: '100%', paddingTop: '10px' }}>
            <Table
              className='yourClass'
              dataSource={tableData(data1)}
              columns={column(data1)}
              pagination={false}
              bordered={true}
            />
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default xianbiezhuangkuang;
