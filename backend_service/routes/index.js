//routes/index.js中负责将所有的路由组合在一起，然后导出

const express = require("express"),
    highlineRouter = require("./highline"),
    messageRouter = require("./message"),
    profileRouter = require("./profile"),
    cardsRouter = require("./cards"),
    requestRouter = require("./request"),
    router = express.Router();

router.use("/highline", highlineRouter);
router.use("/message", messageRouter);
router.use("/profile", profileRouter);
router.use("/cards", cardsRouter);
router.use("/request", requestRouter);

module.exports = router;
