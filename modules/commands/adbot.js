module.exports.config = {
    name: "ad",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Resident Evil",
    description: "Xem thông tin admin, user, vv...",
    commandCategory: "admin",
    usages: "",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args,Currencies}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    var uid = event.senderID;
    const money = (await Currencies.getData(uid)).money;
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`🌸 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝘀𝗮𝘂 🌸:\n\n${prefix}${this.config.name} user => nó sẽ lấy thông tin của chính bạn.\n\n${prefix}${this.config.name} user @[Tag] => nó sẽ lấy thông tin người bạn tag.\n\n${prefix}${this.config.name} box => nó sẽ lấy thông tin box của bạn (số thành viên, djt nhau,...)\n\n${prefix}${this.config.name} user box [ uid | tid ]:\n\n${prefix}${this.config.name} admin => Thông tin cá nhân của Admin Bot`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "tắt" : sex == true ? "bật" : "Kh";
       if(!imgg) api.sendMessage(`👀 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.threadName}\n🌸 𝗧𝗜𝗗: ${args[1]}\n🦋 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n🐤 𝗘𝗺𝗼𝗷𝗶: ${threadInfo.emoji}\n🌈 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻: \n» ${threadInfo.participantIDs.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀ ${threadInfo.adminIDs.length} 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻.\n» 𝗚𝗼̂̀𝗺 ${nam} 𝗻𝗮𝗺 𝘃𝗮̀ ${nu} 𝗻𝘂̛̃.\n» 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`👀 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.threadName}\n🌸 𝗧𝗜𝗗: ${args[1]}\n🦋 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n🐤 𝗘𝗺𝗼𝗷𝗶: ${threadInfo.emoji}\n🌈 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻: \n» ${threadInfo.participantIDs.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀ ${threadInfo.adminIDs.length} 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻.\n» 𝗚𝗼̂̀𝗺 ${nam} 𝗻𝗮𝗺 𝘃𝗮̀ ${nu} 𝗻𝘂̛̃.\n» 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "tắt" : sex == true ? "bật" : "Kh";
          if(!img) api.sendMessage(`👀 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.threadName}\n🌸 𝗧𝗜𝗗: ${args[1]}\n🦋 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n🐤 𝗘𝗺𝗼𝗷𝗶: ${threadInfo.emoji}\n🌈 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻: \n» ${threadInfo.participantIDs.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀ ${threadInfo.adminIDs.length} 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻.\n» 𝗚𝗼̂̀𝗺 ${nam} 𝗻𝗮𝗺 𝘃𝗮̀ ${nu} 𝗻𝘂̛̃.\n» 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`👀 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.threadName}\n🌸 𝗧𝗜𝗗: ${args[1]}\n🦋 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n🐤 𝗘𝗺𝗼𝗷𝗶: ${threadInfo.emoji}\n🌈 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻: \n» ${threadInfo.participantIDs.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀ ${threadInfo.adminIDs.length} 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻.\n» 𝗚𝗼̂̀𝗺 ${nam} 𝗻𝗮𝗺 𝘃𝗮̀ ${nu} 𝗻𝘂̛̃.\n» 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
               if (args.length == 0) return api.sendMessage(`🌸 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝘀𝗮𝘂 🌸:\n\n${prefix}${this.config.name} user => nó sẽ lấy thông tin của chính bạn.\n\n${prefix}${this.config.name} user @[Tag] => nó sẽ lấy thông tin người bạn tag.\n\n${prefix}${this.config.name} box => nó sẽ lấy thông tin box của bạn (số thành viên, djt nhau,...)\n\n${prefix}${this.config.name} user box [ uid | tid ]:\n\n${prefix}${this.config.name} admin => Thông tin cá nhân của Admin Bot`, event.threadID, event.messageID);
    if (args[0] == "admin") {
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

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "không !" : data[id].isFriend == true ? "có !" : "Đéo";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "ttt";
    var callback = () => api.sendMessage({body:`👤 𝗧𝗲̂𝗻: ${name}` + `\n🔗 𝗟𝗶𝗻𝗸: ${url}` + `\n🌸 𝗨𝗜𝗗: ${id}\n🦋 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender}\n❄️ 𝗞𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝗕𝗼𝘁: ${b}\n💸 𝗠𝗼𝗻𝗲𝘆: ${money}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "không !" : data[mentions].isFriend == true ? "có !" : "Đéo";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "ttt";
    var callback = () => api.sendMessage({body:`👤 𝗧𝗲̂𝗻: ${name}` + `\n🔗 𝗟𝗶𝗻𝗸: ${url}` + `\n🌸 𝗨𝗜𝗗: ${id}\n🦋 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender}\n❄️ 𝗞𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝗕𝗼𝘁: ${b}\n💸 𝗠𝗼𝗻𝗲𝘆: ${money}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "không !" : data[args[1]].isFriend == true ? "có !" : "Đéo";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "ttt";
    var callback = () => api.sendMessage({body:`👤 𝗧𝗲̂𝗻: ${name}` + `\n🔗 𝗟𝗶𝗻𝗸: ${url}` + `\n🌸 𝗨𝗜𝗗: ${id}\n🦋 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender}\n❄️ 𝗞𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝗕𝗼𝘁: ${b}\n💸 𝗠𝗼𝗻𝗲𝘆: ${money}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
   
    
     }


      }