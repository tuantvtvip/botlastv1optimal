module.exports.config = {
    name: 'autosend',
    version: '10.02',
    hasPermssion: 2,
    credits: 'tuantvt',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
    get
} = require('axios'),
config = [

{
        timer: '10:30:00 AM',
        message: ['==== 𝗧𝘂𝗮𝗻𝘁𝘃𝘁 ====\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶  𝗴𝗮̂̀𝗻 𝘁𝗿𝘂̛𝗮 𝘃𝘂𝗶 𝘃𝗲̂\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ ✔Donate:📲MoMo: 0836190107']
},
{
        timer: '5:10:00 PM',
        message: ['==== 𝗧𝘂𝗮𝗻𝘁𝘃𝘁 ====\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗡𝗴𝗮̀𝘆 𝗺𝗼̛́𝗶 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ ✔Donate:📲MoMo: 0836190107']
},
{ 
        timer: '12:00:00 PM',
        message: ['🔔 [ 𝐃𝐎𝐍𝐀𝐓𝐄 ] 🔔\n━━━━━━━━━━━━━━━━━━\n➝ Mình cho sử dụng bot free nhưng bạn nào tốt thương mình thỉnh thoảng donate cho mình tí cafee nhé ❤️\n━━━━━━━━━━━━━━━━━━\n➝ ✔Donate:📲MoMo: 0836190107']
},
{
        timer: '10:30:00 PM',
        message: ['==== 𝗧𝘂𝗮𝗻𝘁𝘃𝘁 ====\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 \n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ ✔Donate:📲MoMo: 0836190107']
},
{
        timer: '7:35:00 PM',
        message: ['==== 𝗧𝘂𝗮𝗻𝘁𝘃𝘁 ====\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ ✔Donate:📲MoMo: 0836190107']
},
{
        timer: '1:30:00 PM',
        message: ['==== 𝗧𝘂𝗮𝗻𝘁𝘃𝘁 ====\n━━━━━━━━━━━━━━━━━━\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ ✔Donate:📲MoMo: 0836190107']
    }];
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://randomlinkapi.tuantvt.repl.co/thinh`)).data.data)
            msg = {
                body: msg, attachment: (await get((await get(`https://randomlinkapi.tuantvt.repl.co/imganime`)).data.data, {
                    responseType: 'stream'
                })).data
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
        };
    }, 1000);
};
module.exports.run = () => {};