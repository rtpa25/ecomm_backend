/** @format */

import { Response } from 'express';
import { UserDocument } from '../models/user.model';

export const cookieToken = (user: UserDocument, res: Response) => {
  const token = user.getJwtToken();

  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    secure: true,
  };

  res.status(200).cookie('token', token, options).json({
    success: true,
    token,
    user,
  });
};
