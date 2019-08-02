// import React from 'react';
// import moment from 'moment';
//
// function NowTime() {
//   return moment().format('YYYY-MM-DD HH:mm:ss')+" "+weekday[moment().format('d')]
// }
// const weekday=['星期日','星期一','星期二','星期三','星期四','星期五','星期六',]
// class myClock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={date:new Date()}
//   }
//
//   componentDidMount(){
//     this.timeID=setInterval(
//       ()=>this.tick(),1000
//     )
//   }
//
//   tick(){
//     this.setState({date:new Date})
//   }
//   render(){
//     return(
//       <div>
//         <NowTime />
//       </div>
//     )
//   }
// }
// export default myClock;
