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

const TopSelling = () => {
  const [product, setProduct] = useState<IProducts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "products"][8...12]{
        price, name, image, discountPercent, description, "slug": slug.current
      }`;
      const res = await client.fetch(query);
      setProduct(res);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 uppercase">top selling</h2>
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
              <Link href={`/product/${item.slug}`}><button  className='px-8  py-2 ml-2 mt-2 text-white border rounded-lg bg-blue-500'>View Detail</button></Link>

            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-full ml-4 mt-10 border border-[#0000001A] sm:w-full sm:mr-4 sm:border sm:border-[#0000001A] sm:ml-4 sm:mt-16 "></div>
    </div>
  );
};

export default TopSelling;
