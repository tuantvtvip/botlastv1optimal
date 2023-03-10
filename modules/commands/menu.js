module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tuantvt",
	description: "Menu, just a menu",
	usages: "[all/-a] [sแป trang]",
	commandCategory: "Trแปฃ giรบp",
	cooldowns: 2
};

module.exports.handleReply = ({ api, event, handleReply }) => {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "Not a number";
	else if (num > data.length || num <= 0) msg = "Not available";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += `๐ธ ${command_config.commandCategory.toUpperCase()} ๐ธ\n`;
			msg += `\nยป ๐๐ฬ๐ง: ${dataAfter}`;
			msg += `\nยป ๐๐จฬ ๐ญ๐ฬ: ${command_config.description}`;
			msg += `\nยป ๐๐ฬ๐๐ก ๐๐ฎฬ๐ง๐ : ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\nยป ๐๐ก๐จฬฬ๐ข ๐ ๐ข๐๐ง ๐๐ก๐จฬฬ: ${command_config.cooldowns || 5}s`;
			msg += `\nยป ๐๐ฎ๐ฒ๐ฬฬ๐ง ๐ก๐ฬฃ๐ง: ${(command_config.hasPermssion == 0) ? "Ngฦฐแปi dรนng" : (command_config.hasPermssion == 1) ? "Quแบฃn trแป viรชn nhรณm" : "Quแบฃn trแป viรชn bot"}`;
			msg += `\n\nยป ๐ ๐ผ๐๐ฑ๐๐น๐ฒ ๐ฐ๐ผ๐ฑ๐ฒ ๐ฏ๐ ๐๐๐ฎ๐ป๐๐๐ ยซ`;
		} else {
			check = true;
			let count = 0;
			msg += `๐ธ ${dataAfter.group.toUpperCase()} ๐ธ\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1}. ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n๐ฅ ๐๐ฬ๐ฒ ๐ซ๐๐ฉ๐ฅ๐ฒ (๐ฉ๐ก๐ฬ๐ง ๐ก๐จฬฬ๐ข) ๐๐๐ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ฑ๐๐ฆ ๐ญ๐ก๐จฬ๐ง๐  ๐ญ๐ข๐ง ๐๐ก๐ข ๐ญ๐ข๐ฬฬ๐ญ !";
		}
	}

	return api.sendMessage(msg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	const command = commands.values();
	var group = [], msg = "๐๐ฌ๐พ๐ฝ๐ฎ๐\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 50);//muแปn menu hiแปn bao nhiรชu dรฒng module
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "Not a number";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
			else check = true;
		}
		if (check) {
			index_start = (page_num_input) ? (page_num_input * 50) - 50 : 0;
			bonus = index_start;
			index_end = (index_start + 50 > all_commands.length) ? all_commands.length : index_start + 50;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n๐ ๐๐ข๐ฬฃฬ๐ง ๐ญ๐ฬฃ๐ข ๐๐จฬ ${commands.size} ๐ฅ๐ฬฃฬ๐ง๐ก ๐๐จฬ ๐ญ๐ก๐ฬฬ ๐ฌ๐ฎฬฬ ๐๐ฎฬฃ๐ง๐  ๐ญ๐ซ๐ฬ๐ง ๐๐จ๐ญ ๐ง๐ฬ๐ฒ\n๐ณ ๐๐ฎฬฬ ๐๐ฎฬฃ๐ง๐ : ๊ง/๐ก๐๐ฅ๐ฉ ๐ญ๐ฬ๐ง ๐ฅ๐ฬฃฬ๐ง๐ก๊ง\๐ง๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐๐ข๐ฬฬ๐ญ ๐๐ก๐ข ๐ญ๐ข๐ฬฬ๐ญ ๐๐ฬ๐๐ก ๐ฌ๐ฎฬฬ ๐๐ฎฬฃ๐ง๐ `;
		}
		return api.sendMessage(msg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 50);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "Not a number";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 50) - 50 : 0;
		bonus = index_start;
		index_end = (index_start + 50 > group.length) ? group.length : index_start + 50;
		console.log(page_num_input)
		console.log(index_start)
		console.log(index_end)
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1}. โ${commandGroup.group.toUpperCase()}๐`);
		msg += `\n\n๐ ๐๐ข๐ฬฃฬ๐ง ๐ญ๐ฬฃ๐ข ๐๐จฬ ${commands.size} ๐ฅ๐ฬฃฬ๐ง๐ก ๐๐จฬ ๐ญ๐ก๐ฬฬ ๐ฌ๐ฎฬฬ ๐๐ฎฬฃ๐ง๐  ๐ญ๐ซ๐ฬ๐ง ๐๐จ๐ญ ๐ง๐ฬ๐ฒ\n๐ฆ๐๐ฬ๐ฒ ๐ซ๐๐ฉ๐ฅ๐ฒ(๐ฉ๐ก๐ฬ๐ง ๐ก๐จฬฬ๐ข) ๐๐๐\n๐ค ๐๐จ๐ญ ๐ค๐ก๐จฬฬ๐ข ๐๐ก๐ฬฃ๐ฒ ๐๐จฬฬ๐ข ๐ฉ๐ซ๐ฉ\n๐ฉ ๐๐จฬฃ๐ข ๐ญ๐ก๐ฬฬ๐ ๐ฆ๐ฬฬ๐ ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐๐๐ฆ๐ข๐ง ๐๐จ๐ญ\n๐ ๐๐๐๐๐๐จ๐จ๐ค: https://www.facebook.com/tuantvtvip\n๐ฑ ๐๐๐ฅ๐จ : 083.190107\n๐ณ ๐๐ก๐ฎฬ๐ ๐๐ฬฃ๐ง ๐ฌ๐ฎฬฬ ๐๐ฎฬฃ๐ง๐  ๐๐จ๐ญ ๐ฏ๐ฎ๐ข ๐ฏ๐ฬ ๐ฅ`;
	}
	return api.sendMessage(msg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
}
