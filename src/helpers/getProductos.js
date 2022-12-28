export const getProductos = async() => {
    const url = `https://api.escuelajs.co/api/v1/products?offset=20&limit=40`;
    const resp = await fetch(url);
    const data = await resp.json();

    const products = data.map( product => {
        return{
            id: product.id,
            title: product.title,
            imagen: product.images[0],
        }
    })

    return products;
}