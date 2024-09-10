const express = require("express");
const {
  createProduct,
  getaProduct,
  deleteProduct,
  updateProduct,
  getAllProduct,
  addToWishlist,
  rating,
  uploadImages,
  deleteImages,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
router.post("/add", authMiddleware, isAdmin, createProduct);
router.post(
  "/upload",
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.get("/:id", getaProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete("/delete-img/:id", deleteImages);
router.get("/", getAllProduct);
module.exports = router;
