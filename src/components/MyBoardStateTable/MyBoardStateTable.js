import React, { Component } from 'react';
import styles from './MyBoardStateTable.css';
// 调用models的js => 箭头函数 相当于Function
export default class BaWstates extends Component {
  render() {
    const scalarsd=this.props.scalarsd1;
    const count=scalarsd.length;
    const tableHeader=['当班标量','即使标量','累计标量','落后','稼动率']
    return (
      <div style={{ backgroundColor: '#2d1818', width: '100%', height: '87%' }}>
        {
          (() => {
            let html = [];
            for (let i = 0; i < count; i++) {
              if (i === 0) {
                html.push(
                  <div style={{ width: '50%', height: '50%',float:'left',backgroundColor: '#2d1818'}} key={'bstate1'} >
                    <div style={{float:'left',height:'100%',width:'50%',position:'relative'}}>
                      <img src={require('../../assets/5-6.png')} style={{top:'5%',left:'8%',float:'left',position:'absolute',width:'85%',height:'90%'}}></img>
                      <h3 style={{ color: '#ffff00',float:'right',top:'5%',right:'7%',position:'absolute',fontSize:'3vw' }}>{scalarsd[i].SYSID+'#'}</h3>
                      <div style={{ height: '10%', width: '21%', backgroundColor: '#33CC00',float:'right',position:'absolute',
                      bottom:'10%',right:'10%',color:'#f7f7f7',fontSize:'1.3vw'}}
                           ><b>生产中</b>
                      </div>
                    </div>
                    <div style={{ width: '45%', height: '70%',float:'right',position:'relative',top:'18%',left:'-5%' }}>
                      <table style={{ width: '100%', height: '100%', color: 'yellow', fontSize: '1.8vw' }}>
                        <tbody>
                        <tr key={`table11${i}`}>
                          <td style={{color:'white'}}>{tableHeader[0]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].SHIFTPOUT}</td>
                        </tr>
                        <tr key={`table12${i}`}>
                          <td style={{color:'white'}}>{tableHeader[1]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].SHIFTOUT}</td>
                        </tr>
                        <tr key={`table13${i}`}>
                          <td style={{color:'white'}}>{tableHeader[2]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].TOTALOUT}</td>
                        </tr>
                        <tr key={`table14${i}`}>
                          <td style={{color:'white'}}>{tableHeader[3]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].BACKWARD}</td>
                        </tr>
                        <tr key={`table15${i}`}>
                          <td style={{color:'white'}}>{tableHeader[4]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].UTILIZATIONRATE}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>,
                );
              }
              if (i === 2) {
                html.push(
                  <div style={{ width: '50%', height: '50%' ,float:'left',backgroundColor: '#2d1818'}}key={'bstate2'}>
                    <div className={styles.ibox}>
                      <a href='javascript:;'><img src={require('../../assets/5-6.png')} className={styles.leftimg}></img></a>
                      <h3 className={styles.leftFont} style={{ color: '#ffff00' }}>{scalarsd[i].SYSID+'#'}</h3>
                      <div style={{ height: '10%', width: '21%', backgroundColor: '#33CC00' }}
                           className={styles.leftFlat}> <b>生产中</b>
                      </div>
                    </div>
                    <div style={{ width: '45%', height: '70%' }} className={styles.sdiv3}>
                      <table style={{ width: '100%', height: '100%', color: 'yellow', fontSize: '1.8vw' }}>
                        <tbody>
                        <tr key={`table21${i}`}>
                          <td style={{color:'white'}}>{tableHeader[0]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].SHIFTPOUT}</td>
                        </tr>
                        <tr key={`table22${i}`}>
                          <td style={{color:'white'}}>{tableHeader[1]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].SHIFTOUT}</td>
                        </tr>
                        <tr key={`table23${i}`}>
                          <td style={{color:'white'}}>{tableHeader[2]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].TOTALOUT}</td>
                        </tr>
                        <tr key={`table24${i}`}>
                          <td style={{color:'white'}}>{tableHeader[3]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].BACKWARD}</td>
                        </tr>
                        <tr key={`table25${i}`}>
                          <td style={{color:'white'}}>{tableHeader[4]}</td>
                          <td style={{textAlign:'left'}}>{scalarsd[i].UTILIZATIONRATE}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>,
                );
              }
              if (i === 1) {
                html.push(
                  <div style={{ width: '50%', height: '50%' ,float:'right',backgroundColor: '#2d1818'}} className={styles.div3}key={'bstate3'}>
                    <div className={styles.ibox2}>
                      <a href='javascript:;'><img src={require('../../assets/7-8.png')} className={styles.leftimg}></img></a>
                      <h3 className={styles.leftFont2} style={{ color: '#ffff00' }}>{scalarsd[i].SYSID+'#'}</h3>
                      <div style={{ height: '10%', width: '21%', backgroundColor: '#33CC00' }}
                           className={styles.leftFlat}><b>生产中</b>
                      </div>
                    </div>
                    <div style={{ width: '45%', height: '70%' }} className={styles.sdiv2}>
                      <table style={{ width: '100%', height: '100%', color: 'yellow', fontSize: '1.8vw' }}>
                        <tbody>
                        <tr key={`table31${i}`} >
                          <td style={{width:'44%',textAlign:'right'}}>{scalarsd[i].SHIFTPOUT}</td>
                          <td style={{color:'white'}}>{tableHeader[0]}</td>
                        </tr>
                        <tr key={`table32${i}`}>
                          <td style={{textAlign:'right'}}>{scalarsd[i].SHIFTOUT}</td>
                          <td style={{color:'white'}}>{tableHeader[1]}</td>
                        </tr>
                        <tr key={`table33${i}`}>
                          <td style={{textAlign:'right'}}>{scalarsd[i].TOTALOUT}</td>
                          <td style={{color:'white'}}>{tableHeader[2]}</td>
                        </tr>
                        <tr key={`table34${i}`}>
                          <td style={{textAlign:'right'}}>{scalarsd[i].BACKWARD}</td>
                          <td style={{color:'white'}}>{tableHeader[3]}</td>
                        </tr>
                        <tr key={`table35${i}`}>
                          <td style={{textAlign:'right'}}>{scalarsd[i].UTILIZATIONRATE}</td>
                          <td style={{color:'white'}}>{tableHeader[4]}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>,
                );
              }
              if (i === 3) {
                html.push(
                  <div style={{ width: '50%', height: '50%',float:'right',backgroundColor: '#2d1818' }} className={styles.div4}key={'bstate4'}>
                    <div className={styles.ibox2}>
                      <a href='javascript:;'><img src={require('../../assets/7-8.png')} className={styles.leftimg}></img></a>
                      <h3 className={styles.leftFont2} style={{ color: '#ffff00' }}>{scalarsd[i].SYSID+'#'}</h3>
                      <div style={{ height: '10%', width: '21%', backgroundColor: '#33CC00' }}
                           className={styles.leftFlat}><b>生产中</b>
                      </div>
                    </div>
                    <div style={{ width: '45%', height: '70%' }} className={styles.sdiv2}>
                      <table style={{ width: '100%', height: '100%', color: 'yellow', fontSize: '1.8vw' }}>
                        <tbody>
                        <tr key={`table41${i}`}>
                          <td style={{width:'44%',textAlign:'right'}}>{scalarsd[i].SHIFTPOUT}</td>
                          <td style={{color:'white'}}>{tableHeader[0]}</td>
                        </tr>
                        <tr key={`table42${i}`}>
                          <td style={{textAlign:'right'}}>{scalarsd[i].SHIFTOUT}</td>
                          <td style={{color:'white'}}>{tableHeader[1]}</td>
                        </tr>
                        <tr key={`table43${i}`}>
                          <td style={{textAlign:'right'}}>{scalarsd[i].TOTALOUT}</td>
                          <td style={{color:'white'}}>{tableHeader[2]}</td>
                        </tr>
                        <tr key={`table44${i}`}>
                          <td style={{textAlign:'right'}}>{scalarsd[i].BACKWARD}</td>
                          <td style={{color:'white'}}>{tableHeader[3]}</td>
                        </tr>
                        <tr key={`table45${i}`}>
                          <td style={{textAlign:'right'}}>{scalarsd[i].UTILIZATIONRATE}</td>
                          <td style={{color:'white'}}>{tableHeader[4]}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>,
                );
              }
            }
            return html;
          })()
        }
      </div>
    );
  }
}
