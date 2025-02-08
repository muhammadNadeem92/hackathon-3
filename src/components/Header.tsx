import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import AnnouncementBar from "./AnnouncementBar"
import { MobileNav } from "./Sheet";

const Header = () => {
  return (
    <div>
     {/* announcement bar */}
     <AnnouncementBar />
      
      {/* main header */}
      <div className="flex justify-between  items-center mt-4 sm:mx-12 lg:mx-24">
        {/* logo */}
        <div className="flex flex-row">
        <MobileNav />
        <h2 className="text-xl font-bold ml-4 ">SHOP.CO</h2>
        </div>
        <ul className="hidden sm:flex">
          <li className="flex sm:gap-2 md:gap-4 xl:gap-6">
            <Link href="/shop">shop</Link>
            <Link href="">On Sale</Link>
            <Link href="">New Arrivals</Link>
            <Link href="">Brands</Link>
          </li>
        </ul>
        <div className="hidden  sm:flex justify-center items-center relative">
          <IoIosSearch className="absolute left-3 text-gray-500" />
          <input
            type="search"
            name="search"
            placeholder="Search products"
            className=" bg-[#F0F0F0] pl-10 py-2 rounded-full sm:w-300 md:390 lg:449 xl:w-[499px] "
          />
        </div>
{/* icons */}
        <div className=" flex items-center gap-2 mr-4 sm:text-end  ">
          <IoIosSearch size={20} className="sm:hidden" />
     <Link href={'/cart'}>     <IoCartOutline size={20} /> </Link>
          <FaRegUserCircle size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;

