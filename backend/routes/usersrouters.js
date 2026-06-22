import express from "express";
import { saveUser } from "../controllers/UsersController.js";

const router = express.Router();

router.post("/saveuser", saveUser);

export default router;