module.exports.config = {
  name: "gainga",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Random ảnh girl",
  commandCategory: "ảnh",
  usages: "gainga",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/J4qKwgcz/images.jpg",
"https://i.postimg.cc/hvRMgR5f/images-1.jpg",
"https://i.postimg.cc/8Cnn23G6/images-10.jpg",
"https://i.postimg.cc/bwg5TrFL/images-11.jpg",
"https://i.postimg.cc/qRhZ4LBZ/images-12.jpg",
"https://i.postimg.cc/br1C2wtx/images-13.jpg",
"https://i.postimg.cc/NfwPvm3p/images-14.jpg",
"https://i.postimg.cc/wxNbr0G1/images-15.jpg",
"https://i.postimg.cc/J4cYrtmm/images-16.jpg",
"https://i.postimg.cc/L5W7jbCS/images-17.jpg",
"https://i.postimg.cc/8zM3rwh8/images-18.jpg",
"https://i.postimg.cc/DwxCGD8M/images-19.jpg",
"https://i.postimg.cc/L6RvbRPW/images-2.jpg",
"https://i.postimg.cc/T3d7pGYb/images-20.jpg",
"https://i.postimg.cc/DytHZR4d/images-21.jpg",
"https://i.postimg.cc/1zSd06H8/images-22.jpg",
"https://i.postimg.cc/9MFNKhsV/images-23.jpg",
"https://i.postimg.cc/4dLFT0Tc/images-24.jpg",
"https://i.postimg.cc/Bbj7ZCqV/images-25.jpg",
"https://i.postimg.cc/1RdYCbBh/images-26.jpg",
"https://i.postimg.cc/K8SpFLC0/images-27.jpg",
"https://i.postimg.cc/QdQ4MC3h/images-28.jpg",
"https://i.postimg.cc/1zyWVSm6/images-29.jpg",
"https://i.postimg.cc/Hn0zkvq3/images-3.jpg",
"https://i.postimg.cc/4ddBw1hx/images-30.jpg",
"https://i.postimg.cc/4dSw0hzb/images-31.jpg",
"https://i.postimg.cc/5yQpWNgc/images-32.jpg",
"https://i.postimg.cc/xqr5fDpX/images-33.jpg",
"https://i.postimg.cc/pV9tLf1v/images-34.jpg",
"https://i.postimg.cc/Dft3JStX/images-35.jpg",
"https://i.postimg.cc/13SxBLRR/images-36.jpg",
"https://i.postimg.cc/Hk9qhBjw/images-37.jpg",
"https://i.postimg.cc/Ls4cKLZr/images-38.jpg",
"https://i.postimg.cc/nLd6Hr4M/images-39.jpg",
"https://i.postimg.cc/9fzLYp9F/images-4.jpg",
"https://i.postimg.cc/1t22qdYQ/images-40.jpg",
"https://i.postimg.cc/2yWJFxPB/images-41.jpg",
"https://i.postimg.cc/zDH9rJVX/images-42.jpg",
"https://i.postimg.cc/26ZTPSTs/images-5.jpg",
"https://i.postimg.cc/wBP0fm55/images-6.jpg",
"https://i.postimg.cc/7YvjPp21/images-7.jpg",
"https://i.postimg.cc/HLLhPmqm/images-8.jpg",
"https://i.postimg.cc/L827LLvn/images-9.jpg",
"https://i.postimg.cc/c44w3Jwd/t-i-xu-ng.jpg",
"https://i.postimg.cc/3xfBNvqM/t-i-xu-ng-1.jpg",
"https://i.postimg.cc/7YxMN988/t-i-xu-ng-10.jpg",
"https://i.postimg.cc/rws1Bpwf/t-i-xu-ng-11.jpg",
"https://i.postimg.cc/DwNrnKWn/t-i-xu-ng-12.jpg",
"https://i.postimg.cc/7LTgLQ77/t-i-xu-ng-13.jpg",
"https://i.postimg.cc/SsFcY77P/t-i-xu-ng-14.jpg",
"https://i.postimg.cc/c1cf63KD/t-i-xu-ng-15.jpg",
"https://i.postimg.cc/B6THTLmn/t-i-xu-ng-16.jpg",
"https://i.postimg.cc/yxnR5q4q/t-i-xu-ng-17.jpg",
"https://i.postimg.cc/6qBRYWPL/t-i-xu-ng-18.jpg",
"https://i.postimg.cc/8kLt4s7W/t-i-xu-ng-19.jpg",
"https://i.postimg.cc/YCCRt3bf/t-i-xu-ng-2.jpg",
"https://i.postimg.cc/jjWh7jVD/t-i-xu-ng-3.jpg",
"https://i.postimg.cc/N0Wk7wYp/t-i-xu-ng-4.jpg",
"https://i.postimg.cc/595SvGrS/t-i-xu-ng-5.jpg",
"https://i.postimg.cc/sDwPHWsB/t-i-xu-ng-6.jpg",
"https://i.postimg.cc/4yGvqbYc/t-i-xu-ng-7.jpg",
"https://i.postimg.cc/PJMbjpDR/t-i-xu-ng-8.jpg",
"https://i.postimg.cc/pTzYs1Lx/t-i-xu-ng-9.jpg",
     ];
     var callback = () => api.sendMessage({body:`Số ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };