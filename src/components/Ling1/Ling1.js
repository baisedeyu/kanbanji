import React from 'react';
import styles from './Ling1.css';

import {Row, Col} from 'antd';

class Ling1 extends React.Component{
  render(){
    const zhishi1=this.props.zhishi2;
    const lvtang1=this.props.lvtang2;
    return(
      <div style={{width:"100%",height:"90%",backgroundColor:'#2d1818',overflow:'auto'}}>
        <div style={{paddingLeft:'1%'}} >
          <Row align="top" gutter={10}>
            <Col className="gutter-row" span={12}>
              <table style={{fontSize:'small'}}>
                <tr>
                  <td style={{ color: '#fefdff',textAlign:'left',width:'20%'}}>班别：</td>
                  <td style={{ color: '#fefdff',textAlign:'left',width:'20%'}}>检测者：</td>
                  <td style={{ color: '#fefdff',textAlign:'left',width:'60%'}}>联络电话：</td>
                </tr>
              </table>
              <br/>
              <table border="1px">
                <tr>
                  <td style={{ color: '#fefdff'}}>样式编号</td>
                  <td style={{ color: '#fefdff'}}>注入机台</td>
                  <td style={{ color: '#fefdff'}}>时间</td>
                  <td style={{ color: '#fefdff'}}>成分判定</td>
                  <td style={{ color: '#fefdff'}}>含氢量(g/cm)</td>
                </tr>
                {(()=>{
                  let html=[];
                  for(let i=0;i<lvtang1.length;i++){
                    if (lvtang1[i].AIWATERRESULT ==='NG') {
                      html.push(
                        <tr style={{backgroundColor:'red'}}>
                          <td style={{ color: '#fefdff'}}>{lvtang1[i].PATTERNNO}</td>
                          <td>{lvtang1[i].MACHINENO+'#'}</td>
                          <td>{lvtang1[i].CTIME}</td>
                          <td>{lvtang1[i].AIWATERRESULT}</td>
                          <td>{lvtang1[i].HYDROGENNUM}</td>
                        </tr>
                      )
                    }
                    else {
                      html.push(
                        <tr>
                          <td style={{ color: '#fefdff'}}>{lvtang1[i].PATTERNNO}</td>
                          <td>{lvtang1[i].MACHINENO+'#'}</td>
                          <td>{lvtang1[i].CTIME}</td>
                          <td>{lvtang1[i].AIWATERRESULT}</td>
                          <td>{lvtang1[i].HYDROGENNUM}</td>
                        </tr>
                      )
                    }

                  }return html;
                })()
                }
              </table>
            </Col>
            <Col className="gutter-row" span={12}>
              <p style={{textAlign:'center',color: '#fefdff',fontSize:'xx-large'}}>添加指示</p>
              <div style={{paddingRight:'1.5%'}}>
                <table border="1px">
                  <tr>
                    <td style={{ color: '#fefdff'}}>添加时间段</td>
                    <td style={{ color: '#fefdff'}}>炉号</td>
                    <td style={{ color: '#fefdff'}}>Mg（克）</td>
                    <td style={{ color: '#fefdff'}}>Si（克）</td>
                    <td style={{ color: '#fefdff'}}>AITib（克）</td>
                  </tr>
                  {(()=>{
                    let html=[];
                    for (let i=0;i<zhishi1.length;i++){
                      html.push(
                        <tr>
                          <td style={{ color: '#fefdff'}}>{zhishi1[i].TIMEINTERVAL}</td>
                          <td>{zhishi1[i].ATTRIBUTE1}</td>
                          <td>{zhishi1[i].Mg}</td>
                          <td>{zhishi1[i].Si}</td>
                          <td>{zhishi1[i].AlTib}</td>
                        </tr>
                      )
                    }return html;
                  })()
                  }
                </table>
              </div>
            </Col>

          </Row>

        </div>
      </div>
    )
  }
}
export default Ling1;
