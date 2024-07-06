import { Router } from "express";
import { addPost, deletePost, getAllPosts, getSinglePost, getUserPosts, updateUser } from "./posts.controller.js";
const postRouter = Router()

postRouter.post('/', addPost)
postRouter.get('/', getAllPosts)
postRouter.get('/:id', getSinglePost)
postRouter.get('/me/:id', getUserPosts)
postRouter.put('/:id', updateUser)
postRouter.delete('/:id', deletePost)


export default postRouter