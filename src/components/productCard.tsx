





"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface IImage {
  _type: string;
  assets: {
    _ref: string;
    _type: string;
  };
}

interface IProducts {
  name: string;
  price: number;
  discountPercent: number;
  description: string;
  image: IImage;
  slug: { current: string };
  id: number;
  category: string;
  colors: string[];
  sizes: string[];
}

const ProductCard = ({ product }: { product: IProducts }) => {
  // add to cart 
  const addToCart = (product: IProducts) => {
    console.log("Product added to cart:", product);
  };
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:pt-14 sm:mx-12 lg:mx-24">
      {/* Image Section */}
      <div className="flex flex-col items-center sm:flex-row gap-4">
        {/* Small Screen (One image on top, three below) */}
        <div className="sm:hidden flex flex-col items-center w-full">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={300}
            height={350}
            className="rounded-lg"
          />
          <div className="flex gap-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <Image
                key={i}
                src={urlFor(product.image).url()}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Large Screen (One big image with thumbnails beside) */}
        <div className="hidden sm:flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              src={urlFor(product.image).url()}
              alt={product.name}
              width={120}
              height={120}
              className="rounded-lg "
            />
          ))}
        </div>
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={400}
          height={500}
          className="hidden sm:block rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="max-w-sm sm:max-w-md bg-white p-6 rounded-lg text-left">
        <h1 className="text-2xl font-bold sm:text-3xl mb-2">{product?.name}</h1>
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-500">{"\u2605".repeat(4)}</div>
          <span className="ml-3 text-gray-600 text-sm">4.5/5</span>
        </div>
        <div className="flex items-center mb-4 gap-3">
          <span className="text-2xl font-bold">${product?.price}</span>
          <span className="text-xl text-gray-500 line-through">${product?.discountPercent}</span>
          <span className="text-sm bg-red-100 text-red-500 px-2 py-1 rounded-lg">-40%</span>
        </div>
        <p className="text-gray-600">{product?.description}</p>

         {/* counter */}
      <div className="flex gap-4">
      <div className="flex items-center justify-center border rounded-3xl p-2 mt-6 ml-4 bg-gray-100 w-fit">
        <button
          className="text-xl font-bold px-3 py-1 hover:bg-gray-200 rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="mx-4 text-lg">{count}</span>
        <button
          className="text-xl font-bold px-3 py-1 hover:bg-gray-200 rounded-full sm:px-6 "
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button onClick={() => addToCart(product)} className="mt-6 rounded-full sm:text-sm sm:py-8 px-16 border bg-orange-300 ">Add to Card</button >

      </div>

      </div>
    </div>
  );
};

export default ProductCard;






