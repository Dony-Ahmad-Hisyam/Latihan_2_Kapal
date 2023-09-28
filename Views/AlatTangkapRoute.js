const express = require("express");
const router = express.Router();
const { getAllAlatTangkapController, addAlatTangkapController, getByIdAlatTangkapController, updateAlatTangkapController, deleteAlatTangkapController } = require("../Controllers/AlatTangkapController");

router.get("/api/AlatTangkap/all", getAllAlatTangkapController);
router.post("/api/AlatTangkap/add", addAlatTangkapController);
router.get("/api/AlatTangkap/:id_alat_tangkap", getByIdAlatTangkapController);
router.put("/api/AlatTangkap/update/:id_alat_tangkap", updateAlatTangkapController);
router.delete("/api/AlatTangkap/delete/:id_alat_tangkap", deleteAlatTangkapController);

module.exports = router;
