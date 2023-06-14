import Shop from "../models/shop-model.js";

async function createShop(req, res) {
  try {
    const newShop = await Shop.create(req.body);
    res.status(201).json(newShop);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function getAllShops(req, res) {
  try {
    const allShop = await Shop.find().sort({ title: "-1" });
    res.status(200).json(allShop);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function getOneShop(req, res) {
  try {
    const { id } = req.params;
    const oneShop = await Shop.findById(id);
    res.status(200).json(oneShop);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function updateOneShop(req, res) {
  try {
    const { id } = req.params;
    const updatedShop = await Shop.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedShop);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function deleteOneShop(req, res) {
  try {
    const { id } = req.params;
    const deletedShop = await Shop.findByIdAndDelete(id);
    res.status(200).json(deletedShop);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
export { createShop, getAllShops, getOneShop, deleteOneShop, updateOneShop };
