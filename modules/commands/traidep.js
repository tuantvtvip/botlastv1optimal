module.exports.config = {
  name: "videotrai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "cuteo",
  description: "xem video trai",
  commandCategory: "Ảnh",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/BYSjN4d.mp4",
    "https://i.imgur.com/Fc9Hmzv.mp4",
    "https://i.imgur.com/K675pgH.mp4",
    "https://i.imgur.com/i7GLBrQ.mp4",
    "https://i.imgur.com/f0i5TiM.mp4",
    "https://i.imgur.com/kHyPgtS.mp4",
    "https://i.imgur.com/1i3k9ut.mp4",
    "https://i.imgur.com/hgOqkzT.mp4",
    "https://i.imgur.com/1PMFCo0.mp4",
    "https://i.imgur.com/9bKaxdU.mp4",
    "https://i.imgur.com/Er0wH0F.mp4",
    "https://i.imgur.com/bqTDnMx.mp4",
    "https://i.imgur.com/MiOHkyr.mp4",
    "https://i.imgur.com/wEKiT33.mp4",
    "https://i.imgur.com/MG8CCVI.mp4",
    "https://i.imgur.com/aEJYScA.mp4",
    "https://i.imgur.com/J3OkQz4.mp4",
    "https://i.imgur.com/rcKlXx8.mp4",
    "https://i.imgur.com/EjMZPZb.mp4",
    "https://i.imgur.com/tXxmvo3.mp4",
    "https://i.imgur.com/R5Gwdar.mp4",
    "https://i.imgur.com/JJW1gRu.mp4",
    "https://i.imgur.com/HuvLMbd.mp4",
    "https://i.imgur.com/a7dPRvj.mp4",
    "https://i.imgur.com/weKLAFZ.mp4",
    "https://i.imgur.com/HcDlcx0.mp4",
    "https://i.imgur.com/j2RRpEV.mp4",
    "https://i.imgur.com/hDHD4A8.mp4",
    "https://i.imgur.com/El7eT0R.mp4",
    "https://i.imgur.com/f3uTNpl.mp4",
    "https://i.imgur.com/UtMiXAY.mp4",
    "https://i.imgur.com/bQp7qsr.mp4",
    "https://i.imgur.com/0ftwEix.mp4",
    "https://i.imgur.com/nhci0Sw.mp4",
    "https://i.imgur.com/8n9K8Vi.mp4",
    "https://i.imgur.com/dfLsWum.mp4",
    "https://i.imgur.com/n9zjKF3.mp4",
    "https://i.imgur.com/MPgj7u7.mp4",
    "https://i.imgur.com/urjlKKO.mp4",
    "https://i.imgur.com/bHDDx1I.mp4",
    "https://i.imgur.com/awsfAX8.mp4",
    "https://i.imgur.com/HKywfHs.mp4",
    "https://i.imgur.com/vWLLLlU.mp4",
    "https://i.imgur.com/Kln4Bgc.mp4",
    "https://i.imgur.com/vuRvfui.mp4",
    "https://i.imgur.com/V98tQ15.mp4",
    "https://i.imgur.com/Ks9T75w.mp4",
    "https://i.imgur.com/z1Pxq8l.mp4",
    "https://i.imgur.com/9fcthLi.mp4",
    "https://i.imgur.com/PlcZAjp.mp4",
    "https://i.imgur.com/DDpHIO0.mp4",
    "https://i.imgur.com/USjH3cH.mp4",
    "https://i.imgur.com/OFR46vU.mp4",
    "https://i.imgur.com/Us5r27h.mp4",
    "https://i.imgur.com/moPeeee.mp4",
  "https://i.imgur.com/6ZAnx1w.mp4",
    "https://i.imgur.com/k4o4nYQ.mp4",
    "https://i.imgur.com/tXfzf0H.mp4",
    "https://i.imgur.com/KIVEKR6.mp4",
    "https://i.imgur.com/29RDTEJ.mp4",
    "https://i.imgur.com/t1qZjPs.mp4",
  "https://i.imgur.com/OFw8IWJ.mp4",
  "https://i.imgur.com/Od7B0gX.mp4",
    "https://i.imgur.com/AzYZ9ll.mp4",
  "https://i.imgur.com/YKsJapF.mp4",
  "https://i.imgur.com/5XYyD9r.mp4",
    "https://i.imgur.com/buFQ30J.mp4",
  "https://i.imgur.com/yKMW3z1.mp4",
  "https://i.imgur.com/eT1LSxD.mp4",
    "https://i.imgur.com/jW4rQOM.mp4",
  "https://i.imgur.com/YtHgSpS.mp4",
    "https://i.imgur.com/HRJ8H0h.mp4",
  "https://i.imgur.com/Ye7tQrZ.mp4",
    "https://i.imgur.com/PUoErAm.mp4",
    "https://i.imgur.com/gotRVWW.mp4",
    "https://i.imgur.com/N7fCXO2.mp4",
    "https://i.imgur.com/aQdrIkT.mp4",
    "https://i.imgur.com/8VcgEXH.mp4",
    "https://i.imgur.com/zynngrH.mp4",
    "https://i.imgur.com/zzIKUAZ.mp4",
    "https://i.imgur.com/K7Pj85X.mp4",
    "https://i.imgur.com/60BZW7Y.mp4",
    "https://i.imgur.com/60BZW7Y.mp4",
    "https://i.imgur.com/YWYZtP5.mp4",
    "https://i.imgur.com/Zr5FAWU.mp4",
    "https://i.imgur.com/wSGqqpI.mp4",
    "https://i.imgur.com/z4wmtV3.mp4",
    "https://i.imgur.com/OEOWtse.mp4",
    "https://i.imgur.com/ZdFbaQ9.mp4",
    "https://i.imgur.com/3UAlBWz.mp4",
    "https://i.imgur.com/EFhFM8x.mp4",
    "https://i.imgur.com/cURvCsa.mp4",
    "https://i.imgur.com/94ViCtu.mp4",
    "https://i.imgur.com/dh0WkLa.mp4",
    "https://i.imgur.com/AV3gYMS.mp4",
    "https://i.imgur.com/K87Dqcf.mp4",
    "https://i.imgur.com/W5U3pVC.mp4",
    "https://i.imgur.com/dOaF0dI.mp4",
    "https://i.imgur.com/OiB8H4S.mp4",
    "https://i.imgur.com/YT9XqBX.mp4",
    "https://i.imgur.com/7TQpMak.mp4",
    "https://i.imgur.com/tvQrBl3.mp4",
    "https://i.imgur.com/LjzNEUT.mp4",
    "https://i.imgur.com/Dxb01uA.mp4",
  "https://i.imgur.com/GsgglRY.mp4",
    "https://i.imgur.com/vJ2vEQl.mp4",
    "https://i.imgur.com/rBs2QgA.mp4",
    "https://i.imgur.com/KiTtfHH.mp4",
    "https://i.imgur.com/9WXt3AG.mp4",
    "https://i.imgur.com/keSr8cQ.mp4",
    ];
  var callback = () => api.sendMessage({body:`🌺梁Update bởi ADMIN ʚᥫບ七ÈᎧɞ梁🌺
trai của mấy bà đây, khoái khoái chảy nước miếng
----ᥫບ 七ÈᎧ----`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 