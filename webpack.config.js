//import path from "path" 같은 의미(하지만 이 페이지는 자바스크립가 아니라 사용불가)
//전체 경로 표시
const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");

//파일들이 어디서 왔는가 확인하는부분
const ENRTY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
//어디에 저장 할지 설정
const OUTPUT_DIR = path.join(__dirname, "static");

const MODE = process.env.WEBPACK_ENV;
// loader - webpack의 파일처리 방법
const config = {
  entry: ENRTY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]"
  }
};
module.exports = config;
