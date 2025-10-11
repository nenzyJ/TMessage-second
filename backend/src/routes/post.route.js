import express from "express"
import { createPost, getPosts, getPost, getUsersPosts, likePost, deletePost } from "../controllers/post.controller.js";
import upload from "../middleware/upload.middleware.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getPosts)
router.get("/:postId", getPost)
router.get("/user/:userName", getUsersPosts);

router.post("/", protectRoute, upload.single("image") ,createPost );
router.post("/:postId/like", protectRoute, likePost);
router.delete("/:postId", protectRoute, deletePost)

export default router;