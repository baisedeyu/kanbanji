import React from 'react';
import {Button, Row, Col,Input,Select} from 'antd';
const Search = Input.Search;

class Zhon1 extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){

    const a=this.state.value;
    return(
      <div style={{ width: '100%', height: '100%',paddingTop:'0.2%',paddingLeft: '0.2%', paddingRight: '0.2%', position:'absolute' }}>
        <Row>
          <Col span={6}>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" target="tiaozhuan" />
              {/*<Button type="primary" size='default' href= target="tiaozhuan" >*/}
                {/*前往*/}
              {/*</Button>*/}
            </form>
            {(()=>{console.log(this.state.value)})}
          </Col>
        </Row>
            <iframe
              style={{width:'100%', height:"95.5%", overflow:'auto'}}
              // onLoad={() => {
              //   //const obj = ReactDOM.findDOMNode(this);
              //   this.setState({
              //     "iFrameHeight":  800 + 'px'
              //   });
              // }}
              ref="iframe"
              src="http://localhost:8000"
              width="100%"
              height="100%"
              name="tiaozhuan"
              // frameBorder="0"
            />
      </div>
    )
  }
}

export default Zhon1;




