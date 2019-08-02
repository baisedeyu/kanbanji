import React from 'react';

class MyDoubleTable1 extends React.Component {
  render() {
    const mytabledata1= this.props.mytabledata1
    return (

      <div style={{width: '100%', height: '100%'}}>
        <table style={{width:'100%',fontSize:'1.2vw',height:'100%'}}>
          <tr style={{color:'white'}}>
            <td>台机</td>
            <td>型式</td>
            <td>投入数</td>
            <td>良品数</td>
            <td>不良</td>
            <td>不良率</td>
            <td>送检指示</td>
          </tr>
        {
          (() => {
            let html = [];
            let xxx = 1;
            for (let i = 0; i < mytabledata1.length - 1; i++) {
              if (mytabledata1[i].boardCount === mytabledata1[i + 1].boardCount) {
                xxx += 1;
                if(i===mytabledata1.length-2){
                  const a = i - xxx + +2;
                  html.push(
                      <tr>
                        <td style={{color:'white'}} rowSpan={xxx}>{mytabledata1[a].boardCount+'#'}</td>
                        <td>{mytabledata1[a].boardType}</td>
                        <td>{mytabledata1[a].inputNumber}</td>
                        <td>{mytabledata1[a].goodNumber}</td>
                        <td>{mytabledata1[a].badNumber}</td>
                        <td>{mytabledata1[a].badRate}</td>
                        <td>{mytabledata1[a].Instructions}</td>
                      </tr>
                  )
                  {
                    (()=>{
                      let html2=[];
                      for (let count=a+1;count<a+xxx;count++){
                        html2.push(
                          <tr>
                            <td>{mytabledata1[count].boardType}</td>
                            <td>{mytabledata1[count].inputNumber}</td>
                            <td>{mytabledata1[count].goodNumber}</td>
                            <td>{mytabledata1[count].badNumber}</td>
                            <td>{mytabledata1[count].badRate}</td>
                            <td>{mytabledata1[count].Instructions}</td>
                          </tr>
                        )
                      }
                      html.push(html2);
                    })()
                  }
                }
              }
              else {
                if (xxx == 1) {
                  const a = i - xxx + 1
                  html.push(
                    <tr>
                      <td style={{color:'white'}}>{mytabledata1[a].boardCount+'#'}</td>
                      <td>{mytabledata1[a].boardType}</td>
                      <td>{mytabledata1[a].inputNumber}</td>
                      <td>{mytabledata1[a].goodNumber}</td>
                      <td>{mytabledata1[a].badNumber}</td>
                      <td>{mytabledata1[a].badRate}</td>
                      <td>{mytabledata1[a].Instructions}</td>
                    </tr>
                  )
                } else {
                  const a = i - xxx + 1
                  html.push(

                      <tr>
                        <td style={{color:'white'}} rowSpan={xxx}>{mytabledata1[a].boardCount+'#'}</td>
                        <td>{mytabledata1[a].boardType}</td>
                        <td>{mytabledata1[a].inputNumber}</td>
                        <td>{mytabledata1[a].goodNumber}</td>
                        <td>{mytabledata1[a].badNumber}</td>
                        <td>{mytabledata1[a].badRate}</td>
                        <td>{mytabledata1[a].Instructions}</td>
                      </tr>
                  )
                  {
                    (()=>{
                      let html3=[];
                      for (let count=a+1;count<a+xxx;count++){
                        html3.push(
                          <tr>
                            <td>{mytabledata1[count].boardType}</td>
                            <td>{mytabledata1[count].inputNumber}</td>
                            <td>{mytabledata1[count].goodNumber}</td>
                            <td>{mytabledata1[count].badNumber}</td>
                            <td>{mytabledata1[count].badRate}</td>
                            <td>{mytabledata1[count].Instructions}</td>
                          </tr>
                        )
                      }
                      html.push(html3);
                    })()
                  }
                }
                if(i===mytabledata1.length-2){
                  const a=mytabledata1.length-1
                  html.push(
                    <tr>
                      <td style={{color:'white'}}>{mytabledata1[a].boardCount+'#'}</td>
                      <td>{mytabledata1[a].boardType}</td>
                      <td>{mytabledata1[a].inputNumber}</td>
                      <td>{mytabledata1[a].goodNumber}</td>
                      <td>{mytabledata1[a].badNumber}</td>
                      <td>{mytabledata1[a].badRate}</td>
                      <td>{mytabledata1[a].Instructions}</td>
                    </tr>
                  )
                }
                xxx = 1;
              }
            }
            return html
          })()
        }
        </table>
      </div>
    )
  }
}

export default MyDoubleTable1
