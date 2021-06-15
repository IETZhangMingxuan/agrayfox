/* 放置所有的请求方法 */
import weiboAxios from './txapiAxios'
import hotNewsAxios from './hotNewsAxios'
import kuaiShouAxios from './KuaiShouAxios'
import rightNowAxios from './rightNowAxios'
import apiopenAxios from './apiopenAxios'
import tianxingapiAxios from './tianxingapiAxios'
import randomsentences from './randomsentences'
import locationAxios from './locationAxios'
/* anyknow */
import anyknowAxios from './anyknowAxios'
import weatherAxios from './weatherAxios'


/* 制作动态ajax请求 */
let ajaxRandomNum = parseInt(Math.random() * (130000 - 120000) + 120000);

/* 实时获取微博热搜 */
export const getWeiboHotList = () => weiboAxios.get(
  "/weibohot/index?key=4428d8e64916b6207baf857dac31f424");

/* 实时获取今日头条热门新闻 */
export const getNewsHotList = () => hotNewsAxios.get(
  "/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取抖音热搜视频 */
export const getDouyinVideoList = () => weiboAxios.get(
  "/dyvideohot/index?key=4428d8e64916b6207baf857dac31f424");
  getRightNowList
/* 实时获取快手热搜视频第一页数据 */
export const getKuaiShouVideoList01 = () => kuaiShouAxios.get(
  "/hot/videos/?source=kuai-shou&page=2");

/* 实时获取抖音今日热门50条数据(无头像) */
export const getRightNowList = () => rightNowAxios.get("/douyin/4");

/* 实时获取抖音音乐排行榜 */
export const getDouyinMusicList = () => rightNowAxios.get("/douyin/5");

/* 实时获取网易新闻 */
export const getWYNewsList = () => apiopenAxios.get("/getWangYiNews?count=100");

/* 实时获取天眼(开眼)短视频列表 */
export const getTYVideoList = () => apiopenAxios.get(`/videoRecommend?id=${ajaxRandomNum}`);

/* 实时获取天行API苹果新闻 */
export const getAppleNewsList = () => tianxingapiAxios.get(
  "/apple/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API国际新闻 */
export const getInternationalNewsList = () => tianxingapiAxios.get(
  "/world/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API国内新闻 */
export const getChinaNewsList = () => tianxingapiAxios.get(
  "/guonei/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API区块链新闻 */
export const getBlockChainNewsList = () => tianxingapiAxios.get(
  "/blockchain/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API今日头条新闻 */
export const getTodaysTopNewsList = () => tianxingapiAxios.get(
  "/topnews/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取天行API综合新闻 */
export const getZongHeNewsList = () => tianxingapiAxios.get(
  "/generalnews/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取开源社区随机诗句 */
export const getRandomSentencesList = () => randomsentences.get("/sentences");

/* 实时获取天行API疫情数据 */
export const getVirusNumList = () => tianxingapiAxios.get(
  "/txapi/ncov/index?key=4428d8e64916b6207baf857dac31f424");

/* 实时获取搜狐地理位置API */
export const getLocation = () => locationAxios.get("/cityjson");

/* 实时获取天行API体育新闻 */
export const getSportsNewsList = () => tianxingapiAxios.get(
  "/tiyu/index?key=284032390ca46e0760bc80d2364bf65f&num=50");
/* 实时获取天行API(此请求收费0.05元/条)微信文章 */
export const getWXArticlesList = () => tianxingapiAxios.get(
  `http://api.tianapi.com/txapi/wxsearch/index?key=4428d8e64916b6207baf857dac31f424&word=${this.wxsearch}`
  );



/* 天气模块所需数据 */
export const getUserWeather = () => weatherAxios.get(
  "/s6/weather/now?location=auto_ip&key=db86a5196f304e52a4369818c5182e60");
// export const getUserWeather = () => weatherAxios.get(
//   "/s6/weather/now?location=175.161.250.159&key=db86a5196f304e52a4369818c5182e60");

// 分割线 ———————————————————————————————————— ---- —————————————————————— ---- —————————————————— ---- ————————
/* 实时获取anyknow相关请求 */
/* 实时获取百度热搜榜 */
export const getBaiduNewsList = () => anyknowAxios.get("/api/v1/sites/baidu");
/* 实时获取微博热搜榜 */
export const getWeiboNewsList = () => anyknowAxios.get("/api/v1/sites/weibo");
/* 实时获取知乎热搜榜 */
export const getZhihuNewsList = () => anyknowAxios.get("/api/v1/sites/zhihu");
/* 实时获取好奇心日报热搜榜 */
export const getQdailyNewsList = () => anyknowAxios.get("/api/v1/sites/qdaily");
/* 实时获取360热搜榜 */
export const getTXZNewsList = () => anyknowAxios.get("/api/v1/sites/360");
/* 实时获取今日头条热搜榜 */
export const getTopNewsList = () => anyknowAxios.get("/api/v1/sites/toutiao");
/* 实时获取环球科学热搜榜 */
export const getGlobalNewsList = () => anyknowAxios.get("/api/v1/sites/huanqiukexue");
/* 实时获取36氪热搜榜 */
export const getTSKeNewsList = () => anyknowAxios.get("/api/v1/sites/36kr");
/* 实时获取科普中国热搜榜 */
export const getSciChinaNewsList = () => anyknowAxios.get("/api/v1/sites/kepuchina");
/* 实时获取CNBeta热搜榜 */
export const getCnBetaNewsList = () => anyknowAxios.get("/api/v1/sites/cnbeta");
/* 实时获取雪球热搜榜 */
export const getSnowballNewsList = () => anyknowAxios.get("/api/v1/sites/xueqiu");
/* 实时获取eastmoney热搜榜 */
export const getEasymoneyNewsList = () => anyknowAxios.get("/api/v1/sites/eastmoney");
/* 实时获取财新热搜榜 */
export const getCaixinNewsList = () => anyknowAxios.get("/api/v1/sites/caixin");
/* 实时获取investing热搜榜 */
export const getInvestingNewsList = () => anyknowAxios.get("/api/v1/sites/investing");
/* 实时获取梨视频热搜榜 */
export const getPearVideoList = () => anyknowAxios.get("/api/v1/sites/pearvideo");
/* 实时获取bilibili热搜榜 */
export const getBilibiliVideoList = () => anyknowAxios.get("/api/v1/sites/bilibili");
/* 实时获取游民星空热搜榜 */
export const getGameSkyGameList = () => anyknowAxios.get("/api/v1/sites/gamesky");
/* 实时获取猫眼热搜榜 */
export const getMaoYanList = () => anyknowAxios.get("/api/v1/sites/maoyan");
/* 实时获取Steam热搜榜 */
export const getSteamList = () => anyknowAxios.get("/api/v1/sites/steam");
/* 实时获取开发者头条热搜榜 */
export const getDeveloperTopList = () => anyknowAxios.get("/api/v1/sites/toutiaoio");
/* 实时获取开源中国热搜榜 */
export const getOsChinaTopList = () => anyknowAxios.get("/api/v1/sites/oschina");
