const getProducts = async () => {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
        headers: new Headers({
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ''
        })
    })

    return await response.json();
}

export const MainProducts = async () => {
    const products = await getProducts();
    console.log(products);
    return(
        <section>
            <h1>MainProducts</h1>
        </section>
    )
}
