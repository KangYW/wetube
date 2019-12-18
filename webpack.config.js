//import path from "path" 같은 의미(하지만 이 페이지는 자바스크립가 아니라 사용불가)
//전체 경로 표시
const path = require("path");

const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

//파일들이 어디서 왔는가 확인하는부분
const ENRTY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
//어디에 저장 할지 설정
const OUTPUT_DIR = path.join(__dirname, "static");

const MODE = process.env.WEBPACK_ENV;
// loader - webpack의 파일처리 방법
const config = {
  entry: ["@babel/polyfill", ENRTY_FILE],
  mode: MODE,
  // 조건 use 에서 쓴건 아래서부터 시작함.
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },

      {
        // scss 파일을보면
        test: /\.(scss)$/,
        // plugin을 사용여 CSS로 바꿔줌
        // 가져온 CSS 추출함
        use: ExtractCSS.extract([
          {
            // 3번째 CSS가져옴
            loader: "css-loader"
          },
          {
            // 2번째 특정 plugin을 이용하여 CSS를 실행시킴
            loader: "postcss-loader",
            options: {
              plugins() {
                //배열을 보내줌 browser 에 99.5% 만큼 맞춰줌
                return [autoprefixer({ browsers: "cover 99.5%" })];
              }
            }
          },
          {
            // 1번째 실행 Sass -> CSS
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
