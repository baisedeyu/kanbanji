import React from 'react';


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
