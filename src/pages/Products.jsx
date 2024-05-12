
import ProductCard from "../components/ProductCard"
import Loading from "../components/Loading"
import SearchInput from "../components/SearchInput"
import { useProductsContext } from "../context/ProductProvider"



const Products = () => {


const {products, loading} = useProductsContext()
  return (
    
    <div className=" m-10">
      <h1>all products</h1>
      <SearchInput/>
   
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