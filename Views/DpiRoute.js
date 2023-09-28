const express = require("express");
const router = express.Router();
const { getAllDpiController, addDpiController, getByIdDpiController, updateDpiController, deleteDpiController } = require("../Controllers/DpiController");

router.get("/api/dpi/all", getAllDpiController);
router.post("/api/dpi/add", addDpiController);
router.get("/api/dpi/:id_dpi", getByIdDpiController);
router.put("/api/dpi/update/:id_dpi", updateDpiController);
router.delete("/api/dpi/delete/:id_dpi", deleteDpiController);

module.exports = router;