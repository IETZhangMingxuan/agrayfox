/* 工具类函数 */
/**
 * 1.格式化秒(秒数 ==> 时分秒)
 * @param int  value 总秒数
 * @return string result 格式化后的字符串
 * 如需要调用上述方法，使用formatTime(1545903266795, 'Y年M月D日 h:m:s')或者formatTime(1545903266795, 'Y-M-D h:m:s')即可
 */

export const formatSeconds = function (value) {
  var theTime = parseInt(value); // 需要转换的时间秒 
  var theTime1 = 0; // 分 
  var theTime2 = 0; // 小时 
  var theTime3 = 0; // 天
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60);
      theTime1 = parseInt(theTime1 % 60);
      if (theTime2 > 24) {
        //大于24小时
        theTime3 = parseInt(theTime2 / 24);
        theTime2 = parseInt(theTime2 % 24);
      }
    }
  }
  var result = '';
  if (theTime > 0) {
    result = "" + parseInt(theTime) + "秒";
  }
  if (theTime1 > 0) {
    result = "" + parseInt(theTime1) + "分" + result;
  }
  if (theTime2 > 0) {
    result = "" + parseInt(theTime2) + "小时" + result;
  }
  if (theTime3 > 0) {
    result = "" + parseInt(theTime3) + "天" + result;
  }
  return result;
};

/**
 * 2.将引用的数字除以一万并保留一位小数输出(用于视频评论的数量显示) */
export const showDevideNum = function (num) {
  let newNum = (num / 10000).toFixed(1) + 'w';
  return newNum;
}
