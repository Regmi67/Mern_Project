import express from "express";
import {
  createShop,
  getAllShops,
  getOneShop,
  updateOneShop,
  deleteOneShop,
} from "../controllers/shop-controller.js";

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .get(getAllShops)
  .post(createShop);

// prettier-ignore
router
  .route('/:id')
  .get(getOneShop)
  .put(updateOneShop)
  .delete(deleteOneShop);

export default router;
