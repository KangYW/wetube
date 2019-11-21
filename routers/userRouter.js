import expess from "express";
import routes from "../routes";

const userRouter = expess.Router();

userRouter.get(routes.users, (req,res) => res.send('User index'));
userRouter.get(routes.userDetail, (req,res) => res.send('User userDetail'));
userRouter.get(routes.userProfile, (req,res) => res.send('User userProfile'));
userRouter.get(routes.changePassword, (req,res) => res.send('User changePassword'));

export default userRouter;