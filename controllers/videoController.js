import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    //   앞의 값은 자신이 정하고싶은것 : -1의값은 위아래의 순서를 바꾸겠다는 약속
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

// search

export const search = async (req, res) => {
  // ES6 방식 const searchingBy = req.query.term;
  // ES6 searchingBy : searchingBy 이런식으로 표시
  const {
    query: { term: searchingBy }
  } = req;
  let videos = [];
  try {
    //option의 'i' 는 insensitive(덜민감) 를 의미함.
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
// export const videos = (req,res) => res.render("videos", {pageTitle : "Videos"});

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  // ToDo : Upload and Save video
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: `${video.title}`, video });
  } catch (error) {
    console.log(error);
    // 에러발생시 홈으로 이동
    res.redirect(routes.home);
  }
};
// rendering
export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    // 상단바의 제목
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// update
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    //                            id 에서 ,{ 제목과, 설명}을 바꿈
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
