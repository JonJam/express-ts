import * as express from "express";
import { get } from "../controllers/usersController";

const router = express.Router();

/* GET users listing. */
router.get("/", get);

export default router;
