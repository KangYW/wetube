import expess from "express";
import routes from "../routes";
import { 
    videoDetail,   
    deleteVideo, 
    getUpload, 
    postUpload, 
    getEditVideo, 
    postEditVideo
} from "../controllers/videoController";
const videoRouter = expess.Router();
import {uploadVideo} from "../middleware";

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

