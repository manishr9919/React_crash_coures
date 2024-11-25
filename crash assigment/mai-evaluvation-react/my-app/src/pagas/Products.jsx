import { SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'
export default function Products({filtervalue,sortorder}) {
    const [products, setproducts] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [isErr, setisErr] = useState(false)
    // const [category, setcategory] = useState("")
    // const [order, setorder] = useState('')

    console.log('filtervalue',filtervalue);console.log('sortorder',sortorder);
    const getProduct = async () => {
        setisLoading(true)
       
let quaryparam = {}
if(filtervalue){
    quaryparam.filter = filtervalue
}

if(sortorder){
    quaryparam.sort = 'price',
    quaryparam.order= sortorder
}
        try {
            let res = await axios({
                method: "get",
                url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,
                params : quaryparam
                
            })
            console.log(res?.data?.data);
            setproducts(res?.data?.data);
            setisLoading(false)
        } catch (error) {
            setisErr(true)
            setisLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [filtervalue,sortorder])
    return (
        <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={5}>
            {products?.map((product)=>{
                return <ProductCard {...product} key={product.id}/>
            })}
        </SimpleGrid>
    )
}
