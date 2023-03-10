const path = require("path");
const { mkdirSync, writeFileSync, existsSync, createReadStream, readdirSync } = require("fs-extra")
const axios = require("axios")

module.exports.config = {
    name: "dxev3",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "F1",
    commandCategory: "game",
    usages: "[]",
    cooldowns: 0
};


module.exports.onLoad = async () => {
    const dir = __dirname + `/duaxe/datauser/`;
    const _dir = __dirname + `/duaxe/datauser/`;
    const __dir = __dirname + `/duaxe/cache/`;
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    if (!existsSync(_dir)) mkdirSync(_dir, { recursive: true });
    if (!existsSync(__dir)) mkdirSync(__dir, { recursive: true });
    return;
}

module.exports.checkPath = function (type, senderID) {
    const pathGame = path.join(__dirname, 'duaxe', 'datauser', `${senderID}.json`);
    const pathGame_1 = require("./duaxe/datauser/" + senderID + '.json');
    if (type == 1) return pathGame
    if (type == 2) return pathGame_1
}

module.exports.image = async function(link) {
    var images = [];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        writeFileSync( __dirname + `/duaxe/cache/duaxe.png`, Buffer.from(download, "utf-8"));
        images.push(createReadStream(__dirname + `/duaxe/cache/duaxe.png`));
    return images
}

