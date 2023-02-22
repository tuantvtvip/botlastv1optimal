module.exports.config = {
    name: "timeJoin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nam",
    description: "Xem tg vao box thoi",
    commandCategory: "Thông tin",
    usages: "timejoin",
    cooldowns: 5,
};
const fs = require("fs");
var p = __dirname + "/cache/timeJoin.json";
module.exports.handleEvent = async function ({
    event: e
}) {
    const {
        threadID: t,
        senderID: u,
        body
    } = e, {
        readFileSync: r,
        writeFileSync: w
    } = fs, {
        parse: o,
        stringify: s
    } = JSON;
    var get = require("moment-timezone").tz("Asia/Ho_Chi_Minh"),
        gio = get.format("HH:mm:ss"),
        ngay = get.format("YYYY-MM-D"),
        burh = get.format("D/MM/YYYY");
    let a = o(r(p));
    if (!a[u + t]) {
        a[u + t] = {
            uid: u,
            gio: gio,
            ngay: ngay,
            burh: burh
        };
        w(p, s(a));
    }
};
module.exports.run = async function ({
    api: a,
    event: e,
    args: g,
    Users: u,
    Threads: d
}) {
    const {
        threadID: t,
        messageID: m,
        senderID: s
    } = e, {
        sendMessage: n
    } = a, c = this.config.credits, {
        readFileSync: f,
        existsSync: x,
        writeFileSync: w
    } = fs, {
        parse: o,
        stringify: r
    } = JSON;
    if ('Nam' != c) return;
    if (!x(p)) w(p, r({}));
    let i = await a.getThreadInfo(t),
        tN = i.threadName,
        L = o(f(p)),
        timeN = L[s + t].ngay,
        timeG = L[s + t].gio;
    var gn1 = new Date(`${timeN} ${timeG}`),
        gn2 = new Date(),
        gn3 = gn1.getTime(),
        gn4 = gn2.getTime(),
        get_Ngay = Math.ceil((gn4 - gn3) / (24 * 60 * 60 * 1000)),
        get_Tuan = Math.ceil((gn4 - gn3) / (7 * 24 * 60 * 60 * 1000)) - 1,
        get_Thang = Math.ceil((gn4 - gn3) / (31 * 24 * 60 * 60 * 1000)) - 1,
        get_Gio = Math.ceil((gn4 - gn3) / (60 * 60 * 1000)),
        get_Phut = Math.ceil((gn4 - gn3) / (60 * 1000)),
        get_Giay = Math.ceil((gn4 - gn3) / (1000));
    if (get_Ngay == 0) return n(`Chỉ bắt đầu tính sau 1 ngày khi bot vào nhóm`, t, m);
    n(`◆━━━━━━•☆•━━━━━━◆\n        === [ ${tN} ] ===\n\n Bạn đã gia nhập nhóm vào lúc:\n\n[ ${L[s+t].gio} ] ngày [ ${L[s+t].burh} ]\n\n◆━━━━━━•💜•━━━━━━◆\n\n Số ngày đã qua: ${get_Ngay} ngày\n Số tuần đã qua: ${get_Tuan} tuần\n Số tháng đã qua ${get_Thang} tháng\n Số giờ đã qua: ${get_Gio} giờ\n Số phút đã qua: ${get_Phut} phút\n Số giây đã qua: ${get_Giay} giây`, t, m);
}