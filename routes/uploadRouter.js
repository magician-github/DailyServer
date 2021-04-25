const express = require("express");
const { updateRouter } = require("../routes/updateRouter");
const uploadRouter = express.Router();
const path = require("path");
const multer = require("multer");
const uploadDao = require("../dao/uploadDao");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/upload"));
  },
  filename: function (req, file, cb) {
    // 时间戳-6位随机字符.文件后缀
    const timeStamp = Date.now();
    const ramdomStr = Math.random().toString(36).slice(-6);
    const ext = path.extname(file.originalname);
    const filename = `${timeStamp}-${ramdomStr}${ext}`;
    cb(null, filename);
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 150 * 1024,
  },
  fileFilter(req, file, cb) {
    //验证文件后缀名
    const extname = path.extname(file.originalname);
    const whitelist = [".jpg", ".gif", ".png", ".jpeg"];
    if (whitelist.includes(extname)) {
      cb(null, true);
    } else {
      cb(new Error(`your ext name of ${extname} is not support`));
    }
  },
});
uploadRouter.post("/", upload.single("avatar_url"), (req, res) => {
  const url = `/upload/${req.file.filename}`;
  uploadDao.IuploadAvatar({
    id: req.id,
    url: url,
    callback: (err, resp) => {
      res.send({
        code: 0,
        msg: "",
        data: url,
      });
    },
  });
});
module.exports.uploadRouter = uploadRouter;
