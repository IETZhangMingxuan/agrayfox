/* 放置所有的请求方法 */
import weiboAxios from './txapiAxios'
import hotNewsAxios from './hotNewsAxios'
import kuaiShouAxios from './KuaiShouAxios'
import rightNowAxios from './rightNowAxios'
import apiopenAxios from './apiopenAxios'
import tianxingapiAxios from './tianxingapiAxios'
import randomsentences from './randomsentences'
import yiqingAxios from './yiqingAxios'

/* 实时获取微博热搜 */
export const getWeiboHotList = () => weiboAxios.get("/weibohot/index?key=4428d8e64916b6207baf857dac31f424");

/* 实时获取今日头条热门新闻 */
export const getNewsHotList = () => hotNewsAxios.get("/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取抖音热搜视频 */
export const getDouyinVideoList = () => weiboAxios.get("/dyvideohot/index?key=4428d8e64916b6207baf857dac31f424");

/* 实时获取快手热搜视频第一页数据 */
export const getKuaiShouVideoList01 = () => kuaiShouAxios.get("/hot/videos/?source=kuai-shou&page=5");

/* 实时获取抖音今日热门50条数据(无头像) */
export const getRightNowList = () => rightNowAxios.get("/douyin/4");

/* 实时获取抖音音乐排行榜 */
export const getDouyinMusicList = () => rightNowAxios.get("/douyin/5");

/* 实时获取网易新闻 */
export const getWYNewsList = () => apiopenAxios.get("/getWangYiNews?count=100");

/* 实时获取天行API苹果新闻 */
export const getAppleNewsList = () => tianxingapiAxios.get("/apple/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API国际新闻 */
export const getInternationalNewsList = () => tianxingapiAxios.get("/world/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API国内新闻 */
export const getChinaNewsList = () => tianxingapiAxios.get("/guonei/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API区块链新闻 */
export const getBlockChainNewsList = () => tianxingapiAxios.get("/blockchain/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API今日头条新闻 */
export const getTodaysTopNewsList = () => tianxingapiAxios.get("/topnews/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API综合新闻 */
export const getZongHeNewsList = () => tianxingapiAxios.get("/generalnews/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取开源社区随机诗句 */
export const getRandomSentencesList = () => randomsentences.get("/sentences");

/* 实时获取疫情数据 */
export const getYQList = () => yiqingAxios.get("/ug/api/wuhan/app/data/list-total");

