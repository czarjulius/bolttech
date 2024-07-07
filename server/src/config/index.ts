import dotenv from 'dotenv';
import path from 'path';

// describes a secrets object
type Secrets = Readonly<{
  env: string;
  version: string;
  port: string;
  redisPort: string;
  redisHost: string;
  redisUrl: string;
  secrets: {
    jwtSecret: string;
    jwtExpiresIn: string;
    dbURL: string;
    name: string;
    host: string;
    testHost: string;
    port: number;
    username: string;
    password: string;
    dbMaxConnection: string;
    dbIdleTime: string;
  };
}>;

const env = process.env.NODE_ENV || 'development';
let envfile: string;

switch (env) {
  case 'production':
    envfile = '.env';
    break;
  case 'test':
    envfile = '.env.test';
    break;
  case 'development':
  default:
    envfile = '.env.local';
    break;
}

const envpath: string = path.join(__dirname, '../..', envfile);
let cache: Secrets;

export default function config() {
  if (!cache) {
    dotenv.config({ path: envpath });
    cache = Object.freeze({
      env,
      version: process.env.API_VERSION || 'v1',
      port: process.env.PORT || '3000',
      redisHost: process.env.REDIS_HOST || '127.0.0.1',
      redisPort: process.env.REDIS_PORT || '6379',
      redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
      secrets: {
        jwtSecret: process.env.JWT_SECRET || '',
        jwtExpiresIn: process.env.JWT_EXPIRES_IN || '',
        dbURL: process.env.DB_URL || '',
        name: process.env.DB_NAME || '',
        host: process.env.DB_HOST || '',
        testHost: process.env.DB_TEST_HOST || '',
        port: +(process.env.DB_PORT || '') || 25,
        username: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
        dbMaxConnection: process.env.DB_MAX_CONNECTION || '1000',
        dbIdleTime: process.env.DB_IDLE_TIME || '5',
      },
    });
  }
  return cache;
}
