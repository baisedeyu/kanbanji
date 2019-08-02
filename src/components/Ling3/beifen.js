// let count=data1.length/3;
// let Lwidth=Math.floor(91/(count*2));
// let columns1=[
//   {
//     title:'',
//     dataIndex:'ITEMNM',
//     key:'ITEMNM',
//     width:'9%',
//     align:'center',
//   },
//   {
//     title:1+'#',
//     children:[
//       {
//         title:'标准',
//         dataIndex:'STD1',
//         key:'STD1',
//         align:'center',
//         width:Lwidth+'%',
//
//       },
//       {
//         title:'实际',
//         dataIndex:'RDATA1',
//         key:'RDATA1',
//         align:'center',
//         width:Lwidth+'%',
//         render:(text,record)=>
//           ((text)<=(parseInt(record.STD1.split('±')[0]) - parseInt(record.STD1.split('±')[1])) || ((text)>=parseInt(record.STD1.split('±')[0])+ parseInt(record.STD1.split('±')[1])))  ?  <div className={'d'}>{text}</div>:  <div>{text}</div>
//       }
//     ]
//   },
// ];
// for(let i=2;i<=count;i++){
//   let b={
//     title:i+'#',
//     children:[
//       {
//         title:'标准',
//         dataIndex:'STD'+i,
//         key:'STD'+i,
//         align:'center',
//         width:Lwidth+'%',
//       },
//       {
//         title:'实际',
//         dataIndex:'RDATA'+i,
//         key:'RDATA'+i,
//         align:'center',
//         width:Lwidth+'%',
//         render:(text,record)=>
//           ((text)<=(parseInt(record['STD'+i].split('±')[0]) - parseInt(record['STD'+i].split('±')[1])) || ((text)>=parseInt(record['STD'+i].split('±')[0])+ parseInt(record['STD'+i].split('±')[1])))  ?  <div className={'d'}>{text}</div>:  <div>{text}</div>
//       }
//     ]
//   };
//   columns1.push(b);
// }
//
// //炉号确认
// for(let i=1,j=0;i<columns1.length;i++,j=j+3){
//   columns1[i].title=data1[j].LH;
// }


// {
//   title:1+'#',
//   children:[
//     {
//       title:'标准',
//       dataIndex:'STD1',
//       key:'STD1',
//       align:'center',
//       width:Lwidth+'%',
//     },
//     {
//       title:'实际',
//       dataIndex:'RDATA1',
//       key:'RDATA1',
//       align:'center',
//       width:Lwidth+'%',
//       render:(text,record)=>
//         ((text)<=(parseInt(record['STD'+1].split('±')[0]) - parseInt(record['STD'+1].split('±')[1])) || ((text)>=parseInt(record['STD'+1].split('±')[0])+ parseInt(record['STD'+1].split('±')[1])))  ?  <div className={'d'}>{text}</div>:  <div>{text}</div>
//     }
//   ]
// },

// const T1=[
//   {
//     ITEMNM:'出汤口温度';
//   },
//   {
//     ITEMNM:'静止室温度',
//   },
//   {
//     ITEMNM:'扒渣提醒',
//   }
// ];
// for(let k=0;k<T1.length;k++){
//   for(let j=k,s=1;s<=data1.length/3;j=j+3,s++){
//     T1[k]['STD'+s] =data1[j].STD;
//     T1[k]['RDATA'+s]=data1[j].RDATA;
//   }
// }
