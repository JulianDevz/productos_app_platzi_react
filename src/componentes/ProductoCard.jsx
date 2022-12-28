import React from 'react'

const ProductoCard = ({id, title, imagen}) => {

    return (
        <div className='rounded-md border-solid border-2 border-[#bcbbe7] card animate__animated animate__slideInLeft'>
            <img src={imagen} alt={title} />
            <p className='flex justify-center my-3'>{title}</p>
        </div>
    )
}

export default ProductoCard