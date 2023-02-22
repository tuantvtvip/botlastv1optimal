module.exports.config = {
    name: 'autdown',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'Hakira',
    description: '',
    commandCategory: 'system',
    usages: 'abc',
    cooldowns: 2
};
let auto = __dirname + "/cache/autodownload.json";
let fs = require("fs");
let axios = require('axios')
 module.exports.onLoad = () => {
   if (!fs.existsSync(auto)) fs.writeFileSync(auto, JSON.stringify([]));
 }
module.exports.handleEvent = async ({ api, event, Threads }) => {
  try{
  var { threadID, messageID } = event;
  let data = JSON.parse(fs.readFileSync(auto));
  var find = data.find(item => item.boxid == threadID) || { boxid: threadID, auto: false };
  //  console.log(find)
  if(!data.find(item => item.boxid == threadID)){
     data.push(find);
      fs.writeFileSync(auto, JSON.stringify(data, null, 4), "utf-8");
  }
  if(find.auto == true){
    if(event.body.includes('tiktok')){
      var regex = /(((https?:\/\/)|(www\.))[^\s]+)/g
const link = event.body.match(regex);
      console.log(link)
      const resp = await axios.post('https://www.tikwm.com/api/', {
       url: link[0],
       count: 12,
       cursor: 0,
       hd: 1
     });
           var obj = {}
     obj.status = 200;
     obj.id = resp.data.data.id;
     obj.region = resp.data.data.region;
     obj.title = (!resp.data.data.title) ? "Không Có Tựa Đề" : resp.data.data.title;
     obj.cover = "https://www.tikwm.com" + resp.data.data.cover;
     obj.wmplay = "https://www.tikwm.com" + resp.data.data.wmplay;
     obj.hdplay = resp.data.data.hdplay;
     obj.music = "https://www.tikwm.com" + resp.data.data.music;
     obj.play_count = resp.data.data.play_count;
     obj.digg_count = resp.data.data.digg_count;
     obj.comment_count = resp.data.data.comment_count;
     obj.share = resp.data.data.share_count;
     obj.author = resp.data.data.author;
      const t = (await axios.get(encodeURI(obj.hdplay), {
      responseType: "arraybuffer"
    })).data;
      //console.log(obj)
   return fs.writeFileSync(__dirname + "/cache/" + event.senderID + ".mp4", Buffer.from(t, "utf-8")), api.sendMessage({
					body: `🧸====𝐀𝐔𝐓𝐎𝐃𝐎𝐖𝐍 𝐓𝐈𝐊𝐓𝐎𝐊====🧸 \n━━━━━━━━━━━━━━━━ \n🧸𝑨𝒖𝒕𝒉𝒐𝒓: ${obj.author.nickname}\n🧸𝑽𝒊𝒆𝒘: ${obj.play_count}\n🧸𝑻𝒚𝒎: ${obj.digg_count}\n🧸𝑪𝒐𝒎𝒎𝒆𝒏𝒕: ${obj.comment_count}\n🧸𝑺𝒉𝒂𝒓𝒆 ${obj.share} \n━━━━━━━━━━━━━━━━━━ \n🧸𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐯𝐢𝐝𝐞𝐨 𝐪𝐮𝐚 𝐥𝐢𝐧𝐤 𝐭𝐢𝐤𝐭𝐨𝐤🧸`,
					attachment: fs.createReadStream(__dirname + "/cache/" + event.senderID + ".mp4")
				}, threadID, (() => {
					fs.unlinkSync(__dirname + "/cache/" + event.senderID + ".mp4")
				}))
    }
  }
} catch(e){console.log('')}}
module.exports.run = async function({ api, args, event, permssion }) {
  try{  
  let data = JSON.parse(fs.readFileSync(auto));
  var { threadID, messageID } = event;
    var find = data.find(item => item.boxid == threadID)
     if(find.auto == true){
            find.auto = false
        } else {
            find.auto = true
        }
    fs.writeFileSync(auto, JSON.stringify(data, null, 4), "utf-8");
    return api.sendMessage(`Đã ${find.auto} thành công`, threadID, messageID)
  }
catch(e){console.log(e)}}