module.exports.config = {
  name: "bannertt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NDThangVsJudas",
  description: "",
  commandCategory: "tạo ảnh",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args, Users }) => {
 const axios = require('axios')
 const fs = require('fs-extra')
 if(!fs.existsSync(__dirname+'/cache/SVN-Arial Bold.ttf')) { 
      let getfont = (await axios.get(`https://github.com/ndthang2204/NDThanguwu/raw/main/SVN-Arial%20Bold.ttf`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SVN-Arial Bold.ttf", Buffer.from(getfont, "utf-8"));
    };
     if(!fs.existsSync(__dirname+'/cache/SVN-Rocker_0.ttf')) { 
      let getfont1 = (await axios.get(`https://github.com/ndthang2204/NDThanguwu/blob/main/SVN-Rocker_0.ttf?raw=true`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SVN-Rocker_0.ttf", Buffer.from(getfont1, "utf-8"));
    };
  if (event.type == "message_reply") {
    var uid = event.messageReply.senderID;
    var name = (await Users.getData(uid)).name;
  }
  else {

 var name = (await Users.getData(event.senderID)).name;
  }
 const { loadImage, createCanvas, registerFont } = require("canvas");
 let path = __dirname + `/cache/${event.senderID}.png`;
 let bg = (await axios.get(`https://i.imgur.com/tYJdS8Q.png`, {responseType: "arraybuffer" })).data;
 fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
 let bgBase = await loadImage(path);
 let canvas = createCanvas(bgBase.width, bgBase.height);
 let ctx = canvas.getContext("2d");
 ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
 registerFont(__dirname+`/cache/SVN-Rocker_0.ttf`, {
        family: "SVN-Rocker"
    });
  registerFont(__dirname+`/cache/SVN-Arial Bold.ttf`, {
        family: "SVN-Arial"
    });
   // ctx.font = "50px SVN-Arial";
   //   ctx.fillStyle = "#fff";
   //   ctx.textAlign = "center";
   //   ctx.fillText("https://facebook.com/" + event.senderID, canvas.width /2 , bgBase.height / 2 + 250)
   ctx.save()
   const widthName = ctx.measureText(name).width/2;
 ctx.font = "80px SVN-Rocker";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 13;
    ctx.fillText(name, widthName + 950, bgBase.height / 2 + 180);
    ctx.save()
        const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
       var msg =  {attachment: fs.createReadStream(path)}
return api.sendMessage(msg,  event.threadID, () => {
    fs.unlinkSync(path),
        event.messageID
})
  }