const express = require("express");
const router = express.Router();
const { getAllPemilikController, addPemilikController, getByIdPemilikController, updatePemilikController, deletePemilikController } = require("../Controllers/PemilikController");

router.get("/api/Pemilik/all", getAllPemilikController);
router.post("/api/Pemilik/add", addPemilikController);
router.get("/api/Pemilik/:id_pemilik", getByIdPemilikController);
router.put("/api/Pemilik/update/:id_pemilik", updatePemilikController);
router.delete("/api/Pemilik/delete/:id_pemilik", deletePemilikController);

module.exports = router;
