module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tuantvt",
  description: "info admin nè",
  commandCategory: "infomation",
  usages: "ad",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = [
  "https://media.giphy.com/media/4TmxH7ZMn1aYE/giphy.gif",
  "https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif",
  "https://media.giphy.com/media/BP9fPzjwjJlUk/giphy.gif",
  "https://media.giphy.com/media/MdLFOyVZtoUPm/giphy.gif",
  "https://media.giphy.com/media/TlDd1mxmPGQo/giphy.gif",
  "https://media.giphy.com/media/a6pzK009rlCak/giphy.gif",
  "https://i.imgur.com/K2YCQOp.mp4",
  "https://i.imgur.com/lqyaRGL.mp4",
  "https://i.imgur.com/6LtOy2f.mp4",
];
var callback = () => api.sendMessage({
  body: `━━━━━━━━━━━━━━━━━━\n🌸𝐀𝐃𝐌𝐈𝐍🌸\n━━━━━━━━━━━━━━━━━━
 🙈 𝐓𝐞̂𝐧: Tuân vip nhất thế giới 😎
 💮 𝐁𝐢𝐞̣̂𝐭 𝐃𝐚𝐧𝐡: tvt😘
 🛸 𝐓𝐮𝐨̂̉𝐢: 15+ 😊
 👤 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: Nam 
 💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐂𝐚𝐨 𝐂𝐚̂𝐧 𝐍𝐚̣̆𝐧𝐠: Chưa xác định
 💘 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: no friend
 🌎 𝐐𝐮𝐞̂ 𝐐𝐮𝐚́𝐧: 18 Nam Định
 👫 𝐆𝐮: Dễ thương , Cute ,ngoan ngoãn ,... (𝙠𝙝𝙤̂𝙣𝙜 𝙘𝙤́ gu)
 🌸 𝐓𝐢́𝐧𝐡 𝐂𝐚́𝐜𝐡: Hiền, Vui tính , Hoà đồng,...
 🌀 𝐒𝐨̛̉ 𝐓𝐡𝐢́𝐜𝐡: Ngồi trước máy tính , hack, ghét cô đơn, ...
 💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
 ☎ 𝗦𝗗𝗧 & 𝗭𝗮𝗹𝗼: 0836.190107
 📱Facebook:https://www.facebook.com/profile.php?id=100073862257362
 ✉️ 𝐄𝐦𝐚𝐢𝐥: chx có
 ------------
✔Donate:
📲MoMo: 0836190107
💳MB: Chưa có Mb :( donate qua momo đi thanks 😊😘

  💕💕💕----tvt---💕💕💕`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };