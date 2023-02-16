//**đừng thay credit của sơn nhá =(())
module.exports.config = {
    name: "vdgaitiktok",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ttt",
    description: "Ảnh video anime",
    commandCategory: "mạng xã hội",
    usages: "anime",
    cooldowns: 0
  };
  module.exports.run = async ({ api, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    axios.get('https://image-random-api.tuantvt.repl.co/gaitiktok/?apikey=tuantvtvip').then(res => {
      let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
            api.sendMessage({
              body: `=======𝐕𝐃=======\n➠ Số video hiện có: ${res.data.count}\n\n➠ Link: ${res.data.data}\n\n➠ 𝐔𝐩𝐝𝐚𝐭𝐞: 𝐙𝐞𝐮𝐬\n➠ 𝐋𝐢𝐧𝐤 𝐀𝐝𝐦𝐢𝐧:m.me/tuantvtvip`,
              attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
          };
          request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
        })
      }


