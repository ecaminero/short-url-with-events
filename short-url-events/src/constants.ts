

export const NATS_SERVERS = ["nats://meli-nats:4222", "nats://meli-nats-1:4222" ]
export const URL_SHORT_URL_APP = process.env.URL_SHORT_URL_APP || "http://127.0.0.1:8000";

export const APP_PORT = process.env.APP_PORT || 8080;
export const REDIS_HOST = process.env.REDIS_HOST || "localhost";
export const REDIS_PORT = process.env.REDIS_PORT || 6379;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || "meli";
export const REDIS_RETRY_DELAY_MS = process.env.REDIS_RETRY_DELAY_MS || 3000;
export const REDIS_RETRY_ATTEMPS = process.env.REDIS_RETRY_ATTEMPS || 20;
// Events
export const NATS_CREATE_URL = 'url.create';
export const NATS_DELETE_URL = 'url.delete';
export const NATS_UPDATE_URL = 'url.update';
export const NATS_EXPIRED_URL = 'redis.url.expired';


// Redis events
export const REDIS_EXPIRED_KEY = '__keyevent@0__:expired';