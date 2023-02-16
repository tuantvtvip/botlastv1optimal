module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "HĐGN",//Update by ThanhAli
	description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`『 ${global.config.PREFIX} 』 • ${(!global.config.BOTNAME) ? "𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━\n► 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ◄\n━━━━━━━━━━━━━━━━━━\n→ [🐣] 𝐇𝐢 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ 𝐁𝐨𝐭 💗𝓬𝓾𝓽𝓮💗 \n→ [💌] 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐡𝐮̛̉𝐢 𝐁𝐨𝐭 , 𝐒𝐩𝐚𝐦 , 𝐊𝐢𝐜𝐤 𝐁𝐨𝐭\n→ [🌸] 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐋𝐞̣̂𝐧𝐡 -𝐡𝐞𝐥𝐩 , -𝐦𝐞𝐧𝐮 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 𝐂𝐚́𝐜 𝐋𝐞̣̂𝐧𝐡 𝐓𝐫𝐨𝐧𝐠 𝐁𝐨𝐭\n→ [😶‍🌫️] 𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐚̀𝐢 𝐁𝐨𝐭 𝐕𝐯 , 𝐕𝐚̀ 𝐂𝐨́ 𝐌𝐨̣̂𝐭 𝐍𝐠𝐚̀𝐲 𝐓𝐨̂́𝐭 𝐋𝐚̀𝐧𝐡\n━━━━━━━━━━━━━━━━━━\n[🛸] 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐝𝐦𝐢𝐧:fb.me/100073862257362 \n━━━━━━━━━━━━━━━━━━ `, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/randomgif/hi.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.mp4`);

			var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
        console.log(userName)
			}
			memLength.sort((a, b) => a - b);		
		(typeof threadData.customJoin == "undefined") ? msg = "Chào mừng:{name} \nĐến với nhóm {threadName}\n→ •[🌐]𝐔𝐑𝐋 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤:\nhttps://www.facebook.com/profile.php?id={iduser}\n→ {type} Bạn là thành viên thứ {soThanhVien} của nhóm và được thêm bởi: {author}\n📌 Vui lòng giới thiệu về bản thân\n👤 Họ tên...\n🎂 Năm sinh... →\n❗ Đặt biệt danh theo yêu cầu của nhóm!\n 𝐇𝐚̃𝐲 𝐜𝐡𝐚̆𝐦 𝐜𝐡𝐢̉ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 đ𝐞̂̉ 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢̣ đ𝐚́ 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐡𝐞́ 💤\n━━━━━━━━━━━━\n•[⏰] [ {time} ]": msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐭𝐮̛̣ 𝐯𝐚̀𝐨" : getData.name
			msg = msg
      .replace(/\{iduser}/g, iduser.join(', '))
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
      .replace(/\{author}/g, nameAuthor)
      .replace(/\{time}/g, time);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
    }
