import expess from "express";
import routes from "../routes";
import { userDetail, users, editProfile, changePassword } from "../controllers/userController";

const userRouter = expess.Router();

userRouter.get(routes.userProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;