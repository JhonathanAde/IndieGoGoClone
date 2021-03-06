const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("firstName")
    .isLength({ max: 30 })
    .withMessage("First name cannot be longer than 30 characters long"),
  check("lastName")
    .isLength({ max: 30 })
    .withMessage("Last name cannot be longer than 30 characters long"),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, firstName, lastName, password, username } = req.body;
    console.log("/api/users", firstName, lastName);
    const user = await User.signup({
      email,
      username,
      firstName,
      lastName,
      password,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

module.exports = router;
