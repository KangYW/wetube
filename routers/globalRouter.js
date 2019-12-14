import expess from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout, postJoin, getJoin, getLogin, postLogin} from "../controllers/userController";

const globalRouter = expess.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);


export default globalRouter;