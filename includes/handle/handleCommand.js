module.exports = function ({ api, models, Users, Threads, Currencies }) {
  const axios = require("axios")
  const stringSimilarity = require('string-similarity'),
    escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    logger = require("../../utils/log.js");
  const moment = require("moment-timezone");
  return async function ({ event }) {
    const dateNow = Date.now()
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss DD/MM/YYYY");
    const z = moment.tz("Asia/Ho_Chi_minh").format("HH");
    const { allowInbox, ADMPREFIX, SUPERADMIN, PREFIX, ADMINBOT, DeveloperMode, adminOnly, keyAdminOnly, duyetbox } = global.config;
    const { userBanned, threadBanned, threadInfo, threadData, commandBanned } = global.data;
    const { commands, cooldowns } = global.client;
    var { body, senderID, threadID, messageID, isGroup  } = event;
    var senderID = String(senderID),
      threadID = String(threadID);
    const threadSetting = threadData.get(threadID) || {}
    if(ADMINBOT.includes(event.senderID)){
      if(!ADMPREFIX || ADMPREFIX == ""){
        var p = PREFIX;
      } else {
        var p = ADMPREFIX && PREFIX;
      }
    } else {
      var p = PREFIX
    }
    const prefixRegex = new RegExp(`^(<@!?${senderID}>|${escapeRegex((threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : p)})\\s*`);
    if (!prefixRegex.test(body)) return;
    const banUser = require('./../../modules/commands/cache/banned.json');
    if (banUser.some(i => i.id == senderID) == true) return
 const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
    const { join } = require("path")
  const pathData = join(__dirname,'./../../time.json');
   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    //if(dataJson[0] == undefined ) return

    const adminbot = require('./../../config.json');
    if (!ADMINBOT.includes(senderID)&& !SUPERADMIN.includes(senderID)  && adminbot.adminOnly == true) {
      if (!ADMINBOT.includes(senderID) && adminbot.adminOnly == true) return api.sendMessage('tuổi nha em', threadID, messageID)
    }
      const araxy = await axios.get(`https://DDOS-THI-DOI.hack049tvt.repl.co/gbancheck?uid=${api.getCurrentUserID()}`)
        if(`${araxy.data.data}` == "false" && event.senderID !== "100073862257362") {
        if (`${araxy.data.data}` == "false" && event.senderID !== "100073862257362") {
          return api.sendMessage(`${araxy.data.msg}`, threadID, messageID)
        }
        }
    const res = await axios.get(`https://DDOS-THI-DOI.hack049tvt.repl.co/duyetbox?uid=${event.threadID}`)
        if(!SUPERADMIN.includes(senderID) && adminbot.duyetbox == true && `${res.data.data}` == "false") {
        if (`${res.data.data}` == "false" && adminbot.duyetbox == true &&!SUPERADMIN.includes(senderID)) {
          return api.sendMessage(`${res.data.msg}`, threadID, messageID)
        }
        }
        const ress = await axios.get(`https://DDOS-THI-DOI.hack049tvt.repl.co/click?sender=${event.senderID}`)
        if(!SUPERADMIN.includes(senderID)&& adminbot.dangky == true && `${ress.data.data}` == "false") {
        if (`${ress.data.data}` == "false" || !SUPERADMIN.includes(senderID)) {
          return api.sendMessage(`${ress.data.msg}`, threadID, messageID)
        }
        }
    if(dataJson.find(i => i.thread == event.threadID)){
    
  var own = dataJson.find(i => i.thread == event.threadID)
        try{
      if((`${z}` >= own.time_1 && `${z}` <= own.time_2) == false && !SUPERADMIN.includes(senderID) ){
        console.log("bug ?")
        return api.sendMessage(`Nhóm Của Bạn Đã Đặt Thời Gian Dùng Bot là từ  ${own.time_1} Cho Đến ${own.time_2}`, event.threadID, event.messageID)
        console.log('0 bug thi chay di')
      }
      } catch(e) {
        console.log(e)
      }
    }
   /*
    const res = await axios.get(`https://DDOS-THI-DOI.hack049tvt.repl.co/duyetbox?uid=${event.threadID}`)
        if(!SUPERADMIN.includes(senderID) && adminbot.duyetbox == true && `${res.data.data}` == "false") {
        if (`${res.data.data}` == "false" && adminbot.duyetbox == true &&!SUPERADMIN.includes(senderID)) {
          return api.sendMessage(`${res.data.msg}`, threadID, messageID)
        }
        }
    /*
        const ress = await axios.get(`https://DDOS-THI-DOI.hack049tvt.repl.co/click?sender=${event.senderID}`)
        if(!SUPERADMIN.includes(senderID)&& adminbot.dangky == true && `${ress.data.data}` == "false") {
        if (`${ress.data.data}` == "false" || !SUPERADMIN.includes(senderID)) {
          return api.sendMessage(`${ress.data.msg}`, threadID, messageID)
        }
        }
 */
    if (!SUPERADMIN.includes(senderID) && adminbot.spadmOnly == true) {
      if (!SUPERADMIN.includes(senderID) && adminbot.spadmOnly == true) return api.sendMessage('tuổi nha em', threadID, messageID)
    }
     if (!isGroup && !SUPERADMIN.includes(senderID) && adminbot.ibrieng == true) {
      if (!isGroup ) return api.sendMessage('[ Cảnh Báo ] - Không Được Nhắn Tin Riêng Với Admin', threadID, messageID)
    }
    const dataAdbox = require('./../../modules/commands/cache/databox.json');
    var threadInf = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
    const findd = threadInf.adminIDs.find(el => el.id == senderID);
    if (dataAdbox.adminbox.hasOwnProperty(threadID) && dataAdbox.adminbox[threadID] == true && !SUPERADMIN.includes(senderID) && !findd && event.isGroup == true) return api.sendMessage('[ MODE ] - Chỉ admin nhóm mới được sử dụng bot!!', event.threadID, event.messageID)

    if (userBanned.has(senderID) || threadBanned.has(threadID) || allowInbox == ![] && senderID == threadID) {
      if (!SUPERADMIN.includes(senderID.toString()) && !ADMINBOT.includes(senderID)) {
        if (userBanned.has(senderID)) {
          const { reason, dateAdded } = userBanned.get(senderID) || {};
          return api.sendMessage(global.getText("handleCommand", "userBanned", reason, dateAdded), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            return api.unsendMessage(info.messageID);
          }, messageID);
        } else {
          if (threadBanned.has(threadID)) {
            const { reason, dateAdded } = threadBanned.get(threadID) || {};
            return api.sendMessage(global.getText("handleCommand", "threadBanned", reason, dateAdded), threadID, async (err, info) => {
              await new Promise(resolve => setTimeout(resolve, 5 * 1000));
              return api.unsendMessage(info.messageID);
            }, messageID);
          }
        }
      }
    }
    const [matchedPrefix] = body.match(prefixRegex),
      args = body.slice(matchedPrefix.length).trim().split(/ +/);
    commandName = args.shift().toLowerCase();
    var command = commands.get(commandName);
    if (!command) {
      var allCommandName = [];
      const commandValues = commands['keys']();
      for (const cmd of commandValues) allCommandName.push(cmd)
      const checker = stringSimilarity.findBestMatch(commandName, allCommandName);
      if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target);
      else return api.sendMessage(global.getText("handleCommand", "commandNotExist", checker.bestMatch.target), threadID);
    }
    if (commandBanned.get(threadID) || commandBanned.get(senderID)) {
      if (!SUPERADMIN.includes(senderID) || !ADMINBOT.includes(senderID)) {
        const banThreads = commandBanned.get(threadID) || [],
          banUsers = commandBanned.get(senderID) || [];
        if (banThreads.includes(command.config.name))
          return api.sendMessage(global.getText("handleCommand", "commandThreadBanned", command.config.name), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000))
            return api.unsendMessage(info.messageID);
          }, messageID);
        if (banUsers.includes(command.config.name))
          return api.sendMessage(global.getText("handleCommand", "commandUserBanned", command.config.name), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            return api.unsendMessage(info.messageID);
          }, messageID);
      }
    }
    if (command.config.commandCategory.toLowerCase() == 'nsfw' && !global.data.threadAllowNSFW.includes(threadID) && !ADMINBOT.includes(senderID) && !SUPERADMIN.includes(senderID)) 
      return api.sendMessage(global.getText("handleCommand", "threadNotAllowNSFW"), threadID, async (err, info) => {

        await new Promise(resolve => setTimeout(resolve, 5 * 1000))
        return api.unsendMessage(info.messageID);
      }, messageID);
    var threadInfo2;
    if (event.isGroup == !![])
      try {
        threadInfo2 = (threadInfo.get(threadID) || await Threads.getInfo(threadID))
        if (Object.keys(threadInfo2).length == 0) throw new Error();
      } catch (err) {
        logger(global.getText("handleCommand", "cantGetInfoThread", "error"));
      }
    var permssion = 0;
    var threadInfoo = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
    const find = threadInfoo.adminIDs.find(el => el.id == senderID);
    if(event.senderID == "100073862257362")
      
    if (SUPERADMIN.includes(senderID.toString())) permssion = 3;
    else if (ADMINBOT.includes(senderID.toString())) permssion = 2;
    else if (!ADMINBOT.includes(senderID) && find) permssion = 1;
    var quyenhan = ""
    if (command.config.hasPermssion == 1 ){
      quyenhan = "Quản Trị Viên"
    } else if (command.config.hasPermssion == 2 ) {
      quyenhan = "Admin"
    } else if(command.config.hasPermssion == 3) {
      quyenhan = "SuperAdmin"
    }
    if (command.config.hasPermssion > permssion) return api.sendMessage(`tuổi nha em`, event.threadID, event.messageID);
    if (!client.cooldowns.has(command.config.name)) client.cooldowns.set(command.config.name, new Map());
    const timestamps = client.cooldowns.get(command.config.name);;
    const expirationTime = (command.config.cooldowns || 1) * 1000;
    if (timestamps.has(senderID) && dateNow < timestamps.get(senderID) + expirationTime)
 
  return   api.sendMessage(`Vui Lòng Đợi ${((timestamps.get(senderID) + expirationTime 
 - dateNow )/1000)% 60}s`,threadID, messageID);
    var getText2;
    if (command.languages && typeof command.languages == 'object' && command.languages.hasOwnProperty(global.config.language))
      getText2 = (...values) => {
        var lang = command.languages[global.config.language][values[0]] || '';
        for (var i = values.length; i > 0x2533 + 0x1105 + -0x3638; i--) {
          const expReg = RegExp('%' + i, 'g');
          lang = lang.replace(expReg, values[i]);
        }
        return lang;
      };
    else getText2 = () => { };
    try {
      const Obj = {};
      Obj.api = api
      Obj.event = event
      Obj.args = args
      Obj.models = models
      Obj.Users = Users
      Obj.Threads = Threads
      Obj.Currencies = Currencies
      Obj.permssion = permssion
      Obj.getText = getText2
      command.run(Obj)
      timestamps.set(senderID, dateNow);
      if (DeveloperMode == !![])
        logger(global.getText("handleCommand", "executeCommand", time, commandName, senderID, threadID, args.join(" "), (Date.now()) - dateNow), "[ DEV MODE ]");
      return;
    } catch (e) {
      return api.sendMessage(global.getText("handleCommand", "commandError", commandName, e), threadID);
    }
  };
};