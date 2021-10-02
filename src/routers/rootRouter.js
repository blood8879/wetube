import express from 'express';
import { getJoin, join, getLogin, postJoin, postLogin } from '../controllers/userController';
import { trending, search, home } from '../controllers/videoController';

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;