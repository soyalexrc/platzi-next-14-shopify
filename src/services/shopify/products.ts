import {shopifyUrls} from "@/services/shopify/urls";
import {env} from "@/config/env";

export const getProducts = async () => {
    try {
        const response = await fetch(shopifyUrls.products.all, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
        })
        const { products } = await response.json()
        return products
    } catch (error) {
        console.log(error)
    }
}
