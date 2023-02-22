module.exports.config = {
  name: "6mui",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Random ảnh 6 múi",
  commandCategory: "Ngắm ảnh",
  usages: "Ngắm ảnh trai 6 múi",
  cooldowns: 10
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://randomlinkapi.tuantvt.repl.co/boy6mui/').then(res => {
	let ext = res.data.data.response.url.substring(res.data.data.response.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `𝗕𝗼̛́𝘁 𝗚𝗵𝗶𝗲̂̀𝗻 𝗟𝗮̣𝗶 𝗡𝗵𝗮 -.-`,
            attachment: fs.createReadStream(__dirname + `/cache/6mui.jpg`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/6mui.jpg`), event.messageID);
          };
          request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/6mui.jpg`)).on("close", callback);
          })
         };