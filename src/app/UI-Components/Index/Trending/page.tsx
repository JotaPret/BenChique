'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import ProductData from '@/app/JsonData/ProductsData.json';

import { ToastContainer, toast } from 'react-toastify';

import Image from 'next/image';
import Link from 'next/link';

export default function Trending() {
    const addToWishlist = (product: any) => {
        const stored = localStorage.getItem('wishlist');
        let wishlist = stored ? JSON.parse(stored) : [];

        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        toast.success('Adicionado ao Favoritos');
    };

    const addCart = (product: any) => {
        const stored = localStorage.getItem('cart');
        let cart = stored ? JSON.parse(stored) : [];

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        toast.success('Adicionado ao Carrinho');
    }


    return (
        <>
        <div className="px-[8%] py-20 lg:px-[16%]">
            <div className="flex flex-col justify-between gap-5 md:flex-row">
                <div>
                    <h2 className="Lufga text-5xl font-medium">
                        O que está em alta?
                    </h2>

                    <p className="GolosText mt-1 text-lg">
                        Descubra os produtos mais populares do BenChique.
                    </p>
                </div>
                <div>
                <button className="btn Golostext cursor-pointer rounded-md bg-black px-6 py-3 text-xl text-white transition-all duration-300">Ver tudo</button>
                </div>
            </div>

            <div className='trending-swiper mt-20'><Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              991: { slidesPerView: 3 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {ProductData.slice(0, 5).map((item, index) => (
              <SwiperSlide key={index}>
                <div className='product-card cursor-pointer'>
                  <div className='product-image overflow-hidden rounded-2xl'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className='h-full w-full rounded-2xl object-cover'
                    />
                    <span className='absolute left-3 top-3 rounded-full bg-black px-4 py-1 font-mono'>
                      {item.off}
                    </span>
                    <div className='absolute right-5 top-5 flex flex-col gap-2'>
                      <i onClick={() => addToWishlist(item)} className='bi bi-balloon-heart product-icon flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white'></i>

                      <i onClick={() => addCart(item)} className='bi bi-cart3 product-icon flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white'></i>
                    </div>
                    <div className='product-btn'>
                      <Link href={`/UI-Components/Shop/${item.id}`}>
                        <button className='btn GolosText border-3 w-full cursor-pointer rounded-2xl border-white bg-black px-6 py-3 text-xl text-white lg:w-auto lg:rounded-full'>
                          Comprar
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Link href={`/UI-Components/Shop/${item.id}`}>
                    <div className='product-content z-10 mt-5 md:mt-10'>
                      <div className='flex justify-between'>
                        <h2 className='Lufga pr-5 text-xl font-medium'>
                          {item.title}
                        </h2>
                        <h3 className='font-mono text-3xl font-semibold'>
                          {item.price}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper></div>

        </div>

        <ToastContainer position='top-right' autoClose={1500}/>
        
        </>
    )
}