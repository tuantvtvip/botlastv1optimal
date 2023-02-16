module.exports.config = {
    name: "image",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "tuantvt",
    description: "Xem ảnh réply",
    commandCategory: "ảnh",
    cooldowns: 5,
    dependencies: {
    axios: ""
    }
    }, module.exports.run = async function({
    event: e,
    api: a,
    args: n
    }) {
    if (!n[0]) return a.sendMessage("💌 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐀̉𝐧𝐡 💌 \n\n 1.𝐈𝐦𝐚𝐠𝐞 𝐚𝐧𝐢𝐦𝐞 𝐭ế𝐭 😘 \n 2.𝐈𝐦𝐚𝐠𝐞 𝐚𝐧𝐢𝐦𝐞 𝐭𝐫𝐮𝐧𝐠 𝐭𝐡𝐮 💕 \n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐒𝐓𝐓 𝐚̉𝐧𝐡 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦 𝐧𝐡𝐞́ :)", e.threadID, ((a, n) => {
    global.client.handleReply.push({
    name: this.config.name,
    messageID: n.messageID,
    author: e.senderID,
    type: "create"
    })
    }), e.messageID)
    }, module.exports.handleReply = async ({
    api: e,
    event: a,
    client: n,
    handleReply: t,
    Currencies: s,
    Users: i,
    Threads: o
    }) => {
    var { p, h } = linkanh();
    if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    let t = (await p.get(n, {
    responseType: "stream"
    })).data;
    return e.sendMessage({
    body: "[ 𝗧𝗮̉𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ] - 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴  𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ ⚜️",
    attachment: t
    }, a.threadID, a.messageID)
    }
        function linkanh() {
            const p = require("axios");
            if ("1" == a.body)
            var h = "https://randomlinkapi.tuantvt.repl.co/animetet";
            else if("2" == a.body)
            var h="https://randomlinkapi.tuantvt.repl.co/loli";
            return {p,h};
        }
    };