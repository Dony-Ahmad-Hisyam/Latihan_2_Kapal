const express = require("express");
const router = express.Router();
const { getAllkapalController, addkapalController, getByIdkapalController, updatekapalController, deletekapalController } = require("../Controllers/KapalController");

router.get("/api/kapal/all", getAllkapalController);
router.post("/api/kapal/add", addkapalController);
router.get("/api/kapal/:id_kapal", getByIdkapalController);
router.put("/api/kapal/update/:id_kapal", updatekapalController);
router.delete("/api/kapal/delete/:id_kapal", deletekapalController);

module.exports = router;
