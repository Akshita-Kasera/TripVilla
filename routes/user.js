const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/user.js");
const Listing = require("../models/listing");
const Review = require("../models/review"); 
const{validateReview ,isLoggedIn,isReviewAuthor}=require("../middleware.js");

router.route("/signup")
    .get(userController.renderSignup)
    .post(userController.signup);

router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl,
    passport.authenticate("local",{
    failureRedirect:'/login',
    failureFlash:true,
    }),
    userController.login);


router.get("/logout",userController.logout);

router.get("/account/listings", isLoggedIn, wrapAsync(async (req, res) => {
  const userListings = await Listing.find({ owner: req.user._id });
  res.render("account/listings", { userListings });
}));

router.get("/account/reviews", isLoggedIn, wrapAsync(async (req, res) => {
  const reviews = await Review.find({ author: req.user._id }).populate("listing");
  res.render("account/reviews", { reviews });
}));
  
module.exports=router;