module.exports.run = async function ({ api, event, args, client,Threads,__GLOBAL, Users, Currencies,getText }) {
    const { threadID, messageID, senderID } = event;
    const pathData = path.join(__dirname, 'duaxe', 'datauser', `${senderID}.json`);
    switch (args[0]) {
        case '1':
        case 'register': {
            const nDate = new Date().toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh'
            });
            if (!existsSync(pathData)) {
                var obj = {};
                obj.name = (await Users.getData(senderID)).name;
                obj.ID = senderID;
                obj.shield = 3
                obj.coins = 20000
                obj.Island = {};
                obj.Island.level = 1
                obj.Island.coinsLV = 200
                obj.Island.data = {};
                obj.Island.data.V??l??ng = 0
                obj.Island.data.B??nhxe = 0
                obj.Island.data.?????ngc?? = 0
                obj.Island.data.Boots = 0
                obj.spin = 20
                obj.timeRegister = nDate
                writeFileSync(pathData, JSON.stringify(obj, null, 4));
                return api.sendMessage("????????ng k?? th??nh c??ng!!????", threadID, messageID);
            } else return api.sendMessage("????B???n ???? c?? trong c?? s??? d??? li???u????", threadID, messageID);

        }
        case '2': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: `B???n ch??a ????ng k?? game!`, attachment: await this.image('https://imgur.com/Lct1enP.gif')}, threadID, messageID);
            }
            if(this.checkPath(2, senderID).spin == 0) return api.sendMessage('B???n ???? h???t l?????t quay, vui l??ng mua th??m ho???c ?????i 5p h??? th???ng s??? t???ng b???n 5 l?????t', threadID, messageID);
            this.checkPath(2, senderID).spin = parseInt(this.checkPath(2, senderID).spin) - 1;
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(this.checkPath(2, senderID), null, 4));
            var items = [`${this.checkPath(2, senderID).Island.level * 1000} coins`, `${this.checkPath(2, senderID).Island.level * 3000} coins`, `${this.checkPath(2, senderID).Island.level * 5000} coins`, 'n???t', 'RB18', 'W13', '1 l?????t quay', '2 l?????t quay', '5 l?????t quay'];
            var getItem = items[Math.floor(Math.random() * items.length)];
            var i = this.getSpin(items, getItem, senderID);
            api.sendMessage({body: `Ch??c m???ng b???n quay ch??ng : ${getItem}`, attachment: await this.image('https://imgur.com/Lct1enP.gif')}, threadID, messageID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = readdirSync(__dirname + `/duaxe/datauser`);
            if(i == 3) {
                if(data.length < 4) return api.sendMessage(`C???n ??t nh???t c?? 3 ng?????i ch??i tr??n server ????? c?????p xe`, threadID, messageID);
                const dem = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        dem.push(require(`./duaxe/datauser/${i}`));
                    }
                }
                dem.sort((a, b) => a.coins + b.coins);
                var msg = `S??? ti???n cao nh???t l??: ${dem[0].coins / 2}\n`
                const randomIndex = dem.sort(function() { return .5 - Math.random() });
                for(var i = 0; i < 3; i ++) {
                    msg += `${i+1}. ${randomIndex[i].name} - Bu???ng l??i xe level ${randomIndex[i].Island.level}\n`
                }
                msg += 'Vui l??ng reply v???i l???a ch???n b???n mu???n c?????p!!'
                return api.sendMessage(`==========\n${msg}`, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "c?????p",
                        dem,
                        randomIndex
                    })
                }, messageID);
            }
            else if(i == 5) {
                if(data.length < 4) return api.sendMessage(`C???n ??t nh???t c?? 3 ng?????i ch??i tr??n server ????? ??ua`, threadID, messageID);
                var msgf = `[====??ua====]\n`, number = 1, p = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        var o = require(`./duaxe/datauser/${i}`);
                        p.push(o)
                        msgf += `${number++}. ${o.name} - BU???NG XE level ${o.Island.level}\n`
                    }
                }
                return api.sendMessage(msgf, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "??ua",
                        p
                    })
                }, messageID);
            }
            break;
        }
        case '3': 
        case 's???a xe': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "B???n ch??a ????ng k?? game!", attachment: await this.image('https://imgur.com/U5iTMPk.jpg')}, threadID, messageID);
            }
            var a = require(`./duaxe/datauser/${senderID}.json`);
            return api.sendMessage(`B???n mu???n s???a xe ??? khu v???c n??i n??o ??? Bu???ng l??i l??i!\n1. V??l??ng - ${a.Island.coinsLV * (a.Island.data.V??l??ng + 1)} coins (${a.Island.data.V??l??ng}/50)\n2. B??nh Xe - ${a.Island.coinsLV * (a.Island.data.B??nhxe + 1)} coins(${a.Island.data.B??nhxe}/50)\n3.?????ng C?? - ${a.Island.coinsLV * (a.Island.data.?????ngc?? + 1)} coins (${a.Island.data.?????ngc??}/50)\n4. Boots - ${a.Island.coinsLV * (a.Island.data.Boots + 1)} coins (${a.Island.data.Boots}/50)\n==============`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "s???a xe"
                })
            }, messageID);
        }
        case '4': 
        case 'c???a h??ng': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "B???n ch??a ????ng k?? game!", attachment: await this.image('https://imgur.com/RdtR0WI.jpg')}, threadID, messageID);
            }
     return api.sendMessage({body: `?????? [ SHOP F1 ] ??????  \n\n????Danh s??ch xe b???n c?? th??? mua\n[1].  RB9 ??? RED BULL\n[2]. 250F ??? MASERATI \n[3].MP4/2 ??? MCLAREN\n[4]. F2002 ??? FERRARI\n[5]. 500 ??? FERRARI \n[6]. FW14 ??? WILLIAMS\n[7]. FERRARI F2004\n[8]. W07 HYBRID ??? MERCEDES\n[9]. LOTUS 72`, attachment: await this.image('https://imgur.com/RdtR0WI.jpg')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "c???a h??ng"
                })
            }, messageID);
        }
        case '??ua': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "B???n ch??a ????ng k?? game!", attachment: await this.image('https://imgur.com/2pdLGGl.gif')}, threadID, messageID);
            }
     return api.sendMessage({body: `?????? [ ??ua xe ] ??????  \n\n????Danh s??ch tr???n ??ua ??? c??c n?????c\n[????1].Vi???t Nam\n[????2].??c\n[????3].T??y Ban Nha\n`, attachment: await this.image('https://imgur.com/w3DKCwJ.jpg')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "??ua"
                })
            }, messageID);
        }
        case '5':
        case 'info': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "B???n ch??a ????ng k?? game!", attachment: await this.image('https://imgur.com/Lct1enP.gif')}, threadID, messageID);
            }
            var a = require(`./duaxe/datauser/${senderID}.json`);
            return api.sendMessage(`=====DUAXE=====\n- B???n ??ang ??? Bu???ng l??i level ${a.Island.level}\n- S??? l?????t quay c??n l???i: ${a.spin}\n- Coins: ${a.coins}\n- Th??ng tin Bu???ng l??i:\n??? V?? L??ng (${a.Island.data.V??l??ng}/50)\n??? B??nhxe (${a.Island.data.B??nhxe}/50)\n??? ?????ngc??
(${a.Island.data.?????ngc??}/50)\n??? Boots
(${a.Island.data.Boots}/50)`, threadID, messageID);
        }
        case '5':
        case 'top': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "B???n ch??a ????ng k?? game!", attachment: await this.image('https://imgur.com/Lct1enP.gif')}, threadID, messageID);
            }
            const data = readdirSync(__dirname + `/duaxe/datauser`);
            if(data.length < 3) return api.sendMessage(`C???n ??t nh???t c?? 3 ng?????i ch??i tr??n server ????? xem top`, threadID, messageID);
            var p = []
            for (let i of data) { 
                var o = require(`./duaxe/datauser/${i}`);
                p.push(o)
                msgf += `${number++}. ${o.name} - Bu???ng l??i level ${o.Island.level}\n`
            }
            p.sort((a, b) => b.Island.level - a.Island.level);
            var msg = '===TOP 3 BU???NG L??I LEVEL CAO NH???T===\n'
            for(var i = 0; i < 3; i++) {
                msg += `${i+1}. ${p[i].name} v???i bu???ng l??i level ${p[i].Island.level}\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        default: {
            return api.sendMessage({body: `??????UA XE F1????\n-??????1: ????ng k??\n-??????2: V??ng quay game\n-??????3: S???a bu???ng xe\n-??????4: Shop mua xe\n-??????5: Xem th??ng tin v??? b???n\n-??????6: Xem top level tr??n server\n-??????7: Quy ?????i ti???n c???a bot sang ti???n game v?? ng?????c l???i\n-??????8:??ua\n??????? F1 ???????\n s??? d???ng !duaxe (s???)`, attachment: await this.image('https://i.imgur.com/1IGN0IP.jpg')}, threadID, messageID);
        }
    }
}
module.exports.handleReply = async ({ event, api, Currencies, handleReply, Users, getText}) => {

  const { body, threadID, messageID, senderID } = event;
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    switch (handleReply.type) {
        case 's???a': {
            var a = require(`./duaxe/datauser/${senderID}.json`);
            var l = ['V??l??ng', 'B??nhxe', '?????ngc??', 'Boots']
            if(a.coins < a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1)) return api.sendMessage(`B???n kh??ng ????? s??? coins trong game ????? s???a!`, threadID, messageID);
            a.coins = a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1);
            await Currencies.decreaseMoney(senderID, a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1));
            api.unsendMessage(handleReply.messageID)
            if(body == 1) {
                if(a.Island.data.V??l??ng == 50) return api.sendMessage('C???p b???c khu v???c n??y ??ang ??? m???c t???i ??a n??n kh??ng th??? s???a xe', threadID, messageID);
                a.Island.data.V??l??ng = a.Island.data.V??l??ng + 10;
                api.sendMessage(`S???a th??nh c??ng: ${a.Island.data.V??l??ng}/50`, threadID, messageID);
            }
            if(body == 2) {
                if(a.Island.data.B??nhxe == 50) return api.sendMessage('C???p b???c khu v???c n??y ??ang ??? m???c t???i ??a n??n kh??ng th??? s???a xe', threadID, messageID);
                a.Island.data.B??nhxe = a.Island.data.B??nhxe + 10;
                api.sendMessage(`S???a th??nh c??ng: ${a.Island.data.B??nhxe}/50`, threadID, messageID);
            }
            if(body == 3) {
                if(a.Island.data.?????ngc?? == 50) return api.sendMessage('C???p b???c khu v???c n??y ??ang ??? m???c t???i ??a n??n kh??ng th??? s???a xe', threadID, messageID);
                a.Island.data.?????ngc?? = a.Island.data.?????ngc?? + 10;
                api.sendMessage(`S???a th??nh c??ng: ${a.Island.data.?????ngc??}/50`, threadID, messageID);
            }
            if(body == 4) {
                if(a.Island.data.Boots == 50) return api.sendMessage('C???p b???c khu v???c n??y ??ang ??? m???c t???i ??a n??n kh??ng th??? s???a xe', threadID, messageID);
                a.Island.data.Boots = a.Island.data.Boots + 10;
                api.sendMessage(`S???a th??nh c??ng: ${a.Island.data.Boots}/50`, threadID, messageID);
            }
            if(a.Island.data.V??l??ng == 50 && a.Island.data.B??nhxe == 50 && a.Island.data.?????ngc?? == 50 && a.Island.data.Boots == 50) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                api.sendMessage(`S???a bu???ng xe c???a b???n ???? ?????t ???????c c???p t???i ??a!\nB???n s??? ???????c n??ng c???p l??n ???????????o LV ${(a.Island.level) + 1}`, threadID, messageID);
                a.Island.level = a.Island.level + 1;
                a.Island.coinsLV = a.Island.coinsLV + 100;
                a.Island.data.V??l??ng = 0;
                a.Island.data.B??nhxe = 0;
                a.Island.data.?????ngc?? = 0;
                a.Island.data.Boots = 0;
            }
            return writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
        }
        case '4': {
            if(body == 1) {
                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : Red Bull RB9\n[???????]Th??ng Tin : SRed Bull RB9 c??ng l?? chi???c xe C??ng th???c 1 cu???i c??ng do Renault ch??? t???o gi??nh ???????c danh hi???u nh?? x??y d???ng th??? gi???i cho ?????n nay.\n[???????]Chi???u d??i : 5,080 mm\n[???????]Chi???u r???ng : 1.800 mm\n[???????] Chi???u cao : 950 mm \n`, attachment: await this.image('https://imgur.com/muLmkPb.png')}, threadID, messageID);
            }
            else if(body == 2) {
                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : 250F ??? MASERATI
[???????]Th??ng Tin : ???? ???????c s??? d???ng trong gi???i Grand Prix Ph??p n??m 1956 
[???????]Chi???u d??i : 4.050 mm
[???????]Chi???u r???ng :1.980 mm
[???????] Chi???u cao : 950 mm
[???????]Tr???ng l?????ng: 670 kg
`, attachment: await this.image('https://imgur.com/RUxmdwz.png')}, threadID, messageID);
            }
            else if(body == 3) {

                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : MP4/2 ??? MCLAREN
[???????]Th??ng Tin :McLaren MP4 / 2 l?? chi???c xe th???ng tr??? gi???i v?? ?????ch th??? gi???i c??ng th???c 1 n??m 1984 v?? k???t th??c m??a gi???i b???ng c??ch gi??nh c??? hai danh hi???u
[???????]Chi???u d??i : 4,343 mm
[???????]Chi???u r???ng : 2.133 mm
[???????] Chi???u cao : 991 mm
[???????]Tr???ng l?????ng: 540 kg 
`, attachment: await this.image('https://imgur.com/heCExdt.png')}, threadID, messageID);
             }
            else if(body == 4) {
                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : F2002 ??? FERRARI
[???????]Th??ng Tin : N?? ???????c nhi???u ng?????i coi l?? m???t trong nh???ng thi???t k??? xe C??ng th???c M???t th??nh c??ng nh???t m???i th???i ?????i
[???????]Chi???u d??i : 4,495  mm
[???????]Chi???u r???ng : 	1.796  mm
[???????] Chi???u cao : 959  mm
[???????]Tr???ng l?????ng: 600 kg
 `, attachment: await this.image('https://imgur.com/Vi5w8K9.png')}, threadID, messageID);
            }
            else if(body == 5) {
                return api.sendMessage({body: `???????]T??n : 500 ??? FERRARI 
