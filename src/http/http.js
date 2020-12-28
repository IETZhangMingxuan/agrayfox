/* 放置所有的请求方法 */
import weiboAxios from './txapiAxios'
import hotNewsAxios from './hotNewsAxios'

/* 实时获取微博热搜 */
export const getWeiboHotList = () => weiboAxios.get("/weibohot/index?key=4428d8e64916b6207baf857dac31f424");
/* 实时获取今日头条热门新闻 */
export const getNewsHotList = () => hotNewsAxios.get("/index?key=4428d8e64916b6207baf857dac31f424&num=50");