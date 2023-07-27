const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video.controller");

router.post("/post", videoController.postVideo);
router.get("/", videoController.getVideoLists);
router.get("/:id", videoController.getVideoDetails);
router.get("/products/:id", videoController.getProductsFromVideo);
router.get("/comments/:id", videoController.getCommentsFromVideo);
router.post("/post/comment/:id", videoController.postCommentFromVideo);
router.put("/edit/:id", videoController.editVideo);
router.delete("/delete/:id", videoController.deleteVideo);

module.exports = router;
