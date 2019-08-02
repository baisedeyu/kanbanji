const configs201905131052 = {
// const configs = {
  // 液位提醒参数
  TMPLRJ02_TagNames: 'R_LY_TEMP,R_LQ_TEMP,R_YM_HEIGHT,R_YM_MAX,R_RJ_BZ',
  // 热处理设备
  TMPLHT_TagNames: 'R_GRQD1,R_GT1,R_GT2,R_GT3,R_GT4,R_LQ1,R_SX1,R_SX2,R_SXQD1',

  // 库存明细_显示个数
  KCMX_Count: 15,

  //熔解投料 一次铝料号
  RJTLnum: '030010001A',
  //溶解投料 一次铝标准
  RJTLYBZ: '>=40%',
  //溶解投料 二次铝标准
  RJTLEBZ: '< 60%',

  // 设备看板—设备监控
  TZSBJK_TagNames: 'QCL_WD,QCL_SD,JCQCL_WD,JCQCL_SD,DFX_WD,DFX_SD,SQ_WD,SQ_SD,LFX_WD,LFX_SD,KSL_WD,KSL_SD',


  // 设备看板获取接口段信息
  SB_IP: `http://192.168.99.112/LFService/FUEMSService.svc`,
  //设备看板-保养执行汇总显示数
  BYZXHZ_count: 12,
  //设备看板-保养未完成显示数
  BYWWC_count: 2,
  //设备看板-超24小时未完成显示数
  C24XSWWC_count: 12,
  //设备看板-点检执行汇总显示数
  DJZXHZ_count: 12,
  //设备看板-点检执行未完成显示数
  DJZXWWC_count: 2,
  //设备看板-故障未完成显示数
  GZWWC_count: 2,
  // 设备看板-刷新时间
  SBKB_time: 5000,

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 定模定线-显示数据
  DMDX_count: 6,
  // 定模定线-刷新时间
  DMDX_time: 5000,
  // 备模状况一览表-显示数据数
  BM_count: 6,
  // 备模状况一览表-刷新时间
  BM_time: 5000,

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 报警机台
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 报警机台图片的每行个数
  sbimge: 5,
  // 故障设备刷新时间
  GZSB_time: 5000,
};





