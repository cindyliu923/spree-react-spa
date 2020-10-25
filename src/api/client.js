import { makeClient } from '@spree/storefront-api-v2-sdk';

export const HOST = 'http://localhost:3001';
// 'https://spree.5xruby.dev';

const client = makeClient({
  host: HOST
})

export default client;