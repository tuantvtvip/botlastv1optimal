module.exports.config = {
  name: "out3",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "manhG",
  description: "chỉ là rời nhóm theo ID thôi",
  commandCategory: "Admin",
  usages: "[ID nhóm] [Nội dung]",
  cooldowns: 5,
  dependencies: "",

};

module.exports.run = async function ({ api, Users, Threads, event, args }) {
  if (event.senderID != 100088715185886) return api.sendMessage(`svat❤️`, event.threadID, event.messageID)
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var idbox = args[0];
  var reason = args.slice(1);
  if (!args[0]) return api.sendMessage(`${api.getCurrentUserID()}`, () =>
    api.sendMessage(`😭𝐓𝐚̣𝐦 𝐁𝐢𝐞̣̂𝐭 𝐍𝐡𝐞́😕 \𝐓𝐨̛́ 𝐨𝐮𝐭 𝐛𝐨𝐱 đ𝐚̂𝐲😢 ${gio}`, event.threadID, () =>
      api.removeUserFromGroup(`${api.getCurrentUserID()}`, event.threadID)));
        api.sendMessage("Đ𝐚̃ 𝐧𝐡𝐚̣̂𝐧 𝐥𝐞̣̂𝐧𝐡 𝐨𝐮𝐭 𝐧𝐡𝐨́𝐦 𝐭𝐮̛̀ 𝐚𝐝𝐦𝐢𝐧, 𝐥𝐲́ 𝐝𝐨: " + reason.join(" "), idbox, () =>
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idbox, () =>
            api.sendMessage("Đ𝐚̃ 𝐨𝐮𝐭 𝐛𝐨𝐱 𝐜𝐨́ 𝐢𝐝: " + idbox + " 𝐯𝐨̛́𝐢 𝐥𝐲́ 𝐝𝐨: " + reason.join(" "), event.threadID)))
}