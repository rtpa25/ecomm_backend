/** @format */

//Dependencies
import express from 'express';
import {
  sendStripeKey,
  captureStripePayment,
} from '../controllers/stripe.controller';
import { isLoggedIn } from '../middlewares/userMiddleware';

//create a router instance
const router = express.Router();

/*   /api/v1/sendStripeKey   */
router.route('/sendStripeKey').post(isLoggedIn, sendStripeKey);

/*   /api/v1/captureStripePayment   */
router.route('/captureStripePayment').post(captureStripePayment);

export default router;
