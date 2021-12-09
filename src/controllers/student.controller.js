const express = require("express");

const router = express.Router();

const crudController = require("./crud.controller");

const student = require("../models/student.model");

router.post("", crudController.post(student));
router.get(
  "",
  crudController.getAllWithPopulate(student, {
    path: "user_id",
    select: "first_name last_name",
  })
);
router.patch("/:id", crudController.updateOne(student));
router.delete("/:id", crudController.deleteOne(student));

module.exports = router;
