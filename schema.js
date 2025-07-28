// schema.js
// The most powerful schema description language and data validator for JavaScript
const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(0),
    country: Joi.string().required(),
    location: Joi.string().required(),
    category: Joi.string().valid(
      'hotel', 'iconic cities', 'resort', 'arctic', 'villa','rooms',
      'beach', 'castles', 'heritage', 'trending','amazing pools','boat','farms',
      'camping'
    ).required(),
    image: Joi.object({
      url: Joi.string().allow('', null),
    }).optional(),
  }).required()
});


module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating : Joi.number().required().min(1).max(5),
    comment : Joi.string().required(),
  }).required(),
});