import Link from 'next/link'
import React from 'react'

const AnnouncementBar = () => {
  return (
    <div> <header className="grid grid-cols-1 h-[34px] bg-black justify-center items-center">
    <p className="text-white text-xs sm:text-sm text-center">
      Sign up and get 20% off your first order.{" "}
      <Link href="" className="pl-2 underline">
        Sign Up Now
      </Link>
    </p>
  </header>
</div>
  )
}

export default AnnouncementBar