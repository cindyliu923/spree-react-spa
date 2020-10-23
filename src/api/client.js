import { makeClient } from '@spree/storefront-api-v2-sdk';

const client = makeClient({
  host: 'https://spree.5xruby.dev'
})

export default client;