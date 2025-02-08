


"use client"


import { client } from '@/sanity/lib/client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';



interface IImage {
  _type:string
  assets:{
      _ref:string
      _type:string
  }
}


interface IProducts {
  price: number;
  name: string;
  image: IImage;
  discountPercent?: number;
  description: string;
  slug: string;
}

const NewArrivals = () => {
  const [product, setProduct] = useState<IProducts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "products"][0...4]{
        price, name, image, discountPercent, description, "slug": slug.current
      }`;
      const res = await client.fetch(query);
      setProduct(res);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
      <div className="grid gap-3 sm:grid-cols-4 sm:gap-6">
        {product.map((item: IProducts) => {
          const discountPercentage =
            item.discountPercent &&
            Math.round(item.discountPercent);

          return (
            <div key={item.slug} className="border rounded-lg p-3 text-center">
              <Image
                src={urlFor(item.image).url() }
                alt={item.name}
                width={500}
                height={600}
                className="h-40 w-full object-cover mb-4 rounded"
              />
              <h3 className="text-base font-medium text-left sm:text-lg">
                {item.name}
              </h3>
              <div className="text-lg font-bold text-left flex items-center space-x-2">
                <span>${item.price}</span>
                {item.discountPercent && (
                  <>
                    <span className="text-red-500 bg-red-100 rounded-3xl py-[6px] px-[14px] text-sm font-bold">
                      -{discountPercentage}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-left text-gray-600 line-clamp-3">
                {item.description}
              </p>
              <Link href={`/product/${item.slug}`}><button  className='px-8 py-2 ml-2 mt-2 text-white border rounded-lg bg-blue-500'>View Detail</button></Link>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-full ml-4 mt-10 border border-[#0000001A] sm:w-full sm:mr-4 sm:border sm:border-[#0000001A] sm:ml-4 sm:mt-16 "></div>
    </div>
  );
};

export default NewArrivals;








  // const products = [
  //   {
  //     id: 1,
  //     name: "T-shirt with Tape Details",
  //     price: 200,
  //     originalPrice: 250,
  //     image: "/images/T-Shirt.svg",
  //     rating: 4.5,
  //   },
  //   {
  //     id: 2,
  //     name: "Skinny Fit Jeans",
  //     price: 240,
  //     originalPrice: 260,
  //     image: "/images/Fit-Jeans.svg",
  //     rating: 4.6,
  //   },
  //   {
  //     id: 3,
  //     name: "Checkered Shirt",
  //     price: 180,
  //     originalPrice: null,
  //     image: "/images/shirt.svg",
  //     rating: 4.4,
  //   },
  //   {
  //     id: 4,
  //     name: "Sleeve Striped T-shirt",
  //     price: 130,
  //     originalPrice: 140,
  //     image: "/images/Sleeve-T-Shirt.svg",
  //     rating: 4.3,
  //   },
  // ];

  // return (

  //   <div className="max-w-7xl mx-auto px-4 py-8">
  //     <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
  //     <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
  //       {products.map((product, index) => {
  //         // Calculate discount percentage if original price exists
  //         const discountPercentage =
  //           product.originalPrice &&
  //           Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  //         return (
  //           <div
  //             key={product.id}
  //             className={`border rounded-lg p-3 text-center ${
  //               index > 1 ? "hidden sm:block" : ""
  //             }`}
  //           >
  //             <Image
  //               src={product.image}
  //               alt={product.name}
  //               width={500}
  //               height={600}
  //               className="h-40 w-full object-cover mb-4 rounded"
  //             />
  //             <h3 className="text-base font-medium text-left sm:text-lg">
  //               {product.name}
  //             </h3>
  //             <div className="text-yellow-500 text-sm my-2 text-left">
  //               {"⭐".repeat(Math.floor(product.rating))}{" "}
  //               {product.rating.toFixed(1)}
  //             </div>
  //             <div className="text-lg font-bold text-left flex items-center space-x-2">
  //               {/* Product Price */}
  //               <span>${product.price}</span>
  //               {/* Original Price and Discount */}
  //               {product.originalPrice && (
  //                 <>
  //                   <span className="line-through text-gray-500 text-sm">
  //                     ${product.originalPrice}
  //                   </span>
  //                   <span className="text-red-500 bg-red-100 rounded-3xl py-[6px] px-[14px] text-sm font-bold">
  //                     -{discountPercentage}% 
  //                   </span>
  //                 </>
  //               )}
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
 
    {/* <Button variant={'outline'} size={'xl'} className='ml-24 sm:hidden'>View All</Button>
         <Button variant={'outline'} size={'xl2'} className=' sm:block text-center ml-[724px]'>View All</Button> */}
        {/* divider */}
//          <div className='w-[547px] ml-4 mt-10 border border-[#0000001A] sm:w-[1205px]  sm:border sm:border-[#0000001A] sm:ml-16 sm:mt-16 lg:w-[1450px]'></div>

//         </div>

    
//   );
// };

// export default NewArrivals;
