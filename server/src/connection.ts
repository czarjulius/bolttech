import { Sequelize } from 'sequelize';
import config from '@config';
const {
  secrets: { username, password, host, port, name },
  env,
} = config();

export const sequelize = new Sequelize(name, username, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false,
  ...(env !== 'development' && {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }),
});

export const testSequelize: () => Promise<void> = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
