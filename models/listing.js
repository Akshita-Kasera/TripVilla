const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");

const listingSchema=new Schema({
    title:{
        type:String,
        // required:true,
    },
    description:String,
    image: {
    url: {
      type: String,
      // required: true,
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1579493933703-70473cdf84f8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
          : v,
      
    },
    filename: {
      type: String,
      default: "listingimage",
    },
  },
    price:Number,
    location:String, 
    country:String,
    reviews:[
      {
        type:Schema.Types.ObjectId,
        ref:"Review",
      },
    ],
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
    },
    geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  category: {
    type: String,
    enum: [
      'hotel', 'iconic cities', 'resort', 'arctic', 'villa','rooms',
      'beach', 'castles', 'heritage', 'trending','boat','farms',
      'camping'
    ],
    required: true
  }

});

listingSchema.post("findOneAndDelete" ,async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}});
  }
});




const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;