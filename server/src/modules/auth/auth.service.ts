import { Op } from 'sequelize';
import models from '@db/models';
import { sanitizeObj } from '@helpers/sanitizeObj';
import { generateToken } from '@helpers/authentication';
import { AuthInterface } from './auth.interface';
import { hashPassword, comparePassword } from '@helpers/password';
import { jwtDecode } from '@helpers/jwt';

const { User } = models;

export const createUser = async (data: AuthInterface) => {
  try {
    const existingEntity = await User.findOne({
      where: { email: data.email },
      raw: true,
      attributes: ['id'],
    });
    if (existingEntity) {
      throw new Error('User with this email already exists');
    }

    const user = await User.create(
      sanitizeObj({
        email: data.email,
        password: hashPassword(data.password),
      })
    );

    const token = generateToken(user.id, user.email);

    await user.save();

    return {
      error: false,
      message: 'User registered successfully.',
      data: {
        id: user.id,
        email: user.email,
        token,
      } as any,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: (err as any).message,
      data: null,
    };
  }
};

export const login = async (data: AuthInterface) => {
  try {
    const user = await User.findOne({
      where: {
        email: { [Op.iLike]: `%${data.email}%` },
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!user) {
      throw new Error('Invalid login credentials.');
    }

    const isCorrectPassword = comparePassword(user.password, data.password);

    if (!isCorrectPassword) {
      throw new Error('Invalid login credentials.');
    }

    const token = generateToken(user.id, user.email);

    const { iat } = jwtDecode(token) as any;

    user.tokenIssueTime = new Date(iat * 1000);

    await user.save();

    return {
      error: false,
      message: 'Login successful.',
      data: {
        id: user.id,
        email: user.email,
        tokenIssueTime: user.tokenIssueTime,
        token,
      } as any,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: (err as any).message,
      data: null,
    };
  }
};
