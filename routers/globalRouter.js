import expess from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  join,
  login,
  logout,
  postJoin,
  getJoin,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogin
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middleware";
import passport from "passport";

const globalRouter = expess.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate(
    "github",
    passport.authenticate("github", { failureRedirect: "/login" })
  ),
  postGithubLogin
);

export default globalRouter;
