// const express = require('express');
// 위와 같은 내용 babel preset 이용하여 바꿈
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
// export 를 하지 않아서 {안에 함수를 써주고} 임폴트 시켜야함.
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middleware";

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

// //서버생성
// const PORT = 4000;
// //작동 방식
// const handleListening = () =>
//     console.log(`Listening on: http://loaclhost:${PORT}`);

// req, res 를 사용하여 서버가 응답할수 있게 해줌 (응답)
// const handleHome =  (req, res) =>  res.send("Hello My Home");
// const handleProfile = (req, res) => res.send("You are on my profile");

app.use(helmet());
app.set("view engine", "pug");
// upload
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

// midleware > route
// 유저로 부터 받은 cookie를 이해하는곳

app.use(cookieParser());

// 유저로 부터 받은 데이터(정보)를 이해하는곳

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
// 쿠키 값을 변형시킴 -secret
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);
//passport 초기화
app.use(passport.initialize());
//쿠키에서 쿠키의 정보에 맞는 사용자 찾아줌
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// //응답 불러주기
// app.get("/", handleHome);
// app.get("/profile", handleProfile);
// app.listen(PORT, handleListening);

// export 값을 지정 해주면 app 이라는 이름을 사용할수있음
export default app;
