module.exports.config = {
	name: "ping",
	version: "1.0.5",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "tag toàn bộ thành viên",
	commandCategory: "Box Chat",
	usages: "[Text]",
	cooldowns: 80
};

module.exports.run = async function({ api, event, args }) {
	try {
		const botID = api.getCurrentUserID();
		var listAFK, listUserID;
		global.moduleData["afk"] && global.moduleData["afk"].afkList ? listAFK = Object.keys(global.moduleData["afk"].afkList || []) : listAFK = []; 
		listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		listUserID = listUserID.filter(item => !listAFK.includes(item));
		var body = (args.length != 0) ? args.join(" ") : "\n◆━━━━━••••••━━━━━◆\n🌸𝐃𝐚̣̂𝐲 𝐫𝐚 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐧𝐚̀𝐨 𝐦𝐚̂́𝐲 𝐜𝐨𝐧 𝐦𝐚̣̆𝐭 𝐝𝐚̀𝐲\n◆━━━━━••••••━━━━━◆\n", mentions = [], index = 0;
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
    }