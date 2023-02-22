module.exports.config = {
    name: "chucngungon",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "tuantvt",
    description: "ngủ ngonn",
    commandCategory: "gọi hồn",
    usages: "tag",
    cooldowns: 10,
    dependencies: {
        "fs": "",
        "request": ""
     }
}
module.exports.run = async function({ api, args, Users, event}) {
    const { threadID, messageID, senderID, mentions } = event;
    var mention = Object.keys(mentions)[0];
    setTimeout(() =>
      api.sendMessage({
        body:"Tình bạn mãi mãi như ngôi sao sáng lấp lánh trên bầu trời " + mentions[mention].replace("@", "") ,
        mentions: [{
         tag: mentions[mention].replace("@", ""),
         id: mention
        }]
       }, threadID, messageID), 1000)
     setTimeout(() =>
     api.sendMessage("Mặc dù chúng ta có cách xa nhau nhưng mình luôn biết bạn vẫn luôn ở gần bên mình mỗi khi mình cần đến bạn ", threadID), 2000)
     var a = Math.floor(Math.random() * 0);
     if ( a==0 ) {
        setTimeout(() =>
        api.sendMessage({
           body:"Ngủ ngon nhé 😘😘😘" + mentions[mention].replace("@", "") ,
           mentions: [{
            tag: mentions[mention].replace("@", ""),
            id: mention
           }]
          }, threadID), 3000)
     };
    }
