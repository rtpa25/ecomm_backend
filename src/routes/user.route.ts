/** @format */

//Dependencies
import express from 'express';

import {
  signup,
  login,
  getSelf,
  updateDetails,
  deleteUser,
  getAnyUserDetails,
  getAllUsers,
  getUserStats,
} from '../controllers/user.controller';
import { isLoggedIn } from '../middlewares/userMiddleware';

//create a router instance
const router = express.Router();

/*   /api/v1/signup   */
router.route('/signup').post(signup);
/*   /api/v1/login   */
router.route('/login').post(login);
/*   /api/v1/updateDetails   */
router.route('/updateDetails').patch(isLoggedIn, updateDetails);
/*   /api/v1/getSelf   */
router.route('/getSelf').get(isLoggedIn, getSelf);

/*****************************************ADMIN ONLY******************************************/

/*   /api/v1/deleteUser/:id   */
router.route('/deleteUser/:id').delete(isLoggedIn, deleteUser);
/*   /api/v1/getUserDetail/:id   */
router.route('/getUserDetail/:id').get(isLoggedIn, getAnyUserDetails);
/*   /api/v1/getAllUsers   */
router.route('/getAllUsers').get(isLoggedIn, getAllUsers);
/*   /api/v1/getUserStats   */
router.route('/getUserStats').get(isLoggedIn, getUserStats);

export default router;
