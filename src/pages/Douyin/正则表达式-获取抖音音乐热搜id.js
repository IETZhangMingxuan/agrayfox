/* 获取到音乐id */
let a = "https://www.iesdouyin.com/share/music/6888501829894686722";
let z = "https://www.iesdouyin.com/share/music/6896326384122087437"
let toa = a.replace(/^\https:\/\/www\.iesdouyin.com\/share\/music\//,'')
let toz = z.replace(/^\https:\/\/www\.iesdouyin.com\/share\/music\//,'')
console.log(toa);
console.log(toz);

/* 发送带id的请求 */
let baseURL = `https://www.iesdouyin.com/web/api/v2/music/info/?music_id=${toz}`

/* 返回的请求体 获取音乐链接 放在<a></a>中*/
/* data.music_info.play_url.url_list[0] */
