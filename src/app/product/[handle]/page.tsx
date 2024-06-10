import {getProducts} from "@/services/shopify/products";
import {ProductView} from "@/components/product/ProductView";
import {redirect} from "next/navigation";

interface PageProps {
    searchParams: {
        id: string
    }
}

export async function generateMetadata({ searchParams }: PageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    return {
        title: product.title,
        description: product.description,
        keywords: product.tags,
        openGraph: {
            images: [
                product.image
            ]
        }
    }
}

export default async function Page({ searchParams }: PageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    if (!id) {
        redirect('/')
    }

    return <ProductView product={product} />
}