[???????]Th??ng Tin : Ferrari 500 l?? m???t chi???c xe ??ua C??ng th???c 2 ???????c thi???t k??? b???i Aurelio Lampredi v?? ???????c Ferrari s??? d???ng
[???????]Chi???u d??i : 2.197 mm 
[???????]Tr???ng l?????ng: 560 kg`, attachment: await this.image('https://imgur.com/cLuenho.png')}, threadID, messageID);
            }
            else if(body == 6) {
                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : FW14 ??? WILLIAMS
[???????]Th??ng Tin : Williams FW14 l?? m???t chi???c xe ??ua C??ng th???c 1 ???????c s??? d???ng b???i ?????????i Canon Williams trong su???t n??m 1991 v?? 1992
[???????]Chi???u d??i :  2921 mm
[???????]Tr???ng l?????ng: 605kg`, attachment: await this.image('https://imgur.com/MpoNVxe.png')}, threadID, messageID);
            }
            else if(body == 7) {
                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : FERRARI F2004
[???????]Th??ng Tin : F2004 l?? m???t chi???c xe ??ua C??ng th???c M???t r???t th??nh c??ng ???? ???????c Ferrari s??? d???ng cho m??a gi???i C??ng th???c M???t n??m 2004 .
[???????]Chi???u d??i : 4,545  mm
[???????]Chi???u r???ng : 1.796  mm
[???????] Chi???u cao : 959  mm 
[???????]Tr???ng l?????ng: 605 kg`, attachment: await this.image('https://imgur.com/gmfEF88.png')}, threadID, messageID);
            }
            else if(body == 8) {
                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : W07 HYBRID ??? MERCEDES
[???????]Th??ng Tin : Mercedes F1 W07 Hybrid l?? m???t chi???c xe ??ua C??ng th???c m???t ???? tham gia tranh t??i t???i Gi???i v?? ?????ch th??? gi???i c??ng th???c m???t n??m 2016 c???a FIA .
[???????]Chi???u d??i : 	5,000 mm
[???????]Chi???u r???ng : 1.800 mm
[???????] Chi??????u cao : 	950 mm
[???????]Tr???ng l?????ng: 702 kg`, attachment: await this.image('https://imgur.com/fIqJKyV.png')}, threadID, messageID);
            }
            else if(body == 9) {
                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : LOTUS 72
[???????]Th??ng Tin : Lotus ???? c?? m???t s??? chi???c xe mang t??nh bi???u t?????ng trong C??ng th???c 1
[???????]Chi???u d??i : 4,191 mm
[???????]Chi???u r???ng : 1.880 mm
[???????] Chi???u cao : 1,168 mm 
[???????]Tr???ng l?????ng: 580kg`, attachment: await this.image('https://imgur.com/OpXX40C.png')}, threadID, messageID);
            }
            else {
                return api.sendMessage('L???a ch???n kh??ng h???p l???!', threadID, messageID);
            }
        }

         case '7': {
            if(body == 1) {
                return api.sendMessage('Vui l??ng reply tin nh???n n??y v???i s??? ti???n b???n mu???n ?????i! Chi???t kh???u 0%', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "botcoins"
                    })
                }, messageID);
            }
            else if(body == 2) {
                return api.sendMessage('Vui l??ng reply tin nh???n n??y v???i s??? ti???n b???n mu???n ?????i! Chi???t kh???u 0%', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "coinsbot"
                    })
                }, messageID);
            }
            else if(body == 3) {
                return api.sendMessage('Vui l??ng reply tin nh???n n??y v???i s??? l?????t quay b???n mu???n mua! (10 l?????t quay 2000$)', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "2"
                    })
                }, messageID);
            }
            else {
                return api.sendMessage('L???a ch???n kh??ng h???p l???!', threadID, messageID);
            }
        }
        case '8': {
            if(body == 1) {
  var coinduaxe = Math.floor(Math.random() * 80000) + 10000;
  var dohiem = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `----> Th??nh c??ng <---- \n[????] N?????c : Vi???t Nam.\n[???????]B???n ???? ??ua xe v?? nh???n ${coinduaxe}$\n`, attachment: await this.image('https://imgur.com/eIMdCrg.gif')}, threadID, messageID);
        }
            else if(body == 2) {
                 return api.sendMessage({body: `----> Th??nh c??ng <---- \n[???????]T??n : W07 HYBRID ??? MERCEDES
[???????]Th??ng Tin : Mercedes F1 W07 Hybrid l?? m???t chi???c xe ??ua C??ng th???c m???t ???? tham gia tranh t??i t???i Gi???i v?? ?????ch th??? gi???i c??ng th???c m???t n??m 2016 c???a FIA .
[???????]Chi???u d??i : 	5,000 mm
[???????]Chi???u r???ng : 1.800 mm
[???????] Chi???u cao : 	950 mm
[???????]Tr???ng l?????ng: 702 kg`, attachment: await this.image('https://imgur.com/heCExdt.png')}, threadID, messageID);
        }
            else if(body == 3) {
                return api.sendMessage({body: `-----> Th??nh c??ng <---- \n[???????]T??n : W07 HYBRID ??? MERCEDES
[???????]Th??ng Tin : Mercedes F1 W07 Hybrid l?? m???t chi???c xe ??ua C??ng th???c m???t ???? tham gia tranh t??i t???i Gi???i v?? ?????ch th??? gi???i c??ng th???c m???t n??m 2016 c???a FIA .
[???????]Chi???u d??i : 	5,000 mm
[???????]Chi???u r???ng : 1.800 mm
[???????] Chi???u cao : 	950 mm
[???????]Tr???ng l?????ng: 702 kg`, attachment: await this.image('https://imgur.com/heCExdt.png')}, threadID, messageID);
            }
        }        
        case 'spinn': {
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.spin = a.spin + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`Mua th??nh c??ng ${body} l?????t quay (${parseInt(body) * 200}$`, threadID, messageID);
        }
        case 'botcoins': {
            var a = require(`./duaxe/datauser/${senderID}.json`);
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.coins = a.coins + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`N???p th??nh c??ng ${body} coins v??o game!`, threadID, messageID);
        }
        case 'coinsbot': {
            var a = require(`./duaxe/datauser/${senderID}.json`);
            if(a.coins < parseInt(body)) return api.sendMessage('B???n kh??ng ????? ti???n ????? th???c hi???n giao d???ch n??y!', threadID, messageID);
            api.unsendMessage(handleReply.messageID)
            await Currencies.increaseMoney(senderID, parseInt(body));
            a.coins = a.coins - parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`R??t th??nh c??ng ${body} coins v??? t??i kho???n bot!`, threadID, messageID);
        }
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return api.sendMessage('B???n kh??ng ????? ti???n ????? th???c hi???n giao d???ch n??y!', threadID, messageID);
    }
}
module.exports.getSpin = function (items, getItem, senderID) {
    const path = this.checkPath(1, senderID)
    var pathData = this.checkPath(2, senderID)
    var i = items.findIndex(index => index == getItem);
    if(i == 0) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 1000
    if(i == 1) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 3000
    if(i == 2) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 5000
    if(i == 4) {
        if(pathData.shield != 3) {
            pathData.spin = parseInt(pathData.spin) + 1
            pathData.shield = parseInt(pathData.shield) + 1;
        }
    }
    if(i == 6) pathData.spin = parseInt(pathData.spin) + 1
    if(i == 7) pathData.spin = parseInt(pathData.spin) + 2
    if(i == 8) pathData.spin = parseInt(pathData.spin) + 5
    writeFileSync(path, JSON.stringify(pathData, null, 4));
    return i
} 