import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackgroundSlider from "../../components/BackgroundSlider";
import Team from "../../components/Team";
import Sponser from "../../components/Sponser";
import Advertiser from "../../components/Advertiser";
import HallOfFame from "../../components/HallOfFame";

function Home() {
  return (
    <>
      <BackgroundSlider />
      <Navbar />
      <section className="main page h-[550px]">
        {/* <div
          className="hero min-h-screen relative"
          style={{
            zIndex: 1,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="hero-overlay mt-[-15px] bg-opacity-50"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 sm:text-5xl text-3xl font-bold">Vishwakarma Premier League</h1>
              <h1 className="mb-5 sm:text-xl text-lg font-bold">Start from 02-11-24 to 06-11-24</h1>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-4xl font-bold">VPL</h2>
          </div>
        </div> */}
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-[80px] font-bold p-0">VPL SEASON-3</p>
          <div className="ms-[20px] mt-[-20px]">
            <h3 className="text-[20px] font-bold">VENUE - BAGRA</h3>
            <h3 className="text-[18px] font-bold">
              FROM 02-11-2024 TO 06-11-2024
            </h3>
          </div>
        </div>
      </section>

      {/* Register section  */}
      <section className="lg:h-[420px] h-[650px]">
        <div className="py-2">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            {/* <h1 className="md:text-[40px] text-xl font-bold sm:leading-9">Welcome to Vishwakarma Premier League</h1> */}
            <div className="grid grid-cols-5 md:mt-10 mt-6">
              <div className="sm:col-span-3 col-span-3">
                <div className="sm:w-[600px] w-[230px] mx-auto">
                  <img src="https://as2.ftcdn.net/v2/jpg/03/10/60/17/1000_F_310601729_qiwUg48OztkDTVrTPJBIHVpUlXerujqb.jpg" />
                </div>
              </div>
              <div className="sm:col-span-2 col-span-3 text-center sm:pl-3 lg:pl-0 lg:mt-8">
                <h1 className="md:text-[60px] text-xl font-bold sm:leading-9">
                  PARTICIPATE
                </h1>
                <h1 className="md:text-[60px] text-xl mt-10 font-bold sm:leading-9">
                  YOUR TEAM
                </h1>
                <h1 className="md:text-[60px] text-xl mt-10 mb-16 font-bold sm:leading-9">
                  NOW
                </h1>
                <Link
                  to={"/addteam"}
                  className="rounded-md bg-slate-800 mt-6 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section  */}
      <Team />

      {/* Rules and Regulation  */}
      <section className="bg-black text-gray-200 lg:h-[460px] h-[600px]">
        <div className="sm:py-10 py-14 hidden sm:block">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            <div className="grid grid-cols-4 md:mt-0 mt-6">
              <div className="sm:col-span-2 col-span-3 sm:pl-3 lg:pl-0 lg:mt-4">
                <h1 className="md:text-[40px] text-xl font-bold">
                  RULES & REGULATION
                </h1>
                <div className="px-6 py-5 grid grid-cols-8">
                  <div className="col-span-1 my-2">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IbgBf-NJ0vZJLiSQmkbxuypYyl-B5K7C3g&s" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7 my-2">
                    <h1 className="md:text-[20px] text-xl font-semibold">
                      Team
                    </h1>
                    <div className="">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-1 my-2">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://www.shutterstock.com/image-vector/cricket-stadium-audience-vector-background-600nw-2367285537.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7 my-2">
                    <h1 className="md:text-[20px] text-xl font-semibold">
                      Ground
                    </h1>
                    <div className="">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-1 my-2">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHmtFv-O4lGVu3GJxK5diDmk3EbP5_If-jg&s" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7 mt-2 mb-12">
                    <h1 className="md:text-[20px] text-xl font-semibold">
                      Match
                    </h1>
                    <div className="">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to={"#"}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
                >
                  View Rules & Regulation &#11166;
                </Link>
              </div>
              <div className="sm:col-span-2 col-span-3">
                <div className="sm:w-[530px] w-[230px] mx-auto">
                  <img
                    src="https://media.istockphoto.com/id/1434729638/photo/red-leather-cricket-ball-on-a-cricket-bat-front-view.jpg?s=1024x1024&w=is&k=20&c=lQpRqjn4SUZfgAOL73N6MFnqTgaITkIZVLn7VDGAXCY="
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:py-16 py-14 block sm:hidden">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            <h1 className="md:text-[40px] text-xl font-bold text-center">
              Rules & Regulation
            </h1>
            <div className="grid grid-cols-3 border-2 md:mt-10 mt-6">
              <div className="sm:col-span-1 col-span-3 border-2 ">
                <div className="sm:w-60 w-[230px] mx-auto">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvQG3dC3PhHj_H1ybPG9GYc0GdftNb1qrQQ&s  " />
                </div>
              </div>
              <div className="sm:col-span-2 col-span-3 border-2 sm:pl-3 lg:pl-0 lg:mt-4">
                <p className="">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Veritatis maiores, suscipit
                  quasi optio delectus cupiditate eius nesciunt fugit assumenda!
                  Cum vero tenetur non!
                </p>
                <p className="md:my-3 my-2">
                  The tournament not only aims to crown a champion but also to
                  provide a platform for players to gain invaluable experience
                  and exposure. With rigorous training and preparation, teams
                  are set to compete fiercely, promising an entertaining and
                  memorable event for players and spectators alike. Join us in
                  celebrating the spirit of cricket and witness the emergence of
                  future stars!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall Of Fame  */}
      <HallOfFame />

      {/* Advertiser  */}
      <Advertiser />

      {/*  Sponser */}
      <Sponser />

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default Home;
