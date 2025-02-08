// import { client } from '@/sanity/lib/client'
// import React from 'react'
// import ProductList from '@/components/product-list'
// const HomePage = async() => {

//   const query = `*[_type=="products"] {
// price,name,image,discountPercent,description,"slug":slug.current
// }`

// const products = await client.fetch(query)
// console.log(products)

//   return (
//     <div className='container max-h '>

      
       
//             <h2 className='uppercase text-3xl'>product list</h2> 
//  <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 object-top mt-24">
//       {
        
//         products.map((item:IProducts , index:number) =>(
//           <ProductList 
//           key={index}
//           products={item}
//           />
//         ))
//       }
//       </div>
//     </div>
//   )
// }

// export default HomePage



import React from 'react'
import ProductList from '@/components/product-list'

const Shop = () => {
  return (
    <div>
      <ProductList />
    </div>
  )
}

export default Shop