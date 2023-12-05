require("dotenv").config();
const port = 3000;
const express = require("express"),
  app = express(),
  layouts = require("express-ejs-layouts"),
  bodyParser = require("body-parser"),
  http = require("http").createServer(app),
  errorController = require("./controllers/errorController"),
  //Router 모듈 사용
  home = require('./routes/homeRoute'),
//   login = require('./routes/loginRoute');
  timeline = require('./routes/timelineRoute');
  
app.set("view engine", "ejs");

//기본 미들웨어 함수로 등록
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//기본 미들웨어 함수로 등록
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 레이아웃 사용
app.use(layouts);

//라우터 호출
app.use("/", home);
app.use("/home", home);
app.use("/timeline", timeline);

//에러 처리 위한 미들웨어 사용
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

// 포트 : 3000
app.listen(port, () => {
  console.log(`Listeninig to port ${port}`);
});
