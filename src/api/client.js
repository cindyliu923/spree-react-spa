import { makeClient } from '@spree/storefront-api-v2-sdk';

export const HOST = 'https://spree.5xruby.dev';
// http://localhost:3001

const client = makeClient({
  host: HOST
})

export default client;