/** @format */

//Dependencies
import express from 'express';
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProduct,
} from '../controllers/product.controller';
import { isLoggedIn } from '../middlewares/userMiddleware';

//create a router instance
const router = express.Router();

/*   /api/v1/getSingleProduct/:id   */
router.route('/getSingleProduct/:id').get(isLoggedIn, getSingleProduct);

/*   /api/v1/getAllProducts   */
router.route('/getAllProducts').get(isLoggedIn, getAllProduct);

/*****************************************ADMIN ONLY******************************************/

/*   /api/v1/addProduct   */
router.route('/addProduct').post(isLoggedIn, addProduct);

/*   /api/v1/updateProduct   */
router.route('/updateProduct/:id').put(isLoggedIn, updateProduct);

/*   /api/v1/deleteProduct   */
router.route('/deleteProduct/:id').delete(isLoggedIn, deleteProduct);

export default router;
