import {getProducts} from "@/services/shopify/products";
import {ProductView} from "@/components/product/ProductView";

interface PageProps {
    searchParams: {
        id: string
    }
}

export default async function Page({ searchParams }: PageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    return <ProductView product={product} />
}
