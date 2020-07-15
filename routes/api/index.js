const router = require("express").Router();
const loginRoutes = require("./login");
const postRoutes = require("./posts");
const commentsRoutes = require("./comments");
// Post routes
router.use("/posts", postRoutes);
//Login routes
router.use("/auth", loginRoutes);

router.use("/comments", commentsRoutes);

module.exports = router;
