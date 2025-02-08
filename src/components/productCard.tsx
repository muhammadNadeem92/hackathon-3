// "use client";
// import { IoIosCheckmark } from "react-icons/io";
// // import { Button } from "./ui/button";
// import React, { useState } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";




// interface IImage {
//   _type:string
//   assets:{
//       _ref:string
//       _type:string
//   }
// }


// interface IProducts {
//     name:string
//     price:number
//     discountPercent:number
//     description:string
//     image:IImage
//     slug:{current:string}
//     id:number
//     category:string
//     colors:string[]
//     sizes:string[]
  
//   }




// const ProductCard = ({product}:{product:IProducts}) => {
//   const [count, setCount] = useState(1);

//   const handleIncrement = () => setCount(count + 1);
//   const handleDecrement = () => setCount(count - 1);

//   return (
//     <>

// <div className='sm:flex'>
        

//              {/* for large screen */}

//           <div className='hidden sm:flex flex-col ml-9'>
//           <Image src={urlFor(product.image).url()} alt={product.name} width={152} height={167} className='ml-16 mt-4' />
//           <Image src={urlFor(product.image).url()} alt={product.name} width={152} height={167} className='ml-16 mt-4'/>
//           <Image src={urlFor(product.image).url()} alt={product.name} width={152} height={167} className='ml-16 mt-4' />

//           </div>
         
//           <Image src={urlFor(product.image).url()} alt={product.name} width={444} height={530} className='hidden sm:block ml-4 mb-24 mt-4  ' /> 

   

//          </div>

//     <div className="sm:flex flex-col  ">
//       <div className="max-w-sm bg-white p-6 rounded-lg  text-left">
//         <h1 className="w-[243px] h-14 text-2xl font-bold mb-2 sm:w-[600px] sm:h-12 sm:text-[40px]">
//          {product?.name}
//         </h1>
//         <div className="flex items-center mb-3 ">
//           <div className="flex">
//             <i className="text-yellow-500 text-lg">&#9733;</i>
//             <i className="text-yellow-500 text-lg">&#9733;</i>
//             <i className="text-yellow-500 text-lg">&#9733;</i>
//             <i className="text-yellow-500 text-lg">&#9733;</i>
//             <i className="text-gray-300 text-lg">&#9733;</i>
//           </div>
//           <span className="ml-3 text-gray-600 text-sm">4.5/5</span>
//         </div>
//         <div className="flex items-center mb-4 sm:w-[193px] h-[43px] gap-3">
//           <span className="text-2xl font-bold text-black ">{product?.price}</span>
//           <span className="text-xl text-gray-500 line-through ml-3">{product?.discountPercent}</span>
//           <span className="text-sm bg-red-100 text-red-500 px-2 py-1 rounded-[62px] ml-3">
//             -40%
//           </span>
//         </div>
//         <p className="text-gray-600 w-[418px] text-base leading-relaxed sm:w-[590px] h-[33px]">
//       {product?.description}
//         </p>
//         {/* divider */}
//         <div className="w-[424px] h-0 border mt-16 sm:mt-8 sm:w-[540px] sm:ml-1 "></div>
//       </div>
//       <div className="w-[142px] h-16 ml-4  sm:text-left sm:ml-6  ">
//         <p className="text-sm w-[82px] h-[10px] text-[#00000099] sm:w-[92px] sm:h-[11px]  ">
//           {product?.colors}
//         </p>
//         <div className="w-[142px] h-auto flex gap-3 mt-6 sm:">
          
//           <div className="w-[39px] h-[39px] rounded-full bg-[#4f4631] sm:w-[37px] sm:h-[37px]">
//             <IoIosCheckmark className="text-white  text-center w-4 h-4 mt-[10px] ml-[10px]" />
//           </div>
//           <div className="w-[39px] h-[39px] rounded-full bg-[#314F4A] sm:w-[37px] sm:h-[37px]"></div>
//           <div className="w-[39px] h-[39px] rounded-full bg-[#31344f] sm:w-[37px] sm:h-[37px]"></div>
//         </div>
//       </div>

//       {/* divider */}
//       <div className="w-[424px] h-0 border mt-5 ml-4 sm:mt-6 sm:w-[540px] sm:ml-6 "></div>
//       {/* option section */}
//       <div className="mt-4 ml-6">
//         <p className="w-[76px] h-[10px] text-sm text-[#00000099]">
//           {product?.sizes}
//         </p>
//         <div className=" mt-6 flex gap-3  ">
//           <button>
//             Small
//           </button >
//           <button >
//             Medium
//           </button >
//           <button  >
//             Large
//           </button >
//           <button >
//             X-Large
//           </button >
//         </div>
//       </div>
//       {/* divider */}
//       <div className="w-[424px] h-0 border mt-5 ml-4 sm:mt-6 sm:w-[540px] sm:ml-6"></div>
//       {/* counter */}
//       <div className="flex gap-4">
//       <div className="flex items-center justify-center border rounded-3xl p-2 mt-6 ml-4 bg-gray-100 w-fit">
//         <button
//           className="text-xl font-bold px-3 py-1 hover:bg-gray-200 rounded"
//           onClick={handleDecrement}
//         >
//           -
//         </button>
//         <span className="mx-4 text-lg">{count}</span>
//         <button
//           className="text-xl font-bold px-3 py-1 hover:bg-gray-200 rounded-full sm:px-6 "
//           onClick={handleIncrement}
//         >
//           +
//         </button>
//       </div>
      // <button  className="mt-6 rounded-full sm:px-[150px]  ">Add to Card</button >
//       </div>

//         {/* tabs */}
//         <div className="sm:hidden ">
//           <button className="text-[#00000099] mt-6 ml-4 hover:underline sm:hidden  ">Product Details</button >
//           <button className="text-[#00000099] mt-6 ml-4 hover:underline sm:hidden ">Rating & Reviews</button >
//           <button  className="text-[#00000099] mt-6 ml-4 hover:underline sm:hidden ">FAQs</button >
//           </div>

//           <div className="w-[425px] h-0 border mt-5 ml-4 sm:hidden"></div>
        
//         <div className="flex sm:hidden  ">
//         <p className="w-[107px] h-[27px] mt-4 ml-4 font-bold text-xl">All Reviews</p>
//         <p className="w-[29px] h-[10px] mt-5 ml-1 text-sm text-[#00000099]">(451)</p>
//         <div className="flex ml-[114px] mt-4">
//          <Image src={'/images/filter.svg'} alt="filter-image" width={40} height={40}  className="mr-4"/>
//          <button  >Write a Review</button >

         
//         </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default ProductCard;








"use client";
import { IoIosCheckmark } from "react-icons/io";
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







{/* <Image src={urlFor(product.image).url()} alt={product.name} width={450} height={290} className='ml-4 mt-4 sm:hidden' />
<div className='flex sm:hidden'>
<Image src={urlFor(product.image).url()} alt={product.name} width={137} height={106} className='ml-4 mt-4' />
<Image src={urlFor(product.image).url()} alt={product.name} width={137} height={106} className='ml-4 mt-4'/>
<Image src={urlFor(product.image).url()} alt={product.name} width={137} height={106} className='ml-4 mt-4' />
</div> */}