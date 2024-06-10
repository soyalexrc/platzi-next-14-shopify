import { MainProducts } from "@/components/home/MainProducts"
import {ProductsWrapper} from "@/components/store/ProductsWrapper";
import {getProducts} from "@/services/shopify/products";

export default async function Home() {
    const products = await getProducts()

    return (
        <main>
            <ProductsWrapper products={products} />
        </main>
    )
}
