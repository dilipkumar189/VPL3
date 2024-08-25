import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function AdvertiseComponent() {
  const images = [
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  ];

  return (
    <section className='h-auto py-16'>
      <div className='mx-16'>
        <div className="pb-16 max-w-4xl">
          <h1 className="md:text-[40px] text-xl font-bold">New Advertize Slide</h1>
        </div>
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            speed={1500}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="card card-compact bg-transparent md:w-40">
                  <img
                    src={image}
                    alt={`Img ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}