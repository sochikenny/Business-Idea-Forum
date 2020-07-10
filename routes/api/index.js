const router = require("express").Router();
const loginRoutes = require("./login");
const postRoutes = require("./posts");

// Post routes
router.use("/posts", postRoutes);
//Login routes
router.use("/auth", loginRoutes);

module.exports = router;
