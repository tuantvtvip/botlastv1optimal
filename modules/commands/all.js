module.exports.config = {
	name: "all",
	version: "1.0.4",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "tag toร n bแป thร nh viรชn",
	commandCategory: "Box chat",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
	try {
		const botID = api.getCurrentUserID();
		const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		var body = (args.length != 0) ? args.join(" ") : "๐ธ ๐๐ฎฬฃฬ๐ ๐ป๐ฎฬ๐ผ ๐ฐ๐ฎฬ๐ฐ ๐ฒ๐บ ๐ธ", mentions = [], index = 0;
		
		for(const idUser of listUserID) {
			body = "โ" + body;
			mentions.push({ id: idUser, tag: "โ", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}