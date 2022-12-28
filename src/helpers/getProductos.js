export const getProductos = async() => {
    const url = `https://api.escuelajs.co/api/v1/products?offset=10&limit=30`;
    const resp = await fetch(url);
    const data = await resp.json();

    const products = data.map( product => {
        return{
            id: product.id,
            title: product.title,
            imagen: product.images[0],
            // imagen: 'http://localhost:5173/img/092a93bd0e2f183f210e1840d2c126f4.jpg'
        }
    })

    return products;
}