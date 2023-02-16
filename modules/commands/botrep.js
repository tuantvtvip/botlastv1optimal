module.exports.config = {
    name: "bot đẹp zai",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "tuantvt",
        description: "bot đẹp zai không cần lệnh",
        commandCategory: "No Prefix",
        usages: "noprefix",
        cooldowns: 5,
        dependencies: {
            "fs-extra": ""
        }
    };
    module.exports.handleEvent = async({ api, event, Users }) => {
        const fs = global.nodemodule["fs-extra"];
        var { threadID, messageID, senderID } = event;
        var tag = (await Users.getData(senderID)).name;
        let output = "ad của bot đz ";
        let varinput = [ "tuan","tuantvt","tuanvip","tuandz","tuann","tuân" ];
        let varinput1 = [ "adminbot", "adbot", "facebook" ,"fb" ,"in4" ,"info"];
        let varinput2 = [ "@Overnine Houtarou"]
        let varinput3 = [ "bot cute","bot vip","yêu bot","yeubot"]
        for (const input of varinput) {
            if (event.body.indexOf(input)==0 && event.body.length == input.length) {
            var job = ['Vui lòng nhắn riêng với ad của bot https://www.facebook.com/tuantvtvip',
            'ad tôi đang bận bạn có thể dùng callad',  
            'yêu hay sao mà gọi thế',
            'ad đang đợi bạn nhắn riếng'];
                 api.sendMessage(job[Math.floor(Math.random() * job.length)] + ' '  , threadID, messageID);
            }
        }
        for (const input of varinput1) {
            if (event.body.indexOf(input)==0 && event.body.length == input.length) {
            var job = ['ad của bot đây ạ: https://www.facebook.com/tuantvtvip 😘'];
                 api.sendMessage(job[Math.floor(Math.random() * job.length)] + ' '  , threadID, messageID);
            }     
        }    
        for (const input of varinput2) {
            if (event.body.indexOf(input)==0 && event.body.length == input.length) {
            var job = ['tag gì ad bot yêu sao ;)','dùng lệnh callad và bắn tin riêng bạn sẽ được ad tui yêu thương'];
                 api.sendMessage(job[Math.floor(Math.random() * job.length)] + ' '  , threadID, messageID);
            }     
        }
        for (const input of varinput3) {
            if (event.body.indexOf(input)==0 && event.body.length == input.length) {
            var job = ['bot yêy bạn lắm ạ 💗'];
                 api.sendMessage(job[Math.floor(Math.random() * job.length)] + ' '  , threadID, messageID);
            }     
        }     
        }
        module.exports.run = function({}) {
    }