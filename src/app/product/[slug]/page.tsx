
'use client'

import { client } from '@/sanity/lib/client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/productCard';



interface IImage {
    _type:string
    assets:{
        _ref:string
        _type:string
    }
  }
  
  
  interface IProducts {
      name:string
      price:number
      discountPercent:number
      description:string
      image:IImage
      slug:{current:string}
      id:number
      category:string
      colors:string[]
      sizes:string[]
    
    }
  
  



const product  = ({params:{slug}}:{params:{slug:string}}) => {
 const [product,setProduct]= useState <IProducts | null >(null);

 // for add to cart
 const [cartProduct,serCartProduct] = useState()

useEffect (()=>{
    const fetchData =async ()=>{
        const query = `*[_type=='products' && slug.current == "${slug}"] {
            price,name,image,discountPercent,description,
                "slug":slug.current
            }`
            
            const data:IProducts[] = await client.fetch(query);
            console.log(data)
            if(data.length > 0 ) {
                setProduct(data[0]);
            }
             
    };
    fetchData();
} , [slug]);

if (!product) {
    return <div>Loading...</div>;
}
  
  return (
      <div className='container mx-auto'>


          <ProductCard product={product} />

       
       
      </div>
   
  )
}

export default product
