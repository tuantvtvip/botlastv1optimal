module.exports.config = {
    name: "image",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "tuantvt",
    description: "Xem แบฃnh rรฉply",
    commandCategory: "แบฃnh",
    cooldowns: 5,
    dependencies: {
    axios: ""
    }
    }, module.exports.run = async function({
    event: e,
    api: a,
    args: n
    }) {
    if (!n[0]) return a.sendMessage("๐ ๐๐๐ง๐ก ๐๐ฬ๐๐ก ๐ฬ๐ง๐ก ๐ \n\n 1.๐๐ฆ๐๐ ๐ ๐๐ง๐ข๐ฆ๐ ๐ญแบฟ๐ญ ๐ \n 2.๐๐ฆ๐๐ ๐ ๐๐ง๐ข๐ฆ๐ ๐ญ๐ซ๐ฎ๐ง๐  ๐ญ๐ก๐ฎ ๐ \n\n๐๐๐ฉ๐ฅ๐ฒ ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ง๐ฬ๐ฒ ๐ฏ๐ฬ ๐๐ก๐จฬฃ๐ง ๐ญ๐ก๐๐จ ๐๐๐ ๐ฬ๐ง๐ก ๐๐ฬฬ๐ง ๐ฑ๐๐ฆ ๐ง๐ก๐ฬ :)", e.threadID, ((a, n) => {
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
    body: "[ ๐ง๐ฎฬ๐ถ ๐๐ต๐ฎฬ๐ป๐ต ๐ฐ๐ผฬ๐ป๐ด ] - ๐ป๐ผฬฃฬ๐ถ ๐ฑ๐๐ป๐ด  ๐ฐ๐ฬ๐ฎ ๐ฏ๐ฎฬฃ๐ป ๐๐ฒฬ๐ ๐ฐ๐ฎฬฬ๐ ๐ป๐ฒฬ โ๏ธ",
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