export const env: ENV = {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || '',
    SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME || '',
    CACHE_TOKEN: process.env.CACHE_TOKEN || '',
}

type ENV = {
    SHOPIFY_API_KEY: string;
    SHOPIFY_HOSTNAME: string;
    CACHE_TOKEN: string;
}
