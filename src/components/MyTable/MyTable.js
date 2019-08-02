import React from 'react';
import axios from 'axios';


class MyTable extends React.Component {
  constructor(props){
    super(props)
    this.state={
      tableDataHeader:[],
    }
  }
  componentDidMount() {
    this.getdata();

  }

  getdata = () => {
    axios.get('http://192.168.99.80/EKanService/EKanService.svc/GetFUWMPRODUCTIONTEMP?ORGID=118&dspointcode=123')
      .then((response) => {
        // console.log(JSON.stringify(response.data.data))
        const mydata=response.data.data
        this.setState({
          tableDataHeader:mydata,
        })
      })
      .catch((error)=>{
        console.log(error)
      })
  };


  render() {
    const tableDataHeader = [
      '线别', '作业人员', '检查人员', '标量', '投入数', '良品数', '良率', '保养指示', '品质故障', '设备故障', '累计时间',
      '缺料指示', '状态运行', 'OEE',
    ];

    const tableData=this.state.tableDataHeader
    // const tableData=this.props.tableData
    return (
      <div style={{ height: '100%' }}>
        <table style={{ fontSize:'1.1vw' }}>
          <tbody>
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr1'>
                  <td style={{ color: 'white', fontWeight: 'bold' }}>{''}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td style={{ color: 'white' }}>{tableData[y].SYSID+'#'}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr2'>
                  <td style={{ color: 'white' }}>{tableDataHeader[1]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td>{tableData[y].OPUSER}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr3'>
                  <td style={{ color: 'white' }}>{tableDataHeader[2]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td>{tableData[y].CHECKUSER}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr4'>
                  <td style={{ color: 'white' }}>{tableDataHeader[3]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td>{tableData[y].SHIFTPOUT}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr5'>
                  <td style={{ color: 'white' }}>{tableDataHeader[4]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td>{tableData[y].SHIFTOUT}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr6'>
                  <td style={{ color: 'white' }}>{tableDataHeader[5]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td
                        style={{ color: (tableData[y].percentage >= 50 ? '' : 'red') }}>{tableData[y].ACHIEVINGRATE + '%'}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr7'>
                  <td style={{ color: 'white' }}>{tableDataHeader[6]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td>{tableData[y].DIFFERENCE}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr8'>
                  <td style={{ color: 'white' }}>{tableDataHeader[7]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td
                        style={{ backgroundColor: (tableData[y].abnormal == true ? '' : 'red') }}>{tableData[y].QSTATE}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr9'>
                  <td style={{ color: 'white' }}>{tableDataHeader[8]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td
                        style={{ backgroundColor: (tableData[y].fault == true ? '' : 'red') }}>{tableData[y].FSTATE}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr10'>
                  <td style={{ color: 'white' }}>{tableDataHeader[9]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td>{tableData[y].PSTATE}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr11'>
                  <td style={{ color: 'white' }}>{tableDataHeader[10]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td>{tableData[y].LOSTTIME}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr12'>
                  <td style={{ color: 'white' }}>{tableDataHeader[11]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td
                        style={{ backgroundColor: (tableData[y].indicate == true ? '' : 'red') }}>{tableData[y].LMGSTATE}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr3'>
                  <td style={{ color: 'white' }}>{tableDataHeader[12]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      html.push(<td>{tableData[y].OEE}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          {
            (() => {
              let html = [];
              html.push(
                <tr key='tr4'>
                  <td style={{ color: 'white' }}>{tableDataHeader[13]}</td>
                  {(() => {
                    let html = [];
                    for (let y = 0; y < tableData.length; y++) {
                      const x = tableData[y].runingState;
                      html.push(<td
                        style={{ backgroundColor: (x == true ? 'green' : '') }}>{tableData[y].RUNSTATE}</td>);
                    }
                    return html;
                  })()}
                </tr>,
              );
              return html;
            })()
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;

