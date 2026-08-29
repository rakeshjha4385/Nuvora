export const appConfig = {
  appName: 'Nuvora',
  environment: process.env.NODE_ENV ?? 'development',
  appUrl: process.env.APP_URL ?? 'http://localhost:3000',
  apiUrl: process.env.API_URL ?? 'http://localhost:4000',
  port: Number(process.env.PORT ?? 3000),
};

export type AppConfig = typeof appConfig;
