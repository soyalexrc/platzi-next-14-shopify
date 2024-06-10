import { MainProducts } from "@/components/home/MainProducts"
import {ProductsWrapper} from "@/components/store/ProductsWrapper";
import {getProducts, getProductsByCollection} from "@/services/shopify/products";
import {getCollections} from "@/services/shopify/collections";

interface CategoryProps {
    params: {
        categories: string[],
    }
    searchParams?: string
}

export default async function Page(props: CategoryProps) {
    const {categories} = props.params;
    let products = [];
    const collections = await getCollections();

    if (categories?.length > 0) {
        const selectedCollectionId = collections.find((collection: any) => collection.handle === categories[0]).id
        products = await getProductsByCollection(selectedCollectionId)
    } else {
        products = await getProducts()
    }


    return (
        <main>
            <ProductsWrapper products={products} />
        </main>
    )
}
