//다른 클래스를 가져오는 거
import app from "./app";

const PORT = 4000;
//이모트 window Key + .
const handleListening = () => {
    console.log(`✔ Listening on: http://loaclhost:${PORT}`);
}

app.listen(PORT, handleListening);