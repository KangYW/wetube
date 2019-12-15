//다른 클래스를 가져오는 거
import "./db1";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT;
//이모트 window Key + .
const handleListening = () => {
  console.log(`✔ Listening on: http://loaclhost:${PORT}`);
};

app.listen(PORT, handleListening);
