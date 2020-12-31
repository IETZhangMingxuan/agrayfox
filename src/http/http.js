/* 放置所有的请求方法 */
import weiboAxios from './txapiAxios'
import hotNewsAxios from './hotNewsAxios'
import kuaiShouAxios from './KuaiShouAxios'
import rightNowAxios from './rightNowAxios'

/* 实时获取微博热搜 */
export const getWeiboHotList = () => weiboAxios.get("/weibohot/index?key=4428d8e64916b6207baf857dac31f424");

/* 实时获取今日头条热门新闻 */
export const getNewsHotList = () => hotNewsAxios.get("/index?key=4428d8e64916b6207baf857dac31f424&num=50");

/* 实时获取抖音热搜视频 */
export const getDouyinVideoList = () => weiboAxios.get("/dyvideohot/index?key=4428d8e64916b6207baf857dac31f424");

/* 实时获取快手热搜视频第一页数据 */
export const getKuaiShouVideoList01 = () => kuaiShouAxios.get("/hot/videos/?source=kuai-shou&page=1");

/* 实时获取抖音今日热门50条数据(无头像) */
export const getRightNowList = () => rightNowAxios.get("/douyin/4");

/* 实时获取抖音音乐排行榜 */
export const getDouyinMusicList = () => rightNowAxios.get("/douyin/5");