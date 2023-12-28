
// require("dotenv").config();
// const port = 3000;
// const express = require("express"),
//   app = express(),
//   layouts = require("express-ejs-layouts"),
//   bodyParser = require("body-parser"),
//   http = require("http").createServer(app),
//   errorController = require("./controllers/errorController"),
//   //Router 모듈 사용
//   home = require('./routes/homeRoute'),
//   timeline = require('./routes/timelineRoute'),
//   musicRoute = require("./routes/musicRoute");
  
// app.set("view engine", "ejs");

// //기본 미들웨어 함수로 등록
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // 레이아웃 사용
// app.use(layouts);

// //라우터 호출
// app.use("/", home);
// app.use("/home", home);
// app.use("/music", musicRoute);
// app.use("/timeline", timeline);

// //에러 처리 위한 미들웨어 사용
// app.use(errorController.logErrors);
// app.use(errorController.respondNoResourceFound);
// app.use(errorController.respondInternalError);

// // public 경로 지정
// app.use(express.static(`${__dirname}/`));

// // 서버 시작 (포트: 3000)
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
//

// main.js
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
home = require("./routes/homeRoute")

// Route.js 파일을 가져와서 사용
const musicRoute = require("./routes/musicRoute");
const timelineRoute = require("./routes/timelineRoute");

// Route를 등록
app.use("/", home);
app.use("/music", musicRoute);
app.use("/timeline", timelineRoute);


// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
