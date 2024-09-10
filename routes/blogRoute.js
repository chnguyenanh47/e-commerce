const express = require("express");
const mongoose = require("mongoose");
const {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getAllBlogs,
  liketheBlog,
  disliketheBlog,
  uploadImages,
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImage");
// tạo mới
router.post("/", authMiddleware, isAdmin, createBlog);
// 1 blog
// thêm ảnh
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);

router.get("/:id", getBlog);
// tất cả blog
router.get("/", getAllBlogs);
// thích 1 blog
router.put("/likes", authMiddleware, liketheBlog);
// thích 1 blog
router.put("/dislikes", authMiddleware, disliketheBlog);
// cập nhật blog
router.put("/:id", authMiddleware, isAdmin, updateBlog);
// xoá 1 blog
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
