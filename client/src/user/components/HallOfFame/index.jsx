import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HallOfFame() {
  return (
    <section className='h-auto py-14'>
        <div className="grid grid-cols-8 ml-16">
          <div className="col-span-2 place-content-center">
            <h1 className='text-[33px] font-bold '>HALL OF FAME</h1>
            <h1 className='text-[40px] font-bold '></h1>
            <p className='font-bold text-slate-700 text-[20px] '>Heroes Of 2023</p>
            {/* <p className='font-semibold text-[17px]'>Heros 2023</p> */}

          </div>
          <div className="col-span-6 grid grid-cols-8">
            <div className="col-span-2 pt-14">
              <div className='h-[218px] ml-2  rounded-l-[17px]  p-2 text-slate-400 border-2'

                style={{
                  backgroundImage: 'url("https://www.shutterstock.com/image-vector/sport-cricket-indian-premier-league-600nw-2051585033.jpg")',
                  backgroundSize: 'cover', // Adjusts the size of the image
                  backgroundPosition: 'center', // Centers the image
                  backgroundRepeat: 'no-repeat' // Prevents the image from repeating
                }}
              >
                {/* <p className='font-bold text-[20px] '>VPL Cricket Tournament</p>
                <p className='font-semibold text-[17px]'>Heros 2023</p> */}
              </div>
            </div>
            <div className="col-span-6  pt-14 bg-slate-300 rounded-tl-[30px]">
              <div className='h-[282px] '>
                <Swiper

                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={100}
                  // navigation
                  speed={1500}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper"
                  breakpoints={{
         
                    640: {
                      slidesPerView: 1,
                      slidesPerGroup: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 3, // Show 3 slides per group
                      spaceBetween: 20, // Add space between slides
                    },
         
                  }}
                >
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35 shadow-lg ">
                      <div>
                        <img
                          src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1636336732540_rlOva4bJJOX7.jpg?width=16&quality=75&format=auto"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Player of the tournament</p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Dinesh Suthar</p>
                          <p className='text-right px-2 '>Akoli</p>
                          <p className='block'>SC AKOLI</p>
                          <p className='text-right px-2 '>Run : 116, W : 7</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1724598968025_mFZfJUy7GXA4.jpeg?width=16&quality=75&format=auto"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Batsman </p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Dinesh Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>RISING STAR</p>
                          <p className='text-right px-2 '>Run : 130</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1700195351230_lFyKgpkcj9Ci.jpg?width=16&quality=75&format=auto"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Bowler </p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Arjun Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M DHANDHAR 11</p>
                          <p className='text-right px-2 '>Wicket : 11</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1696739491287_4bbFBWInP1jB.jpg?width=16&quality=75&format=auto"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Filder</p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Dilip Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M DHANDHAR 11</p>
                          <p className='text-right px-2 '>Catch : 13</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1696739491287_4bbFBWInP1jB.jpg?width=16&quality=75&format=auto"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Second Best Batsman</p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Dilip Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M DHANDHAR 11</p>
                          <p className='text-right px-2 '>RUN : 127</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1636336732540_rlOva4bJJOX7.jpg?width=16&quality=75&format=auto"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Second Best Bowler</p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Dinesh Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>SC AKOLI</p>
                          <p className='text-right px-2 '>Wicket : 7</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                
                </Swiper>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
