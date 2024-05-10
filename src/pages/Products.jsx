import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"


const Products = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const getData = async()=>{
    try{
      const {data} = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
      console.log(data);
      setProducts(data.products)
    } 
    catch (error){
        console.log(error);
      }
  }
  useEffect(()=>{
    getData()
  }, [])

  return (
    
    <div className=" m-10">
      <h1>all products</h1>
      {products.map(product => <ProductCard key={product.id} product={product}/>)

    }


    </div>
  )
}

export default Products