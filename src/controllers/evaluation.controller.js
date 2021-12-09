const express = require("express");

const router = express.Router();

const crudController = require("./crud.controller");

const Evaluation = require("../models/evaluation.model");

router.post("", crudController.post(Evaluation));
router.get(
  "",
  crudController.getAllWithTwoPopulate(
    Evaluation,
    { path: "instructor_details", select: "first_name last_name" },
    { path: "topic_id" }
  )
);
router.get(
  "/topper",
  crudController.GetTopper(
    Evaluation,
    { path: "instructor_details", select: "first_name last_name" },
    { path: "topic_id" }
  )
);
router.patch("/:id", crudController.updateOne(Evaluation));
router.delete("/:id", crudController.deleteOne(Evaluation));

module.exports = router;
