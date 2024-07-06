import { Router } from "express";
import { signin, singup } from "./users.controller.js";
import { checkEmailExist } from "../../checkEmailExist.js";
const userRouter = Router()

userRouter.post('/signup', checkEmailExist, singup)
userRouter.post('/signin', signin)




export default userRouter