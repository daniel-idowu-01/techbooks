import React from 'react'
import Banner from './Banner'

const Header = () => {
  return (
    <section
      className='flex flex-col md:flex-row gap-10 md:gap-0 w-full items-center justify-between px-10 md:px-20 py-32 md:pt-40 md:pb-20 bg-orange bg-opacity-10'
    >
      <article className='md:w-1/2 flex flex-col gap-8'>
        <h3 className='font-semibold text-3xl md:text-5xl leading-snug md:leading-[1.5]'>
          Buy and Sell Your Books <span className='text-orange'>for the Best Prices</span>
        </h3>
        <p>
          Welcome to iREAD: Your Premier Destination for Digital Reading Delights! Immerse Yourself in a World of Knowledge and Imagination at Our Cutting-Edge E-Library. Explore Endless Pages, Engage with Timeless Classics, and Discover New Horizons in the Digital Realm. Unleash the Power of Words with BookByte Boulevard – Where Every Click Opens a Gateway to Infinite Stories.
        </p>

        <div className='flex'>
          <input
            type="text" name="" id=""
            placeholder='Search a book'
            className='bg-white outline-none px-4 py-2'
          />
          <button className='bg-orange px-3 md:px-6 py-2 hover:bg-opacity-50 transition-all'>
            Search
          </button>
        </div>

      </article>
      
      <article> 
        <Banner /> 
      </article>
    </section>
  )
}

export default Header
