import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import Loading from "../components/Loading"
import SearchInput from "../components/SearchInput"



const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const getData = async()=>{
    try{
      setLoading(true)
      const {data} = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
      setProducts(data.products)
      
    } 
    catch (error){
        console.log(error);
      }finally{
        setLoading(false)
      }
  }
  useEffect(()=>{
    getData()
  }, [search])


  return (
    
    <div className=" m-10">
      <h1>all products</h1>
      <SearchInput setSearch={setSearch}/>
   
       {loading ? (
       <Loading/>
       )
      : products.length ? (
        <div className=" mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products.map(product => <ProductCard key={product.id} product={product}/>)}
          </div>
          ) : <h2>no producsts</h2>
      }
    


    </div>
  )
}

export default Products