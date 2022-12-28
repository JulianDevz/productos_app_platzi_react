import React from 'react'
import useFetchProducts from '../hooks/useFetchProducts'
import ProductoCard from './ProductoCard'
import SkeletonProduct from './SkeletonProduct'

const ProductosGrid = () => {

    const { data: productos, loading } = useFetchProducts()
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const skeletos = lista.map(numero => <SkeletonProduct />)

    return (
        <div className='flex flex-col h-screen justify-between'>
            <div className='container mx-auto'>
                <h1 className='flex justify-center text-4xl font-semibold my-8'>Productos API Platzi</h1>

                {loading ?

                    <div className='grid gap-4 grid-cols-5'>
                        {skeletos}
                    </div>

                    :
                    <div className='inline-grid grid-cols-5 gap-4'>
                        {
                            productos.map(producto => <ProductoCard key={producto.id} {...producto} />)
                        }
                    </div>
                }

            </div>

            <footer>
                <h1 className='mt-10 p-6 flex justify-center bg-gray-200'> By JulianDevz</h1>
            </footer>
        </div>
    )
}

export default ProductosGrid