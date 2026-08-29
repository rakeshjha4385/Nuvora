import express from 'express';
import { appConfig } from '@nuvora/config';
import { createLogger } from '@nuvora/observability';
import { getCatalogProducts } from './catalog';

const app = express();
const logger = createLogger('api');

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'api', environment: appConfig.environment });
});

app.get('/api/v1/products', (_req, res) => {
  res.json({
    items: getCatalogProducts(),
  });
});

const port = appConfig.port;
app.listen(port, () => {
  logger.info('API server started', { service: 'api', environment: appConfig.environment, operation: 'startup' });
  console.log(`API listening on http://localhost:${port}`);
});
