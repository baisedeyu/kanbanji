import React from 'react';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import { Table, Icon } from 'antd';
import { connect } from 'dva';
import './Rechuli.less';


@connect(({ rechulilu }) => ({ rechulilu }))
class Rechulilu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myurl: 'WF1工位看板——热处理炉生产状况',
      myHeaderName: '早班',
    };
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'rechulilu/fetchData',
    });
  }


  render() {

    const { tableData } = this.props.rechulilu;
    const widths = document.body.clientWidth;
    const tableData2 = [{ key1: '合计', key2: '合计', key3: '合计' ,key:'aaaaa'}, { key1: '标量', key2: '标量', key3: '标量' ,key:'vvvvv'}];
    const column = [
      {
        title: '读取中...',
        key: '1ke',
        children: [
          {
            title: '型式',
            width: '8.3%',
            key: '1pu',
            render: (text, record) => {
              const value = text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text;
              const obj = {
                children: value,
              };
              return obj;
            },
          },
          {
            title: '投入数',
            width: '12.5%',
            key: '2pu',
          },
          {
            title: '出炉数',
            width: '12.5%',
            key: '3pu',
          },
        ],
      }, {
        title: '读取中...',
        key: '2ke',
        children: [
          {
            title: '型式',
            width: '8%',
            key: '4pu',
          },
          {
            title: '投入数',
            width: '12.5%',
            key: '5pu',
          },
          {
            title: '出炉数',
            width: '12.5%',
            key: '6pu',
          },
        ],
      }, {
        title: '读取中...',
        key: '3ke',
        children: [
          {
            title: '型式',
            width: '8%',
            key: '7pu',
          },
          {
            title: '投入数',
            width: '12.5%',
            key: '8pu',
          },
          {
            title: '出炉数',
            width: '12.5%',
            key: '9pu',
          },
        ],
      },
    ];
    const column0 = () => {
      const data = column;
      tableData.map((item, index) => {
        data[index][`title`] = item['DISPLAYCODE'];
        data[index]['children'][0][`dataIndex`] = `${item['DISPLAYCODE']}MODEL`;
        data[index]['children'][1][`dataIndex`] = `${item['DISPLAYCODE']}SHIFTINPUT`;
        data[index]['children'][2][`dataIndex`] = `${item['DISPLAYCODE']}SHIFTOUT`;
      });
      return data;
    };
    const tabledata1 = () => {
      const data = [];
      for (let x = 0; x < 10; x++) {
        data.push({ key: `${x}rechuli` });
      }
      tableData.map((item, index) => {
        item[`lstOut`].map((items, indexs) => {
          if (indexs < 10) {
            data[indexs][`${items['DEVICESCODE']}MODEL`] = items[`MODEL`];
            data[indexs][`${items['DEVICESCODE']}SHIFTINPUT`] = items[`SHIFTINPUT`];
            data[indexs][`${items['DEVICESCODE']}SHIFTOUT`] = items[`SHIFTOUT`];
          }
        });
      });
      return data;
    };

    const column2 = [
      {
        title: 'key1',
        dataIndex: 'key1',
        width: '8.3%',
      },
      {
        title: '1#value1',
        dataIndex: '1#value1',
        width: '12.5%',
        render: (text, record) => {
          if (text === undefined) {
            return <div style={{ visibility: 'hidden' }}>1</div>;
          } else {
            return text;
          }
        },
      },
      {
        title: '1#value2',
        dataIndex: '1#value2',
        width: '12.5%',
        render: (text, record) => {
          if (text === undefined) {
            return <div style={{ visibility: 'hidden' }}>1</div>;
          } else {
            return text;
          }
        },
      },
      {
        title: 'key2',
        dataIndex: 'key2',
        width: '8.3%',
      },
      {
        title: '2#value1',
        dataIndex: '2#value1',
        width: '12.5%',
        render: (text, record) => {
          if (text === undefined) {
            return <div style={{ visibility: 'hidden' }}>1</div>;
          } else {
            return text;
          }
        },
      },
      {
        title: '2#value2',
        dataIndex: '2#value2',
        width: '12.5%',
        render: (text, record) => {
          if (text === undefined) {
            return <div style={{ visibility: 'hidden' }}>1</div>;
          } else {
            return text;
          }
        },
      },
      {
        title: 'key3',
        dataIndex: 'key3',
        width: '8.3%',
      },
      {
        title: '3#value1',
        dataIndex: '3#value1',
        width: '12.5%',
        render: (text, record) => {
          if (text === undefined) {
            return <div style={{ visibility: 'hidden' }}>1</div>;
          } else {
            return text;
          }
        },
      },
      {
        title: '3#value2',
        dataIndex: '3#value2',
        width: '12.5%',
        render: (text, record) => {
          if (text === undefined) {
            return <div style={{ visibility: 'hidden' }}>1</div>;
          } else {
            return text;
          }
        },
      },
    ];
    const tableDatas = () => {
      const data = tableData2;
      tableData.map((item, index) => {
        item['lstOut'].map((items, indexs) => {
           if (data[0].hasOwnProperty(`${index+1}#value1`)){
             data[0][`${index+1}#value1`]=data[0][`${index+1}#value1`]+items['SHIFTINPUT']
             data[0][`${index+1}#value2`]=data[0][`${index+1}#value2`]+items['SHIFTOUT']
           }else {
             data[0][`${index+1}#value1`]=items['SHIFTINPUT']
             data[0][`${index+1}#value2`] = items['SHIFTOUT'];
           }
          // if (data.hasOwnProperty(`${items['DEVICESCODE']}value1`)) {
          //   data[0][`1#value1`] = data[0][`1#value1`] + items['SHIFTINPUT'];
          //   data[0][`1#value2`] = data[0][`1#value2`] + items['SHIFTOUT'];
          // } else {
          //   data[0][`1#value1`] = items['SHIFTINPUT'];
          //   data[0][`1#value2`] = items['SHIFTOUT'];
          // }
        });
      });
      return data;
    };


    return (
      <div ref='fullscreen' style={{ background: '#2D1818', height: '100%' }}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}/>
        <br/>
        <hr style={{
          paddingLeft: '0.5%',
          paddingRight: '0.5%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%', width: '100%' }}>
          <div
            style={{ height: '83%', width: '100%', position: 'relative', paddingLeft: '0.2%', paddingRight: '0.2%' }}>
            <Table
              className='rechuli'
              columns={column0()}
              bordered
              dataSource={tabledata1()}
              pagination={false}/>
          </div>
          <div style={{ width: '100%', position: 'relative', paddingLeft: '0.2%', paddingRight: '0.2%' }}>
            <Table
              className='rechuli1'
              bordered
              pagination={false}
              columns={column2}
              showHeader={false}
              dataSource={tableDatas()}
            />
          </div>
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default Rechulilu;
