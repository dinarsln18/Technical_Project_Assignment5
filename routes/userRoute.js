const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/tambahData", userController.tambahData);
router.get("/getData", userController.getData);
router.get("/getData/:id", userController.getDataById);
router.put("/updateData/:id", userController.updateData);
router.delete("/deleteData/:id", userController.deleteData);

module.exports = router;