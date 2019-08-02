import React from 'react';
import { Button } from 'antd';

class Hongjian2 extends React.Component {

  huiqu=()=>{
    this.props.history.push(`/Hongjian`)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Button onClick={this.huiqu}>回去</Button>
      </div>
    );
  }
}

export default Hongjian2
