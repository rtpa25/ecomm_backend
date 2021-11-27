/** @format */

//Dependencies
import express from 'express';
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getCertainUserOrder,
  getSelfOrder,
  getAllOrders,
  getLastMonthIncome,
} from '../controllers/order.controller';
import { isLoggedIn } from '../middlewares/userMiddleware';

//create a router instance
const router = express.Router();

/*   /api/v1/createOrder  */
router.route('/createOrder').post(isLoggedIn, createOrder);

/*   /api/v1/getSelfOrders  */
router.route('/getSelfOrders').get(isLoggedIn, getSelfOrder);

/*****************************************ADMIN ONLY******************************************/
/*   /api/v1/updateOrder/:id  */
router.route('/updateOrder/:id').put(isLoggedIn, updateOrder);

/*   /api/v1/deleteOrder/:id  */
router.route('/deleteOrder/:id').delete(isLoggedIn, deleteOrder);

/*   /api/v1/getCertainUserOrder/:userId  */
router
  .route('/getCertainUserOrder/:userId')
  .get(isLoggedIn, getCertainUserOrder);

/*   /api/v1/getAllOrders  */
router.route('/getAllOrders').get(isLoggedIn, getAllOrders);

/*   /api/v1/getLastMonthIncome  */
router.route('/getLastMonthIncome').get(isLoggedIn, getLastMonthIncome);

export default router;
