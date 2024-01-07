const express = require("express");
const router = express.Router();
const commuteTrackingController = require("../controllers/commute-tracking-controller");

router
	.route("/")
	.post(commuteTrackingController.createNewRecord);

router
	.route("/:id")
	.get(commuteTrackingController.getSingleUser)

module.exports = router;
