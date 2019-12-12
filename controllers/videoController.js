import {videos} from "../db"

export const home = (req,res) => {

    res.render("home", {pageTitle : "Home", videos })
};

export const search = (req,res )=>{
    //ES6 방식 const searchingBy = req.query.term;
    const {
        query: { term: searchingBy }
    }= req;
    //ES6 searchingBy : searchingBy 이런식으로 표시
    res.render("search", {pageTitle : "Search", searchingBy })
}
// export const videos = (req,res) => res.render("videos", {pageTitle : "Videos"});

export const upload = (req,res) => res.render("upload", {pageTitle : "Upload"});

export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle : "Video Detail"});

export const editVideo = (req,res) => res.render("editVideo", {pageTitle : "Edit Video"});

export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle : "Delete Video"});
