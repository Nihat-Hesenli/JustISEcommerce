import products from './data/products.json';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import { useEffect, useState } from 'react';
import { sortProducts } from './store/cartSlice';
import { useDispatch } from 'react-redux';


function App() {
 

  const [isLoading, setIsLoading] = useState(true);
  const [items,setItems] = useState(products)
  const [search,setSearch] = useState("");

  

  useEffect(() => {


    const timer = setTimeout(() => {
      setIsLoading(false)
    },1000)
    return () => clearTimeout(timer)


  }, []);

  useEffect(()=> {

    const filteredItems = products.filter((p)=> p.name.toLowerCase().includes(search.toLowerCase()))
    setItems(filteredItems)


  },[search])

  const handleSort = (choice) => {
    let copyItems = [...items];
    if(choice === "low"){
      copyItems.sort((a,b) => a.price-b.price)
    } else if (choice === "high"){
      copyItems.sort((a,b) => b.price - a.price )
    }
    setItems(copyItems)
  }






  return (

    <div className="container mx-auto p-10 bg-gray-50 min-h-screen">
      <CartDrawer />
      <h1 className="text-3xl font-bold text-center  mb-10 text-gray-800">
        Məhsullar
      </h1>
      <input 
          type="text"
          placeholder="Məhsul axtar..."
          className="p-3 border rounded-xl w-full md:w-1/2 shadow-sm outline-none focus:ring-2 focus:ring-red-500 transition-all"
          onChange={(e) => setSearch(e.target.value)} 
        />

      <select 
          onChange={(e) => handleSort(e.target.value)}
          className="p-2 border rounded-md bg-white text-sm shadow-sm outline-none ml-10"
        >
          <option value="">Sıralama seçin</option>
          <option value="low">Ucuzdan bahaya</option>
          <option value="high">Bahadan ucuza</option>
        </select>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-20 w-20 border-b-3 border-red-600"></div>
          <span className="ml-4 font-semibold text-gray-600">Yüklənir...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-25">
          {
            items.map((product) => (
              <ProductCard key={product.id} product={product} >

              </ProductCard>





            ))
          }
        </div>

      )
      }


    </div>
  );
}

export default App;