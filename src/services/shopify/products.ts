import {shopifyUrls} from "@/services/shopify/urls";
import {env} from "@/config/env";

export const getProducts = async (id?: string)=> {
    try {
        const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
        const response = await fetch(apiUrl, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
        })
        const {products} = await response.json()
        return products.map((product: any) => ({
            id: product.id,
            gql_id: product.variants[0].admin_graphql_api_id,
            title: product.title,
            description: product.body_html,
            price: product.variants[0].price,
            image: product.images[0].src,
            quantity: product.variants[0].inventory_quantity,
            handle: product.handle,
            tags: product.tags,
        }));
    } catch
        (error) {
        console.log(error)
    }
}

export const getProductsByCollection = async (id: string) => {
    try {
        const response = await fetch(shopifyUrls.products.byCollection(id), {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
        })
        const {products} = await response.json()
        return products
    } catch (error) {
        console.log(error)
    }
}
