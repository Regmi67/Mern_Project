import { model, Schema } from "mongoose";

const shopSchema = new Schema({
  storeName: {
    type: String,
    required: [true, "Please enter Store Name"],
    minLength: [3, "Store Number must be 3 character"],
  },
  storeNumber: {
    type: Number,
    required: [true, "Please enter store number greater than 0 "],
    min: [1, "should be greater than 0"],
  },

  open: {
    type: Boolean,
    default: false,
  },
});

const Shop = model("Shop", shopSchema);
export default Shop;
