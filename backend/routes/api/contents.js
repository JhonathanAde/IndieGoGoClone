const express = require("express");
const { check, validationResult } = require("express-validator");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const asyncHandler = require("express-async-handler");
const { Content } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

//Content validators
/* *********************************************************************/

const contentValidators = [
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Content box must have an image url"),
  check("campaignId")
    .exists({ checkFalsy: true })
    .withMessage("Please submit Basic Info form first"),
  check("story")
    .exists({ checkFalsy: true })
    .withMessage("Please include a story for your campaign"),
  handleValidationErrors,
];

//Create Contents
/* ********************************************************************/
router.post(
  "/",
  requireAuth,
  contentValidators,
  asyncHandler(async (req, res) => {
    const { content, campaignId, overlay, story } = req.body;

    const contents = await Content.create({
      content,
      campaignId,
      overlay,
      story,
    });

    res.json({ contents });
  })
);

module.exports = router;
