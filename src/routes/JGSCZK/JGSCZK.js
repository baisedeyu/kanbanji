import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import BoardHeader from '../../components/BoardHeader2/BoardHeader';
import './JGSCZK.less';

@connect(({ jgsczk }) => ({ jgsczk }))
class Jgsczk extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'jgsczk/fetchData',
    });
  }

  render() {
    const { data, tableData } = this.props.jgsczk;
    const column = [{
      title: '线别',
      dataIndex: 'title',
      align: 'center',
      width: '10%',
      render: (text, record, index) => {
        const obj = {
          children: text,
          props: {
            style: {
              color: 'white',
            },
          },
        };
        return obj;
      },
    }];

    data.map((item, index) => {
      column.push({
        title: item[`DEVICESCODE`],
        dataIndex: item[`DEVICESCODE`],
        align: 'center',
        width: `${90 / data.length}%`,
        render: (text, record, indexs) => {
          const obj = {
            children: text,
            props: {
              style: {},
            },
          };
          if (indexs === 11) {
            obj.children = `${text}%`;
          }
          if (indexs === 12) {
            if (text === `正常`) {
              obj.props.style.background = `green`;
            } else {
              obj.props.style.background = `red`;
            }
          }
          return obj;
        },
      });
    });

    return (
      <div ref='fullscreen' style={{ background: '#2D1818', height: '100%' }}>
        <BoardHeader myurl={`武汉六丰WM1管理看板—生产信息看板`} myHeaderName={`111`}/>
        <br/>
        <hr style={{
          paddingLeft: '0.2%',
          paddingRight: '0.2%',
          position: 'relative',
          top: '5px',
          border: 'none',
          borderTop: '1px solid white',
        }}/>
        <div style={{ height: '84%', width: '100%', position: 'relative', padding: '2px 5px' }}>
          <Table
            bordered
            pagination={false}
            columns={column}
            dataSource={tableData}
            className='jgsczk'
          />
        </div>
        <BoardFoot/>
      </div>
    );
  }
}

export default Jgsczk;
