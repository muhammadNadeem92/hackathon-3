// import { urlFor } from '@/sanity/lib/image'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const ProductList = ({ products }: { products: IProducts }) => {
//   console.log("Product Slug:", products.slug); // Ye check karo slug object sahi hai ya nahi

//     return (
//     <div className="">
//       <div className="border p-4 rounded-lg bg-gray-100  m-max">
//       {
//         <div>
//         <Image src={urlFor(products.image).url()}  alt='product image' width={450} height={450} className='object-cover aspect-square'/>
//         <h3 className='font-bold text-2xl mt-4 '>{products.name}</h3>
//         <p className='font-semibold mt-2'>Price: ${products.price}</p>
//         <p className='font-medium mt-1'><span className='font-semibold'>discountPercent:</span> {products.discountPercent}%</p>
//         <p className='font-medium mt-1 line-clamp-2'><span className='font-semibold'>description:</span> {products.description}</p>

//     {/* view detail buttton */}
//         <Link href={`/product${products.slug.current}`} >
//             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
//               View Detail
//             </button>
            
//           </Link>

//         </div>
//       }
//       </div>
//     </div>
//   )
// }

// export default ProductList






import React from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';


const getStaticProps = async () => {

  const query = `*[_type=="products"] {
price,name,image,discountPercent,description,"slug":slug.current
}`;

  // Fetching data 
  const data: IProducts[] = (await client.fetch(query)) || [];
  console.log("Fetched data:", data);

  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-2 '>
      {data.map((item:IProducts) => (
        <div key={item.slug.current} className="border my-4 sm:rounded-2xl mx-16 ">
          <Image
            width={520}
            height={450}
            src={urlFor(item.image).url()}
            alt={item.name}
            className='rounded-t-2xl'
          />
          <h2 className='mt-1 pt-2 ml-2 text-xl font-medium'>{item.name}</h2>
          <p className="line-clamp-2 mx-2 mt-1">{item.description}</p>
          <Link href={`/product/${item.slug}`} className='mb-2 pb-2 ml-2 mt-1 text-indigo-600'>view detail</Link>
        </div>
      ))}
    
    </div>
  );
};

export default getStaticProps;

