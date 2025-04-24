import express from 'express'
import { login, Register } from '../controller/UserControlle.js';

const UserRouter = express.Router();

UserRouter.post("/register",Register)
UserRouter.post("/login",login)


export default UserRouter;