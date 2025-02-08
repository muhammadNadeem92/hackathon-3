// 'use client'
// import Link from 'next/link'
// import FilterComponent from '@/components/filter'
// import ProductGrid from '@/components/Product'
// import FilterSidebar from '@/components/FilterSidebar'


// const page = () => {
//   return (
//     <div>
//                 {/* divider */}
//       <div className='border border-[#0000001A] w-[547px] ml-4 mt-6 sm:w-[1140px] sm:ml-[100px] sm:mt-16'></div>

//         <nav className='ml-4 w-[215px] h-[19px] mt-5 text-sm flex gap-2 text-[#00000099] sm:ml-24'>
//         <Link href={'#'}>Home &gt;</Link>
//         <Link href={'#'}>Casual</Link>
//         </nav>
//         <div className='flex sm:hidden '>
//             <p className='w-[76px] h-8 font-bold text-2xl ml-4 mt-4'>Casual</p>
//             <p className='w-auto h-[10px] text-sm mt-6'>Showing 1-10 of 100 Products</p>
//             <div className='ml-56 mt-5'>
//             <FilterComponent  />
//             </div>
//         </div> 
       

//         <div className='sm:flex mt-4 p-2'>
//         <div className='hidden sm:block'>
//         <FilterSidebar />
//         </div>
//         <div className='flex flex-col justify-between'>
//         <div className='hidden sm:flex flex-row items-center justify-center gap-2 '>
//         <p className='w-[101px] h-[43px]font-bold text-[32px] mt-4 ml-6 '>Casual</p>
//         <p className='w-auto  h-[11px] text-[#00000099] ml-44'>Showing 1-10 of 100 Products </p>
//         <p className='mt-3'>Sort by: <select><option value="Most Popular">Most Popular</option></select></p>
//         </div>
//         <ProductGrid  />
//         </div>

     
//         </div>
//     </div>
//   )
// }

// export default page