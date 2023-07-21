// NodeJS.ProcessEnv

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    DATABASE_URL: string;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    HASH_SALT: number;
    DATABASE_URL: string;
  }
}
