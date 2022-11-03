"use strict";
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Reaccion = require("../models/reaction.model");

router.post("/IngresarReaccion", (req, res) => {
  let body = req.body;
  let nueva_emocion = new Reaccion({
    Sentimiento: body.Sentimiento,
    Fecha: body.Fecha,
    _idPersona: body._idPersona,
  });

  nueva_emocion.save(function (err, emocionDB) {
    if (err) {
      res.json({
        success: false,
        msj: "No se pudo guardar la emoción, ocurrió el siguiente error: ",
        err,
      });
    } else {
      res.json({
        success: true,
        msj: "Los datos se enviaron de forma exitosa.",
        emocionDB,
      });
    }
  });
});

router.get("/BuscarReaccionesPersona", (req, res) => {
  let params = req.query;
  if (
    params._idPersona != "" &&
    params._idPersona != null &&
    params._idPersona != undefined
  ) {
    Reaccion.find({ _idPersona: params._idPersona }, (err, _idPersonaDB) => {
      if (err) {
        res.json({
          resultado: false,
          msj: "No se pudo encontar la información",
          err,
        });
      } else {
        res.json({
          resultado: true,
          msj: "La información se encontró con éxito",
          _idPersonaDB,
        });
      }
    });
  }
});
module.exports = router;
