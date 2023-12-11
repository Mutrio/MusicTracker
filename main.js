const express = require("express");//express 요청
const app = express();
const layouts = require("express-ejs-layouts");
const path = require('path');

app.set("view engine", "ejs"); //ejs 사용
app.set("views", path.join(__dirname, "views"));

//body-parser 추가
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // Express 미들웨어 설정

// public 경로 지정
app.use(express.static(`${__dirname}/`));

//모듈 설정
home = require("./routes/homeRoute");
music = require("./routes/musicRoute");

// Route를 등록
app.use("/", home);
app.use("/music", music);


// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});