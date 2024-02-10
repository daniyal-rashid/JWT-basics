const express = require("express")
const router = express.Router()

const {login, dashboard} = require("../controllers/main")
const authenticationMiddlware = require("../middleware/auth")

router.route("/login").post(login)
router.route("/dashboard").get(authenticationMiddlware, dashboard)

module.exports = router