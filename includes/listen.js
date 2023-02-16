module.exports = function({ api, models }) {
  setInterval(function() {
    if (global.config.NOTIFICATION) {
      require("./handle/handleNotification.js")({ api });
    }
  }, 1000 * 60);
  const Users = require("./controllers/users")({ models, api });
  const Threads = require("./controllers/threads")({ models, api });
  const Currencies = require("./controllers/currencies")({ models });
  const logger = require("../utils/log.js");
  const fs = require("fs");
  const moment = require('moment-timezone');
  const axios = require("axios");
  var day = moment.tz("Asia/Ho_Chi_Minh").day();
  const checkttDataPath = __dirname + '/../modules/commands/_checktt/';
  setInterval(async () => {
    const day_now = moment.tz("Asia/Ho_Chi_Minh").day();
    if (day != day_now) {
      day = day_now;
      const checkttData = fs.readdirSync(checkttDataPath);
      console.log('→ Check tương tác: Ngày Mới');
      checkttData.forEach(async (checkttFile) => {
        const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
        let storage = [], count = 1;
        for (const item of checktt.day) {
          const userName = await Users.getNameUser(item.id) || 'Facebook User';
          const itemToPush = item;
          itemToPush.name = userName;
          storage.push(itemToPush);
        };
        storage.sort((a, b) => {
          if (a.count > b.count) {
            return -1;
          }
          else if (a.count < b.count) {
            return 1;
          } else {
            return a.name.localeCompare(b.name);
          }
        });
        let checkttBody = '===[⚜️] Top 10 Tương Tác Ngày [⚜️]===\n';
        checkttBody += storage.slice(0, 10).map(item => {
          return `${count++}. ${item.name} (${item.count})`;
        }).join('\n');
        api.sendMessage(checkttBody, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');

        checktt.day.forEach(e => {
          e.count = 0;
        });
        checktt.time = day_now;

        fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
      });
      if (day_now == 1) {
        console.log('→ Check tương tác: Tuần Mới');
        checkttData.forEach(async (checkttFile) => {
          const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
          let storage = [], count = 1;
          for (const item of checktt.week) {
            const userName = await Users.getNameUser(item.id) || 'Facebook User';
            const itemToPush = item;
            itemToPush.name = userName;
            storage.push(itemToPush);
          };
          storage.sort((a, b) => {
            if (a.count > b.count) {
              return -1;
            }
            else if (a.count < b.count) {
              return 1;
            } else {
              return a.name.localeCompare(b.name);
            }
          });
          let checkttBody = '===[⚜️] Top 10 Tương Tác Tuần [⚜️]===\n';
          checkttBody += storage.slice(0, 10).map(item => {
            return `${count++}. ${item.name} (${item.count})`;
          }).join('\n');
          api.sendMessage(checkttBody, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');
          checktt.week.forEach(e => {
            e.count = 0;
          });

          fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
        })
      }
      global.client.sending_top = false;
    }
  }, 1000 * 10);


  //////////////////////////////////////////////////////////////////////
  //========= Push all variable from database to environment =========//
  //////////////////////////////////////////////////////////////////////

  (async function() {
    try {
      logger(global['getText']('listen', 'startLoadEnvironment'), 'DATA');
      let _0xf770x1 = await Threads['getAll'](),
        _0xf770x2 = await Users['getAll'](['userID', 'name', 'data']),
        _0xf770x3 = await Currencies['getAll'](['userID']);
      for (const _0xf770x4 of _0xf770x1) {
        const _0xf770x5 = String(_0xf770x4['threadID']);
        global['data']['allThreadID']['push'](_0xf770x5), global['data']['threadData']['set'](_0xf770x5, _0xf770x4['data'] || {}), global['data']['threadInfo']['set'](_0xf770x5, _0xf770x4['threadInfo'] || {});
        if (_0xf770x4['data'] && _0xf770x4['data']['banned'] == !![]) {
          global['data']['threadBanned']['set'](_0xf770x5, {
            '\x72\x65\x61\x73\x6F\x6E': _0xf770x4['data']['reason'] || '',
            '\x64\x61\x74\x65\x41\x64\x64\x65\x64': _0xf770x4['data']['dateAdded'] || ''
          })
        };
        if (_0xf770x4['data'] && _0xf770x4['data']['commandBanned'] && _0xf770x4['data']['commandBanned']['length'] != 0) {
          global['data']['commandBanned']['set'](_0xf770x5, _0xf770x4['data']['commandBanned'])
        };
        if (_0xf770x4['data'] && _0xf770x4['data']['NSFW']) {
          global['data']['threadAllowNSFW']['push'](_0xf770x5)
        }
      };
      logger['loader'](global['getText']('listen', 'loadedEnvironmentThread'));
      for (const _0xf770x6 of _0xf770x2) {
        const _0xf770x7 = String(_0xf770x6['userID']);
        global['data']['allUserID']['push'](_0xf770x7);
        if (_0xf770x6['name'] && _0xf770x6['name']['length'] != 0) {
          global['data']['userName']['set'](_0xf770x7, _0xf770x6['name'])
        };
        if (_0xf770x6['data'] && _0xf770x6['data']['banned'] == 1) {
          global['data']['userBanned']['set'](_0xf770x7, {
            '\x72\x65\x61\x73\x6F\x6E': _0xf770x6['data']['reason'] || '',
            '\x64\x61\x74\x65\x41\x64\x64\x65\x64': _0xf770x6['data']['dateAdded'] || ''
          })
        };
        if (_0xf770x6['data'] && _0xf770x6['data']['commandBanned'] && _0xf770x6['data']['commandBanned']['length'] != 0) {
          global['data']['commandBanned']['set'](_0xf770x7, _0xf770x6['data']['commandBanned'])
        }
      };
      for (const _0xf770x8 of _0xf770x3) {
        global['data']['allCurrenciesID']['push'](String(_0xf770x8['userID']))
      };
      logger['loader'](`${'BOT TVT B\u1EAET \u0110\u1EA6U NH\u1EACN L\u1EC6NH'}`)
    } catch (error) {
      return logger['loader'](global['getText']('listen', 'failLoadEnvironment', error), 'error')
    }
  }());
  logger(`${'\n=====================================================================\n━                                                                   ━\n━                                                                   ━\n━       ████████╗██╗░░░██╗░█████╗░███╗░░██╗  ██████╗░███████╗       ━\n━       ╚══██╔══╝██║░░░██║██╔══██╗████╗░██║  ██╔══██╗╚════██║       ━\n━       ░░░██║░░░██║░░░██║███████║██╔██╗██║  ██║░░██║░░███╔═╝       ━\n━       ░░░██║░░░██║░░░██║██╔══██║██║╚████║  ██║░░██║██╔══╝░░       ━\n━       ░░░██║░░░╚██████╔╝██║░░██║██║░╚███║  ██████╔╝███████╗       ━\n━       ░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝  ╚═════╝░╚══════╝       ━\n━                                                                   ━\n━       * Information about me                                      ━\n━                                                                   ━\n━       * Mirai V2 - Version: 1.0.0                                 ━\n━       * Bot Mod By: tuantvtvip.NO1                                ━\n━       * Run And Bot Management: tuanvip                           ━\n━       * Zalo: 08361901207                                         ━\n━       * Facebook: Houtarou(Tuân vippro)                           ━\n━       * Gmail: hacktannattatca@gmail.com                          ━\n━                                                                   ━\n━                                                                   ━\n=====================================================================\n'}`, 'TVT');
  logger(`${''}${global['config']['ADMINBOT']}${' - TVT'}`, 'ADMINBOT INFO');
  logger(`${''}${api['getCurrentUserID']()}${' - \xBB '}${global['config']['PREFIX']}${' \xAB \u2022 '}${(!global['config']['BOTNAME']) ? 'This bot was made by TVT' : global['config']['BOTNAME']}${''}`, 'BOT INFO')

  ///////////////////////////////////////////////
  //========= Require all handle need =========//
  //////////////////////////////////////////////

  const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
  const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
  const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
  const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
  const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
  const handleRefresh = require("./handle/handleRefresh")({ api, models, Users, Threads, Currencies });
  const handleCreateDatabase = require("./handle/handleCreateDatabase")({ api, Threads, Users, Currencies, models });
  //logger hiện console
  logger.loader(`Ping load toàn bộ commands và events • ${Date.now() - global.client.timeStart}ms •`);
  //DEFINE DATLICH PATH
  const datlichPath = __dirname + "/../modules/commands/cache/datlich.json";

  //FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ, CRE: DUNGUWU
  const monthToMSObj = {
    1: 31 * 24 * 60 * 60 * 1000,
    2: 28 * 24 * 60 * 60 * 1000,
    3: 31 * 24 * 60 * 60 * 1000,
    4: 30 * 24 * 60 * 60 * 1000,
    5: 31 * 24 * 60 * 60 * 1000,
    6: 30 * 24 * 60 * 60 * 1000,
    7: 31 * 24 * 60 * 60 * 1000,
    8: 31 * 24 * 60 * 60 * 1000,
    9: 30 * 24 * 60 * 60 * 1000,
    10: 31 * 24 * 60 * 60 * 1000,
    11: 30 * 24 * 60 * 60 * 1000,
    12: 31 * 24 * 60 * 60 * 1000
  };
  const checkTime = (time) => new Promise((resolve) => {
    time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
    const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
    if (time[1] > 12 || time[1] < 1) resolve("Tháng của bạn có vẻ không hợp lệ");
    if (time[0] > getDayFromMonth(time[1]) || time[0] < 1) resolve("Ngày của bạn có vẻ không hợp lệ");
    if (time[2] < 2022) resolve("Bạn sống ở kỷ nguyên nào thế?");
    if (time[3] > 23 || time[3] < 0) resolve("Giờ của bạn có vẻ không hợp lệ");
    if (time[4] > 59 || time[3] < 0) resolve("Phút của bạn có vẻ không hợp lệ");
    if (time[5] > 59 || time[3] < 0) resolve("Giây của bạn có vẻ không hợp lệ");
    yr = time[2] - 1970;
    yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
    yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
    monthToMS = 0;
    for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
    if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
    dayToMS = time[0] * 24 * 60 * 60 * 1000;
    hourToMS = time[3] * 60 * 60 * 1000;
    minuteToMS = time[4] * 60 * 1000;
    secondToMS = time[5] * 1000;
    oneDayToMS = 24 * 60 * 60 * 1000;
    timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
    resolve(timeMs);
  });
  const tenMinutes = 10 * 60 * 1000;

  const checkAndExecuteEvent = async () => {

    /*smol check*/
    if (!fs.existsSync(datlichPath)) fs.writeFileSync(datlichPath, JSON.stringify({}, null, 4));
    var data = JSON.parse(fs.readFileSync(datlichPath));

    //GET CURRENT TIME
    var timeVN = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY_HH:mm:ss');
    timeVN = timeVN.split("_");
    timeVN = [...timeVN[0].split("/"), ...timeVN[1].split(":")];

    let temp = [];
    let vnMS = await checkTime(timeVN);
    const compareTime = e => new Promise(async (resolve) => {
      let getTimeMS = await checkTime(e.split("_"));
      if (getTimeMS < vnMS) {
        if (vnMS - getTimeMS < tenMinutes) {
          data[boxID][e]["TID"] = boxID;
          temp.push(data[boxID][e]); delete data[boxID][e];
        } else delete data[boxID][e];
        fs.writeFileSync(datlichPath, JSON.stringify(data, null, 4));
      };
      resolve();
    })

    await new Promise(async (resolve) => {
      for (boxID in data) {
        for (e of Object.keys(data[boxID])) await compareTime(e);
      }
      resolve();
    })
    for (el of temp) {
      try {
        var all = (await Threads.getInfo(el["TID"])).participantIDs;
        all.splice(all.indexOf(api.getCurrentUserID()), 1);
        var body = el.REASON || "MỌI NGƯỜI ƠI", mentions = [], index = 0;

        for (let i = 0; i < all.length; i++) {
          if (i == body.length) body += " ‍ ";
          mentions.push({
            tag: body[i],
            id: all[i],
            fromIndex: i - 1
          });
        }
      } catch (e) { return console.log(e); }
      var out = {
        body, mentions
      }
      if ("ATTACHMENT" in el) {
        out.attachment = [];
        for (a of el.ATTACHMENT) {
          let getAttachment = (await axios.get(encodeURI(a.url), { responseType: "arraybuffer" })).data;
          fs.writeFileSync(__dirname + `/../modules/commands/cache/${a.fileName}`, Buffer.from(getAttachment, 'utf-8'));
          out.attachment.push(fs.createReadStream(__dirname + `/../modules/commands/cache/${a.fileName}`));
        }
      }
      console.log(out);
      if ("BOX" in el) await api.setTitle(el["BOX"], el["TID"]);
      api.sendMessage(out, el["TID"], () => ("ATTACHMENT" in el) ? el.ATTACHMENT.forEach(a => fs.unlinkSync(__dirname + `/../modules/commands/cache/${a.fileName}`)) : "");
    }

  }
  setInterval(checkAndExecuteEvent, tenMinutes / 10);

  //////////////////////////////////////////////////
  //========= Send event to handle need =========//
  /////////////////////////////////////////////////

  return async (event) => {
    if (event.type == "change_thread_image") api.sendMessage(`[⚜️] 💗𝓬𝓾𝓽𝓮💗 [⚜️] - ${event.snippet}`, event.threadID);
    let data = JSON.parse(fs.readFileSync(__dirname + "/../modules/commands/cache/approvedThreads.json"));
    let adminBot = global.config.ADMINBOT;
    let ndhBot = global.config.NDH;
    let threadInfo = await api.getThreadInfo(event.threadID);
    let threadName = threadInfo.threadName;
    let pendingPath = __dirname + "/../modules/commands/cache/pendingdThreads.json";
    if (!data.includes(event.threadID) && !adminBot.includes(event.senderID) && !ndhBot.includes(event.senderID)) {

      //getPrefix
      const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
      const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
      //check body

      if (event.body && event.body == `${prefix}request`) {
        adminBot.forEach(e => {
          api.sendMessage(`[⚜️] → Tên: ${threadName}\n[⚜️] → ID: ${event.threadID}\n[⚜️] → Đã yêu cầu được duyệt`, e);
        })
        return api.sendMessage(`[⚜️] 💗𝓬𝓾𝓽𝓮💗 [⚜️] - Đã gửi yêu cầu đến Admin tuantvt📌`, event.threadID, () => {
          let pendingData = JSON.parse(fs.readFileSync(pendingPath));
          if (!pendingData.includes(event.threadID)) {
            pendingData.push(event.threadID);
            fs.writeFileSync(pendingPath, JSON.stringify(pendingData));
          }
        });
      }
      // if (event.threadID == 7349457131746039) console.log(prefix);
      if (event.body && event.body.startsWith(prefix)) return api.sendMessage(`[⚜️] 💗𝓬𝓾𝓽𝓮💗 [⚜️] - Nhóm của bạn chưa được duyệt để sử dụng\n[⚜️] → Để gửi yêu cầu duyệt hãy dùng: ${prefix}request`, event.threadID);



    };
    switch (event.type) {
      //<--Thay đổi ảnh nhóm-->//
      case "change_thread_image":
        if (global.config.notiGroup) {
          var msg = '[⚜️] CẬP NHẬT NHÓM [⚜️]\n'
          msg += event.snippet
          if (event.author == api.getCurrentUserID()) {
            msg = msg.replace('Bạn', global.config.BOTNAME)
          }
          api.sendMessage(msg, event.threadID);
        }
        break;
      //<--Nhận, xử lí dữ liệu-->//
      case "message":
      case "message_reply":
      case "message_unsend":
        handleCreateDatabase({ event });
        handleCommand({ event });
        handleReply({ event });
        handleCommandEvent({ event });

        break;
      //<--Nhận tin nhắn, thông báo thay đổi nhóm-->//
      case "event":
        handleEvent({ event });
        handleRefresh({ event });
        if (global.config.notiGroup) {
          var msg = '[⚜️] CẬP NHẬT NHÓM [⚜️]\n'
          msg += event.logMessageBody
          if (event.author == api.getCurrentUserID()) {
            msg = msg.replace('[❗] Bạn', global.config.BOTNAME)
          }
          api.sendMessage(msg, event.threadID);
        }
        break;
      //<--Nhận cảm xúc-->//
      case "message_reaction":
        var { iconUnsend } = global.config
        if (iconUnsend.status && event.senderID == api.getCurrentUserID() && event.reaction == iconUnsend.icon) {
          api.unsendMessage(event.messageID)
        }
        handleReaction({ event });
        break;
      default:
        break;
    }
  };
};