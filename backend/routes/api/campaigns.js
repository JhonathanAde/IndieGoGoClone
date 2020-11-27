const express = require("express");
const { check, validationResult } = require("express-validator");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const asyncHandler = require("express-async-handler");
const { Campaign } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");
// const router = require("./session");
const router = express.Router();

// Validators
/* ****************************************************************/
const campaignValidators = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a title")
    .isLength({ max: 35 })
    .withMessage("The title must be no longer than 35 characters long"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a Description")
    .isLength({ max: 125 })
    .withMessage("The description must be no longer than 125 characters long"),
  check("duration")
    .exists({ checkFalsy: true })
    .withMessage("A duration must be included"),
  handleValidationErrors,
];

// Create Campaign
/* ****************************************************************/

router.post(
  "/",
  requireAuth,
  campaignValidators,
  asyncHandler(async (req, res) => {
    console.log("I am in this post");
    const { title, description, duration } = req.body;
    const { user } = req;
    const userId = user.id;

    console.log("current user", user);
    const campaign = Campaign.create({
      title,
      description,
      duration,
      userId,
    });
    res.json({ campaign });
    // console.log(req.body);
    // const validatorErrors = validationResult(req);
    // try {
    //   if (validatorErrors.isEmpty()) {
    //     await campaign.save();
    //     res.redirect("/");
    //   } else {
    //     const errors = validatorErrors.array().map((error) => error.msg);
    //     res.send("start-a-campaign", {
    //       title: title,
    //       description,
    //       duration,
    //       errors,
    //     });
    //   }
    // } catch (err) {
    //   if (
    //     err.name === "SequelizeValidationError" ||
    //     err.name === "SequelizeUniqueConstraintError"
    //   ) {
    //     const errors = err.errors.map((error) => error.message);
    //     res.send("start-a-campaign", {
    //       title: title,
    //       description,
    //       duration,
    //       errors,
    //     });
    //   } else {
    //     next(err);
    //   }
    // }
  })
);

//Get Campaigns
/* *********************************************************************/
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { user } = req;
    const userId = user.id;
    const campaigns = await Campaign.findAll({
      where: {
        userId: userId,
      },
    });
    res.json({ campaigns });
  })
);

// router.get(
//   "/",
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     const { user } = req;
//     const userId = user.id;
//     const campaigns = await Campaign.findByPk({})
//   })
// )

module.exports = router;
