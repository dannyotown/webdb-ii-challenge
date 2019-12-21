const express = require("express");
const db = require("../utils/db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars").select();

    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cars = await db("cars")
      .where({ id: req.params.id })
      .first();

    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = {
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      transmissionType: req.body.transmissionType || null,
      titleStatus: req.body.titleStatus || null
    };
    const [id] = await db("cars").insert(body);
    res.json(
      await db("cars")
        .where("id", id)
        .first()
    );
  } catch (error) {
    next(error);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const payload = {
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      transmissionType: req.body.transmissionType,
      titleStatus: req.body.titleStatus
    };
    await db("cars")
      .where("id", req.params.id)
      .update(payload);
    res.json(
      await db("cars")
        .where("id", req.params.id)
        .first()
    );
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await db("cars")
      .where("id", req.params.id)
      .del();
    res.json({ success: "Car Deleted Succesfully" });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
