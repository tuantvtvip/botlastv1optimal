module.exports.config = {
  name: "donate",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tuantvt",
  description: "Donate cho admin",
  commandCategory: "ngฦฐแปi dรนng",
  usages: "donate",
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
"https://i.imgur.com/CygJIqC.gif",
"https://i.imgur.com/ij2RQ0j.gif",
  ];
	  var callback = () => api.sendMessage({body:`=== ๐ธ [ ๐๐๐๐๐๐ ] ๐ธ ===\n
๐๐ ๐๐๐ MoMo:0836190107 ๐๐\n\n๐๐ขฬ๐ง๐ก ๐๐ก๐จ ๐ญ๐ก๐ฎ๐ฬ ๐๐จ๐ญ ๐ฏ๐จฬฬ๐ข ๐ ๐ข๐ฬ ๐ฤ ๐ง๐ก๐ฎฬ๐ง๐  ๐๐ฬฃ๐ง ๐ง๐ฬ๐จ ๐๐จฬ ๐ฅ๐จฬ๐ง๐  ๐ญ๐จฬฬ๐ญ ๐ญ๐ก๐ขฬ ๐ญ๐ก๐ขฬ๐ง๐ก ๐ญ๐ก๐จ๐ฬ๐ง๐  ๐๐๐ง๐ค ๐ขฬ๐ญ ๐ฆ๐ฎ๐ ๐ฆ๐ขฬ ๐ ๐จฬ๐ข, ๐ฆ๐ฬ๐ข ๐ข๐ฎ๐ฎ๐ฎ โค๏ธ`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };