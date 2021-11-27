/** @format */

//Dependencies
import express from 'express';
import {
  createCart,
  updateCart,
  deleteCart,
  getSelfCart,
  getCertainCart,
  getAllCart,
} from '../controllers/cart.controller';
import { isLoggedIn } from '../middlewares/userMiddleware';

//create a router instance
const router = express.Router();

/*   /api/v1/createCart   */
router.route('/createCart').post(isLoggedIn, createCart);

/*   /api/v1/updateCart/:id   */
router.route('/updateCart/:id').put(isLoggedIn, updateCart);

/*   /api/v1/deleteCart/:id   */
router.route('/deleteCart/:id').delete(isLoggedIn, deleteCart);

/*   /api/v1/getSelfCart   */
router.route('/getSelfCart').get(isLoggedIn, getSelfCart);

/*****************************************ADMIN ONLY******************************************/

/*   /api/v1/getCertainCart/:userId   */
router.route('/getCertainCart/:userId').get(isLoggedIn, getCertainCart);

/*   /api/v1/getAllCarts   */
router.route('/getAllCarts').get(isLoggedIn, getAllCart);

export default router;
