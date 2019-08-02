import React from 'react';



const weekday=['星期日','星期一','星期二','星期三','星期四','星期五','星期六',]
class myClock extends React.Component{

  render(){
    const {timeData}=this.props
    return(
      <div>
        {timeData}
      </div>
    )
  }
}
export default myClock;
