// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// // TypeScript Interface for Product

// const ProductDetail = ({ product }: { product: IProducts }) => {
//   if (!product) {
//     return <h1>Product Not Found</h1>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{product.name}</h1>
//       {product.image && (
//         <Image 
//           src={urlFor(product.image).url()} 
//           alt={product.name} 
//           width={500} 
//           height={500} 
//           className="w-full max-w-md"
//         />
//       )}
//       <p className="text-lg mt-4">{product.description}</p>
//       <p className="text-xl font-semibold mt-2">${product.price}</p>
//     </div>
//   );
// };

// export default ProductDetail;
