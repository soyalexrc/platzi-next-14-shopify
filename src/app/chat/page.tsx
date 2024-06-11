import {Chat} from "@/components/chat";
import {getProducts} from "@/services/shopify/products";
import {createAgent} from "@/utils/openai/createAgent";

export default async function Page() {
    const products = await getProducts()
    const productTitles = products.map((product: any) => product.title)
    const flatProductTitles = productTitles.join("\n")
    const agent = createAgent(flatProductTitles)
    return (
        <div>
            <h1>Chatbot</h1>
            <Chat agent={agent}/>
        </div>
    )
}
