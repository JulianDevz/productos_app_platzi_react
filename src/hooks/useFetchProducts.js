import { useEffect, useState } from 'react'
import { getProductos } from '../helpers/getProductos'

const useFetchProducts = () => {

    const [state, setState] = useState({data:[] , loading:true})

    useEffect(() => {

        setTimeout(() => {
            getProductos()
                .then( producto => {
                    setState({
                        data: producto,
                        loading: false
                    })
                })
        },1500)
    },[])

    return state;
}

export default useFetchProducts