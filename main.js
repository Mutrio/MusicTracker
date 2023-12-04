const express = require("express");//express 요청
const app = express();
const layouts = require("express-ejs-layouts");
const path = require('path');

const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");

app.set("view engine", "ejs"); //ejs 사용
app.set("views", path.join(__dirname, "views"));

//body-parser 추가
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // Express 미들웨어 설정