module.exports.config = {
        name: "boxicon",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "HungCatMoi",
        description: "Đổi Emoji nhóm của bạn",
        commandCategory: "QTV",
        usages: "boxemoji [name]",
        cooldowns: 0,
        dependencies: []
};

module.exports.run = async function({ api, event, args }) {
        const emoji = args.join(" ")
        return api.changeThreadEmoji(`${emoji}`, event.threadID);
}