// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function Team() {
//   return (
//     <section className="md:h-[500px] h-[400px] py-16 z-0">
//       <div className="sm:mx-16 mx-8">
//         <div className="md:mb-8 mb-4 max-w-4xl">
//           <h1 className="md:text-[40px] text-xl font-bold">TEAMS</h1>
//         </div>
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={40}
//           // navigation
//           speed={1500}
//           // pagination={{ clickable: true }}
//           className="mySwiper py-2"
//           breakpoints={{
//             240: {
//               slidesPerView: 1.25,
//               slidesPerGroup: 1,
//               spaceBetween: 20,
//             },
//             640: {
//               slidesPerView: 1.25,
//               slidesPerGroup: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2.25,
//               slidesPerGroup: 1,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 3,
//               slidesPerGroup: 1, // Show 3 slides per group
//               spaceBetween: 20, // Add space between slides
//             },
//             1200: {
//               slidesPerView: 3.25, // Show 3 full slides and 4th slide at 25%
//               slidesPerGroup: 1,
//               spaceBetween: 20,
//             },
//           }}
//         >
//           <SwiperSlide className="">
//             <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
//               <figure>
//                 <img
//                   src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/457141897_1158646355213740_5268020019357128082_n.jpg?ccb=11-4&oh=01_Q5AaIMaGWrUP4wo9kIRfGOrkPrD7TOB1vw0o5O4tijU_1hQC&oe=66DFBDEA&_nc_sid=5e03e0&_nc_cat=103"
//                   alt="Img"
//                   className="w-[300px] h-[200px]"
//                 />
//               </figure>
//               <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
//                 <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">
//                   M DHANDHAR-11
//                 </h2>
//                 <p className="text-[14px]  lg:text-[17px]">Bagra</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="">
//             <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
//               <figure>
//                 <img
//                   src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/team_logo/1634372917400_yPPMqXZVSBUP.jpg?width=1920&quality=75&format=auto"
//                   alt="Img"
//                   className="w-[300px] h-[200px]"
//                 />
//               </figure>
//               <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
//                 <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">
//                   BORA-11
//                 </h2>
//                 <p className="text-[14px]  lg:text-[17px]">Bagra</p>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide className="">
//             <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
//               <figure>
//                 <img
//                   src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/team_logo/1665286798047_pOO4a5mOpQ6X.jpg?width=1920&quality=75&format=auto"
//                   alt="Img"
//                   className="w-[300px] h-[200px]"
//                 />
//               </figure>
//               <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
//                 <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">
//                   SIYANA SUPER KING
//                 </h2>
//                 <p className="text-[14px]  lg:text-[17px]">Bagra</p>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide className="">
//             <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
//               <figure>
//                 <img
//                   src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/team_logo/1665216593169_TPGwEZHBh2mc.jpg?width=1920&quality=75&format=auto"
//                   alt="Img"
//                   className="w-[300px] h-[200px]"
//                 />
//               </figure>
//               <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
//                 <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">
//                   RATHOD-11
//                 </h2>
//                 <p className="text-[14px]  lg:text-[17px]">Bagra</p>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide className="">
//             <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
//               <figure>
//                 <img
//                   src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/team_logo/1673977694311_iU52UVYe577e.jpg?width=1920&quality=75&format=auto"
//                   alt="Img"
//                   className="w-[300px] h-[200px]"
//                 />
//               </figure>
//               <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
//                 <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">
//                   ABS CHANDNA
//                 </h2>
//                 <p className="text-[14px]  lg:text-[17px]">Bagra</p>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* <SwiperSlide>
//               <div className='bg-green-200 p-8 rounded-lg'>
//                 <h2 className='text-2xl font-bold mb-4'>Slide-7</h2>
//                 <p>Slide seven content</p>
//               </div>
//             </SwiperSlide> */}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getTeam } from "../../../api";
import { Link } from "react-router-dom";


export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTeamData = async () => {
    try {
      setLoading(true);
      const res = await getTeam();
      setTeam(res.data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTeamData();
  }, []);

  return (
    <section className="bg-white md:h-[500px] h-[400px] py-16 z-0">
      <div className="md:mx-16 mx-4">
        <div className="md:mb-12 mb-8 lg:mb-[48px] max-w-4xl">
          {/* <h1 className="md:text-[40px] text-xl font-bold text-center">TEAMS</h1> */}
          <h1 className="md:text-[40px] text-gray-700 text-xl font-bold">TEAMS</h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              speed={1500}
              className="mySwiper py-2 px-6"
              breakpoints={{
                240: { slidesPerView: 1.35, slidesPerGroup: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 20 },
                1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 20 },
                1200: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 20 },
              }}
            >
              {team.map((item) => (
                <SwiperSlide key={item._id}>
                  <Link to={`/teamview/${item._id}`}>
                
                  <div className="card card-compact bg-white lg:w-[280px]  md:w-[280px]  sm:w-[300px] shadow-xl rounded-lg overflow-hidden mb-12">
                   
                    <figure className="relative overflow-hidden md:h-[170px] h-[140px]">
                      <img
                        src={item.logo}
                        alt={item.team_name}
                        className="w-full h-full object-contain rounded-t-lg sm:h-[140px]"
                      />
                    </figure>

                    <div className="mb-4 font-mono">
                      <h2 className="text-center font-semibold text-[12px] sm:text-[14px] lg:text-[18px] text-gray-800 mt-4">
                        {item.team_name}
                      </h2>
                      <p className="text-center text-[14px] lg:text-[16px] text-gray-600 mt-2">
                        {item.village}
                      </p>
                    </div>
                  </div>
                    </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {team.length === 0 && (
              <p className="text-center text-gray-500 mt-6">No teams found.</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}

