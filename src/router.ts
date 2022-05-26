import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";

export const router = Router();

router.post('/user', new CreateUserController().handle);
router.get('/user',  new ListUserController().hendle);