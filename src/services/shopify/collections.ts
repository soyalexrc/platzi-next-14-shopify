import {shopifyUrls} from "@/services/shopify/urls";
import {env} from "@/config/env";

export const getCollections = async () => {
    try {
        const response = await fetch(shopifyUrls.collections.all, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
        })
        const { smart_collections } = await response.json();
        return smart_collections.map((collection: any) => ({
            id: collection.id,
            title: collection.title,
            handle: collection.handle
        }))
    } catch (error) {
        console.log(error)
    }
}
