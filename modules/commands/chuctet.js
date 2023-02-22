module.exports.config = {
    name: "chuctet",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "tuantvt",
    description: "Happy New Year",
    commandCategory: "Tiện Ích",
    usages: "chuctet",
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
  "https://i.ibb.co/xGHPVZB/atet-8.jpg",
  "https://i.ibb.co/HVtkLf7/atet-7.jpg",
  "https://i.ibb.co/Wx19gZR/atet-6.jpg",
  "https://i.ibb.co/pKxxD7h/atet-5.jpg",
  "https://i.ibb.co/92rCJ7t/atet-4.jpg",
  "https://i.ibb.co/4dHKRBw/atet-3.jpg",
  "https://i.ibb.co/mJtTrmh/atet-2.jpg",
  "https://i.ibb.co/8z6DBFp/atet-14.jpg",
  "https://i.ibb.co/GJsw97k/atet-1.jpg",
  "https://i.ibb.co/f17jK1s/atet-13.jpg",
  "https://i.ibb.co/KW46Kp6/atet-12.jpg",
  "https://i.ibb.co/gj7tMfJ/atet-11.jpg",
  "https://i.ibb.co/VJ1DzQL/atet-10.jpg",
  "https://i.ibb.co/P9FMNMR/atet-9.jpg",
    ];
        var callback = () => api.sendMessage({body:`🌸🌸🌸𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 𝐭𝐞̂́𝐭 đ𝐞̂́𝐧
  💸💸💸𝐭𝐢𝐞̂̀𝐧 đ𝐚̂̀𝐲 𝐭𝐮́𝐢
  ❤❤❤𝐭𝐢𝐦 đ𝐚̂̀𝐲 𝐭𝐢̀𝐧𝐡
  ⛽⛽⛽𝐱𝐚̆𝐧𝐠 đ𝐚̂̀𝐲 𝐛𝐢̀𝐧𝐡
  🍚🍚🍚𝐠𝐚̣𝐨 đ𝐚̂̀𝐲 𝐥𝐮
  🍙🍙🍙𝐦𝐮𝐨̂́𝐢 đ𝐚̂̀𝐲 𝐡𝐮̉
  💰💰💰𝐯𝐚̀𝐧𝐠 𝐛𝐚̣𝐜 đ𝐚̂̀𝐲 𝐭𝐮̉
  👮🏻👮🏻👮🏻𝐬𝐮̛́𝐜 𝐤𝐡𝐨𝐞̉ đ𝐚̂̀𝐲 đ𝐮̉
  🎉🎉🎉𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢.
      .+””-.,_,.-“”+.
   #”-._Happy_.-“#
   *•++. New .++•*
        +-.Year.-+
           “-._.-“
  “-..-*”-..𝟮𝟬𝟮𝟯.-*”-..-“
  🌺𝐂𝐮𝐧𝐠 𝐜𝐡𝐮́𝐜 𝐭𝐚̂𝐧 𝐧𝐢𝐞̂𝐧,🎉
  🌹𝐒𝐮̛́𝐜 𝐤𝐡𝐨𝐞̉ 𝐯𝐨̂ 𝐛𝐢𝐞̂𝐧,💪
  🌸𝐭𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐥𝐢𝐞̂𝐧 𝐦𝐢𝐞̂𝐧,♐
  🌞𝐇𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐭𝐫𝐢𝐞̂̀𝐧 𝐦𝐢𝐞̂𝐧 💖
  🍀𝐓𝐮́𝐢 𝐥𝐮𝐨̂𝐧 đ𝐚̂̀𝐲 𝐭𝐢𝐞̂̀𝐧 💰 ,💵
  💐𝐒𝐮𝐧𝐠 𝐬𝐮̛𝐨̛́𝐧𝐠 𝐧𝐡𝐮̛ 𝐭𝐢𝐞̂𝐧,😇
  ✨✨✨𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐧𝐚̆𝐦 𝐌𝐨̛́𝐢.😘
   .:!|!:.__.:!|!:.__.:!|!:.
  “::𝐍𝐚𝐦 𝐌𝐨𝐢 𝟮𝟬𝟮𝟯 ::”
     __”‘-!|!-“”-!|!-‘”__
  💖𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐍𝐚̆𝐦 𝐌𝐨̛́𝐢…💖
  💖𝐀̂́𝐦 𝐚́𝐩 𝐛𝐞̂𝐧 𝐜𝐚̣𝐧𝐡 𝐧𝐮̛̉𝐚 𝐭𝐫𝐚́𝐢 𝐭𝐢𝐦…💖
  💖𝐕𝐮𝐢 𝐯𝐞̉ 𝐛𝐞̂𝐧 𝐜𝐚̣𝐧𝐡 𝐧𝐮̛̃𝐚 𝐜𝐨̀𝐧 𝐥𝐚̣𝐢 𝐭𝐫𝐨̣𝐧 𝐯𝐞̣𝐧…..💖
  💖𝐇𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐛𝐞̂𝐧 𝐜𝐚̣𝐧𝐡 𝐦𝐨̣̂𝐭 𝐛𝐨̛̀ 𝐯𝐚𝐢 𝐚𝐢 đ𝐨́….💖
  💖𝐌𝐨̣̂𝐭 đ𝐞̂𝐦 𝐜𝐡𝐨 𝐧𝐠𝐚̀𝐲 𝐦𝐚𝐢 𝐯𝐚̀ 𝐦𝐨̣̂𝐭 𝐤𝐡𝐚̆́𝐜 𝐜𝐡𝐨 𝐦𝐚̃𝐢 𝐦𝐚̃𝐢….💖
  𝐀𝐧 𝐊𝐡𝐚𝐧𝐠 – 𝐓𝐡𝐢𝐧𝐡 𝐯𝐮𝐨𝐧𝐠!🌻🌻🌻`,attachment: fs.createReadStream(__dirname + "/cache/31.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/31.jpg")); 
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/31.jpg")).on("close",() => callback());
     };