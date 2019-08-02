import React from 'react';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import { Row, Col,Button } from 'antd';
import {get,NotFound} from 'antd'
import { getRoutes } from '../../utils/utils';
import { Link, routerRedux } from 'dva/router';
import { Route, Redirect, Switch} from 'dva/router';
import { connect } from 'dva';
import SiderMenu from '../../components/SiderMenu/SiderMenu'


class Kanban extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      myurl:'dsafsdf',
      myHeaderName:'fasfdsgdf',
    };
  }


  render(){

    const {dispatch}=this.props;
    const { match,routerData,menuData } = this.props;

   // console.log(menuData);
    const MENUDESC='/kanban/lingzhong8';

    const onPrev =() =>{
      dispatch(routerRedux.push(MENUDESC))
    };

    return(
      <div style={{background:'#2D1818',height:'100%',}}>
        <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName}>
        </BoardHeader>
        <Row><Col span='24'><hr/></Col></Row>
          <div style={{height:'88%' ,width:'100%',position:'relative',paddingLeft: '0.2%', paddingRight: '0.2%'}}>
            <Switch>
            {
              getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))
            }
          </Switch>

            {/*<Link*/}
              {/*to={MENUDESC}*/}
            {/*>*/}
              {/*<span>MENUDESC</span>*/}
            {/*</Link>*/}
            <Button type="primary" onClick={onPrev}>
              开始
            </Button>

          </div>
        <BoardFoot/>
      </div>
    )
  }
}
export default
connect(()=>({
}))(Kanban);


//如下为简单的表单
// const  {getFieldDecorator}  = this.props.form;
//
// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 5 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 12 },
//   },
// };
//
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 10,
//     },
//   },
// };
// <div style={{width:'100%',height:'100%'}}>
//   <div style={{width:'100%',height:'10%'}}>
//     <span style={{fontSize:'xx-large'}}>缴库作业</span>
//   </div>
//   <Form onSubmit={this.handleSubmit} layout={'horizontal'}>
//     <FormItem >
//
//     </FormItem>
//
//     <FormItem {...formItemLayout} label="输入">
//       <Row>
//         <Col span={12}>
//           {getFieldDecorator('input',{
//             rules:[{require:true, massege:'dasdsadads'}],
//           })(
//             <Input placeholder="Please input your nickname"/>
//           )}
//         </Col>
//       </Row>
//     </FormItem>
//
//     <FormItem {...formItemLayout} label="包装编号">
//       <Row>
//         <Col span={12}>
//           {getFieldDecorator('Pnumber',{
//             rules:[{require:true, massege:'dsaflkfjdogjwoierjgoegj'}],
//           })(
//             <Input placeholder="Please input your nickname"/>
//           )}
//         </Col>
//       </Row>
//     </FormItem>
//
//     <FormItem {...formItemLayout} label="产品">
//       <Row gutter={12}>
//         <Col span={6}>
//           {getFieldDecorator('product',{
//             rules:[{require:true, massege:'dsaflkfjdogjwoierjgoegj'}],
//           })(
//             <Input placeholder="Please input your nickname"/>
//           )}
//         </Col>
//         <Col span={8}>
//           <FormItem {...formItemLayout} label={"数量"}
//           >
//             {getFieldDecorator('number', {
//               rules: [{ require: true, massege: 'dsaflkfjdogjwoierjgoegj' }],
//             })(<Input placeholder="Please input your nickname"/>)
//             }
//           </FormItem>
//         </Col>
//       </Row>
//     </FormItem>
//
//     <FormItem {...formItemLayout} label="仓库">
//       <Row gutter={12}>
//         <Col span={5}>
//           {getFieldDecorator('Warehouse',{
//             rules:[{require:true,massege:'dsaflkfjdogjwoierjgoegj'}],
//           })(
//             <Select placeholder="请输入仓库号">
//               <Option value="xiaoli">xiaoli</Option>
//               <Option value="xiaoming">xiaoming</Option>
//               <Option value="xiaohei">xiaohei</Option>
//             </Select>
//           )}
//         </Col>
//         <Col span={10}>
//           <FormItem {...formItemLayout} label="posistion">
//             {getFieldDecorator('dragon',{
//               rules:[{require:true,massege:'dsaflkfjdogjwoierjgoegj'}],
//             })(
//               <Select placeholder="请输入位置">
//                 <Option value="xiaoli">xiaoli</Option>
//                 <Option value="xiaoming">xiaoming</Option>
//                 <Option value="xiaohei">xiaohei</Option>
//               </Select>
//             )}
//           </FormItem>
//         </Col>
//       </Row>
//     </FormItem>
//
//     <FormItem {...tailFormItemLayout}>
//       <Button  size={'large'}>
//         缴库
//       </Button>
//     </FormItem>
{/*</Form>*/}
{/*</div>*/}
