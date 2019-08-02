import React from 'react';
import { Table, Row, Col } from 'antd';
import styles from '../Ling3/Ling3.css';
import './Ling3.less';

class Ling3 extends React.Component {
  render() {

    //表格单个单元格背景颜色变更
    // for( let d of document.getElementsByClassName('d')){
    //   d.parentNode.style.background = 'red';
    //   d.parentNode.style.fontSize="40px";
    // }
    const data = this.props.data.data;

    const column1 = () => {
      const Coo = data.length;
      const Cwidth = `${(100 - 16) / Coo}%`;
      // 第一列的数据
      const c1 = [];
      if (data.length === 0) {
        return [];
      } else {
        data.map(item => {
          if (c1.indexOf(item.ATTRIBUTE1) === -1) {
            c1.push(item.ATTRIBUTE1);
          }
        });
      }

      // 表头数据
      const c2 = [
        {
          title: '',
          dataIndex: 'wendutishi',
          key: 'wendutishi',
          width: '11%',
          render: (text, record) => <div style={{ color: 'white' }}>{text}</div>,
        },
      ];
      c1.map((item, index) => {
        c2.push(
          {
            title: `${item}`,
            children: [
              {
                title: '标准',
                dataIndex: `${item}biaozhunvalue`,
                key: `${item}biaozhunvalue`,
                width: Cwidth,
                render: (text, record, index) => {
                  if (index === 0) {
                    const obj = {
                      children: <div style={{ color: 'white' }}>{text}</div>,
                      props: {
                        colSpan: 2,
                        style: {
                          backgroundColor: text === '离线' ? 'red' : null,
                          color: 'white',
                        },
                      },
                    };
                    return obj;
                  } else {
                    return <div style={{ color: '#C9C9C9' }}>{text}</div>;
                  }

                },
              }, {
                title: '实际',
                dataIndex: `${item}shijivalue`,
                key: `${item}shijivalue`,
                width: Cwidth,
                render: (text, record, index) => {
                  const ddd = () => {
                    if (text === null) {
                      return text
                    } else {
                      return text
                    }
                  };
                  const background = (parseInt(text) > parseInt(record[`${item}shangbiao`]) | parseInt(text) < parseInt(record[`${item}xiabiao`])) ? `red` : null;
                  const obj = {
                    children: ddd(),
                    props: {
                      colSpan: index === 0 ? 0 : 1,
                      style: {
                        background,
                        color:`yellow`
                      },
                    },
                  };
                  return obj;
                },
              },
            ],
          },
        );
      });
      return c2;
    };

    // const tableData1 = () => {
    //   const ddd = [{}, {}, {}, {}];
    //   const ccc = { wendutishi: '设备状态' };
    //   data.map((item, index) => {
    //     if (!ccc.hasOwnProperty(`${item.ATTRIBUTE1}biaozhunvalue`)) {
    //       ccc[`${item.ATTRIBUTE1}biaozhunvalue`] = item.DEVICESTATUS;
    //     }
    //     if (!ccc.hasOwnProperty(`${item.ATTRIBUTE1}shijivalue`)) {
    //       ccc[`${item.ATTRIBUTE1}shijivalue`] = item.DEVICESTATUS;
    //     }
    //     const count = index % 3;
    //     ddd[count + 1][`${item.ATTRIBUTE1}biaozhunvalue`] = item.STANDARDVALUE;
    //     ddd[count + 1][`${item.ATTRIBUTE1}shijivalue`] = item.ACTVALUE;
    //     ddd[count + 1]['wendutishi'] = item.TAGDESC;
    //     ddd[count + 1][`${item.ATTRIBUTE1}xiabiao`] = item.MINVALUE;
    //     ddd[count + 1][`${item.ATTRIBUTE1}shangbiao`] = item.MAXVALUE;
    //   });
    //   ddd[0] = ccc;
    //   return ddd;
    // };
    const tableData1 = () => {
      const d = {};
      const ccc = { wendutishi: '设备状态' };
      data.map((item, index) => {
        if (!ccc.hasOwnProperty(`${item.ATTRIBUTE1}biaozhunvalue`)) {
          ccc[`${item.ATTRIBUTE1}biaozhunvalue`] = item.DEVICESTATUS;
        }
        if (!ccc.hasOwnProperty(`${item.ATTRIBUTE1}shijivalue`)) {
          ccc[`${item.ATTRIBUTE1}shijivalue`] = item.DEVICESTATUS;
        }
        if (d.hasOwnProperty(item.COLUMNNAME)) {
          d[item.COLUMNNAME][`${item.ATTRIBUTE1}biaozhunvalue`] = item.STANDARDVALUE,
            d[item.COLUMNNAME] [`${item.ATTRIBUTE1}shijivalue`] = item.ACTVALUE,
            d[item.COLUMNNAME] [`${item.ATTRIBUTE1}xiabiao`] = item.MINVALUE,
            d[item.COLUMNNAME] [`${item.ATTRIBUTE1}shangbiao`] = item.MAXVALUE;
        } else {
          d[item.COLUMNNAME] = {
            key: `${index}value`,
            wendutishi: item.TAGDESC,
            [`${item.ATTRIBUTE1}biaozhunvalue`]: item.STANDARDVALUE,
            [`${item.ATTRIBUTE1}shijivalue`]: item.ACTVALUE,
            [`${item.ATTRIBUTE1}xiabiao`]: item.MINVALUE,
            [`${item.ATTRIBUTE1}shangbiao`]: item.MAXVALUE,
          };
        }
      });
      ccc.key = 'zhuangtai';
      const da = [ccc];
      for (let key in d) {
        if (key !== 'R_YM_HEIGHT' && key !== 'R_YM_MAX') {
          da.push(d[key]);
        }
      }
      console.log(d)
      const data2 = { R_YM_HEIGHT: d['R_YM_HEIGHT'], R_YM_MAX: d['R_YM_MAX'] };
      console.log(data2)
      return { table1: da, table2: data2 };
    };

    //1.看板上半部分
    //原始数据数据
   

    //表头字体大小变化
    // const biaocolor=()=>{
    //   let obj = document.getElementsByTagName("th");
    //   // console.log(obj)
    //   for (let i = 0; i < obj.length; i++) {
    //     obj[i].style.fontSize = 'xx-large';
    //   }
    // };
    // biaocolor();

    //处理表格表头，确定列数
    const biaotou = (data) => {
      let count = Math.ceil(data.length / 3);//确定列数
      // console.log(data)
      // console.log(Math.ceil(data.length/3))
      let Lwidth = Math.floor(90 / (count * 2));//确定列宽

      let columns1 = [
        {
          title: '',
          dataIndex: 'ITEMNM',
          key: 'ITEMNM',
          width: 400,
          align: 'center',
          render: (text, record) => <div className={styles.rowcolor1}>{text}</div>,
        },
      ];
      for (let i = 1; i <= count; i++) {
        columns1.push({
          title: i + '#',
          children: [
            {
              title: '标准',
              dataIndex: 'STD' + i,
              key: 'STD' + i,
              align: 'center',
              // width: Lwidth + '%',
              render: (text, record) => <div className={styles.rowcolor1}>{text}</div>,
            },
            {
              title: '实际',
              dataIndex: 'RDATA' + i,
              key: 'RDATA' + i,
              align: 'center',
              // width: Lwidth + '%',
              render: (text, record) =>
                ((text) <= (parseInt(record['STD' + i].split('±')[0]) - parseInt(record['STD' + i].split('±')[1])) || ((text) >= parseInt(record['STD' + i].split('±')[0]) + parseInt(record['STD' + i].split('±')[1]))) ?
                  <div className={styles.rowcolor3}>{text}</div> : <div className={styles.rowcolor2}>{text}</div>,
            },
          ],
        });
      }
      //炉号确认
      for (let i = 1, j = 0; i < columns1.length; i++, j = j + 3) {
        // console.log(data[j].LH,'LH')
        columns1[i].title = data[j].LH;
      }
      return columns1;
    };


    //处理获取的数据，使其横向显示
    // const chuli = (data)=> {
    //   const T1=[
    //     {
    //       ITEMNM:'出汤口温度',
    //     },
    //     {
    //       ITEMNM:'静止室温度',
    //     },
    //     {
    //       ITEMNM:'扒渣提醒',
    //     }
    //   ];
    //   for(let k=0;k<T1.length;k++){
    //     for(let j=k,s=1;s<=data.length/3;j=j+3,s++){
    //       T1[k]['STD'+s] =data[j].STD;
    //       T1[k]['RDATA'+s]=data[j].RDATA;
    //     }
    //   }
    //   // console.log(T1,3333333)
    //   return T1;
    // };

    //2.看板液位部分
    //1)原始数据
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{ width: '100%', height: '50%' }}>
          <Table
            className='rongjielu'
            columns={column1()}
            dataSource={tableData1().table1}
            bordered
            pagination={false}
          />
          {/*<Table dataSource={chuli(data1)}*/}
          {/*columns={biaotou(data1)}*/}
          {/*bordered*/}
          {/*size={'middle'}*/}
          {/*rowClassName={styles.rowcolor1}*/}
          {/*pagination={false}*/}
          {/*/>*/}
        </div>
        <hr style={{ color: 'white' }}/>
        {/*液位提醒*/}
        <div style={{ background: 'black', width: '100%', height: '46%' }}>
          <div style={{
            border: '1px solid white',
            width: '24.6%',
            height: '100%',
            float: 'left',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <div style={{ fontSize: '6vh', fontWeight: '800', color: 'white' }}>
              液位提醒
            </div>
          </div>
          {
            (() => {
              const data = [];
              const d = tableData1()['table2'].R_YM_HEIGHT;
              const e = tableData1()['table2'].R_YM_MAX;
              console.log(tableData1())
              for (let key in d) {
                if (key.search('shijivalue') !== -1) {
                  data.push({ height: d[key], max: e[key] });
                }
              }
              const html = [];
              data.map((item, index) => {
                const pix = () => {
                  if (item.height === null) {
                    return '0%';
                  } else if (item.height[0] === '-') {
                    return '0%';
                  } else {
                    return parseInt(item.height / item.max * 100) + '%';
                  }
                };
                html.push(
                  <div key={`${index}ccc`} style={{
                    border: '1px solid white',
                    width: '25.1%',
                    height: '100%',
                    float: 'left',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                    <div style={{ width: '70%', height: '80%' }}>
                      <div style={{
                        position: 'relative',
                        border: '5px solid white',
                        background: 'black',
                        width: '70%',
                        height: '100%',
                        float: 'left',
                      }}>
                        <div style={{
                          width: '100%',
                          height: pix(),
                          background: 'red',
                          position: 'absolute',
                          bottom: 0,
                        }}/>
                      </div>
                      <div style={{
                        color: 'yellow',
                        fontWeight: '600',
                        fontSize: '5vh',
                        width: '30%',
                        height: '100%',
                        float: 'left',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                        {pix()}
                      </div>
                    </div>
                  </div>,
                );
              });
              return html;
            })()
          }

        </div>

      </div>
    );
  }
}

export default Ling3;
