import models from '@db/models';

const { User } = models;

export const getUser = async (userId) => {
  return User.findOne({
    where: { id: userId },
    raw: true,
  });
};
