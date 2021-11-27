/** @format */

//Dependencies
import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import fileupload from 'express-fileupload';
import cloudinary from 'cloudinary';

//Internal Updates
import connect from './config/db';
import logger from './utils/logger';

//Routes import statements
import user from './routes/user.route';
import product from './routes/product.route';
import order from './routes/order.route';
import cart from './routes/cart.route';

const app = express();

//cookies and file middleware
app.use(cookieParser());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: '/temp/',
  })
);

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router middleware
app.use('/api/v1', user);
app.use('/api/v1', product);
app.use('/api/v1', order);
app.use('/api/v1', cart);

//cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

app.listen(process.env.PORT, async () => {
  logger.info(`listening to port ${process.env.PORT}`);
  await connect();
});
