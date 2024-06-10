export const env: ENV = {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || '',
    SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME || '',
    CACHE_TOKEN: process.env.CACHE_TOKEN || '',
    SHOPIFY_GRAPHQL_ENDPOINT: process.env.SHOPIFY_GRAPHQL_ENDPOINT || '',
    SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN || '',
}

type ENV = {
    SHOPIFY_API_KEY: string;
    SHOPIFY_HOSTNAME: string;
    CACHE_TOKEN: string;
    SHOPIFY_GRAPHQL_ENDPOINT: string;
    SHOPIFY_STOREFRONT_TOKEN: string;
}
