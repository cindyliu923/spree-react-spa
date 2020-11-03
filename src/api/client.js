import { makeClient } from '@spree/storefront-api-v2-sdk';

export const HOST = process.env.REACT_APP_SPREE_HOST

const client = makeClient({
  host: HOST
})

export default client;