import { HTTP, RESPONSE } from '@constants/enums';
import createError from '@helpers/createError';
import config from '@config';
import jwt from 'jsonwebtoken';
import { getUser } from './getUser';

const {
  secrets: { jwtSecret, jwtExpiresIn },
} = config();

export const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1] || req.body.token || req.query.token;

    const message = 'Unauthorized';
    if (!token) {
      return next(
        createError(HTTP.UNAUTHORIZED, {
          status: RESPONSE.ERROR,
          message,
          data: null,
        })
      );
    }
    const decoded = jwt.verify(token, jwtSecret);
    console.log(decoded);

    const curUser = await getUser((decoded as any)?.id);
    req.user = {
      ...curUser,
      data: { id: curUser?.id },
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: 401,
      error: 'authentication failed, please login again',
    });
  }
};

export const generateToken = (id, email) => {
  const token = jwt.sign(
    {
      id,
      email,
    },
    jwtSecret,
    {
      expiresIn: jwtExpiresIn,
    }
  );

  return token;
};
