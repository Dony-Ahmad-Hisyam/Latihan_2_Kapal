const connection = require("../Models/Config");
const { validationResult } = require("express-validator");

const getAllkapalController = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        erros: errors.array(),
      });
    }
    connection.query(
      "SELECT a.nama_kapal, b.nama_pemilik AS Pemilik, c.nama_dpi AS DPI, d.nama_alat_tangkap AS Alat_Tangkap FROM kapal a INNER JOIN pemilik b ON a.id_pemilik = b.id_pemilik INNER JOIN dpi c ON a.id_dpi = c.id_dpi INNER JOIN alat_tangkap d ON a.id_alat_tangkap = d.id_alat_tangkap",
      (err, rows) => {
        if (err) {
          return res.status(500).json({
            status: false,
            message: "Server Error!",
          });
        } else {
          return res.status(200).json({
            status: true,
            message: "Sukses ...!",
            data: rows,
          });
        }
      }
    );
  } catch (error) {
    console.error("Kesalahan Dalam Permintaa:", error);
    return res.status(500).json({
      status: false,
      message: "Kesalahan Dalam Server: " + error.message,
    });
  }
};
const addkapalController = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    const data = {
      nama_kapal: req.body.nama_kapal,
      id_pemilik: req.body.id_pemilik,
      id_dpi: req.body.id_dpi,
      id_alat_tangkap: req.body.id_alat_tangkap,
    };

    connection.query("INSERT INTO kapal SET ?", data, (err, rows) => {
      if (err) {
        console.error("Kesalahan dalam permintaan:", err);
        return res.status(500).json({
          status: false,
          message: "Server Error",
        });
      } else {
        return res.status(201).json({
          status: true,
          message: "Sukses..!",
          data: rows[0],
        });
      }
    });
  } catch (error) {
    console.error("Kesalahan dalam permintaan:", error);
    return res.status(500).json({
      status: false,
      message: "Kesalahan dalam server: " + error.message,
    });
  }
};

const getByIdkapalController = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        erros: errors.array(),
      });
    }
    const id = req.params.id_kapal;
    connection.query(
      "SELECT a.nama_kapal, b.nama_pemilik AS Pemilik, c.nama_dpi AS DPI, d.nama_alat_tangkap AS Alat_Tangkap FROM kapal a INNER JOIN pemilik b ON a.id_pemilik = b.id_pemilik INNER JOIN dpi c ON a.id_dpi = c.id_dpi INNER JOIN alat_tangkap d ON a.id_alat_tangkap = d.id_alat_tangkap where id_kapal = ?",
      [id],
      (err, rows) => {
        if (err) {
          return res.status(500).json({
            status: false,
            message: "Server Error",
          });
        } else {
          if (rows.length === 0) {
            return res.status(404).json({
              status: false,
              message: "Data not found",
            });
          } else {
            return res.status(200).json({
              status: true,
              message: "Sukses..!",
              data: rows[0],
            });
          }
        }
      }
    );
  } catch (error) {
    console.error("Kesalahan Dalam Permintaa:", error);
    return res.status(500).json({
      status: false,
      message: "Kesalahan Dalam Server: " + error.message,
    });
  }
};

const updatekapalController = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    const data = {
      nama_kapal: req.body.nama_kapal,
      id_pemilik: req.body.id_pemilik,
      id_dpi: req.body.id_dpi,
      id_alat_tangkap: req.body.id_alat_tangkap,
    };

    const id = req.body.id_kapal;

    connection.query("update kapal set ? where id_kapal", [data, id], (err, rows) => {
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Server Error",
        });
      } else {
        return res.status(201).json({
          status: true,
          message: "Sukses..!",
          data: rows[0],
        });
      }
    });
  } catch (error) {
    console.error("Kesalahan Dalam Permintaa:", error);
    return res.status(500).json({
      status: false,
      message: "Kesalahan Dalam Server: " + error.message,
    });
  }
};

const deletekapalController = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        erros: errors.array(),
      });
    }

    const id = req.params.id_kapal;
    connection.query("delete from kapal where id_kapal = ?", [id], (err, rows) => {
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Server Error",
        });
      } else {
        return res.status(200).json({
          status: true,
          message: "Data deleted successfully",
        });
      }
    });
  } catch (error) {
    console.error("Kesalahan Dalam Permintaa:", error);
    return res.status(500).json({
      status: false,
      message: "Kesalahan Dalam Server: " + error.message,
    });
  }
};

module.exports = {
  getAllkapalController,
  addkapalController,
  getByIdkapalController,
  updatekapalController,
  deletekapalController,
};
