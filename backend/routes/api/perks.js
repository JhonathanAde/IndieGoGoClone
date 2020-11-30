const express = require("express");
const { check, validationResult } = require("express-validator");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const asyncHandler = require("express-async-handler");
const { Perk } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

// Perk Validators
/* ******************************************************************/

const perkValidators = [
  check("visibility")
    .exists({ checkFalsy: true })
    .withMessage("Please select visibility of the perk"),
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please input a title")
    .isLength({ max: 30 })
    .withMessage("The title must not be longer 30 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please add a description")
    .isLength({ max: 130 })
    .withMessage("The description must be no longer than 130 characters"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Please add a price for the perk(s)"),
  check("quantityAvailable")
    .exists({ checkFalsy: true })
    .withMessage("Please include the quantity"),
  check("campaignId")
    .exists({ checkFalsy: true })
    .withMessage("Please submit Basic Info form first"),
  handleValidationErrors,
];

// Create Perk
/* ******************************************************************/

router.post(
  "/",
  requireAuth,
  perkValidators,
  asyncHandler(async (req, res) => {
    const {
      visibility,
      title,
      description,
      perkImage,
      price,
      quantityAvailable,
      campaignId,
    } = req.body;

    const perks = await Perk.create({
      visibility,
      title,
      description,
      perkImage,
      price,
      quantityAvailable,
      campaignId,
    });

    res.json({ perks });
  })
);

module.exports = router;
