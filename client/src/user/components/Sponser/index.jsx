import React from "react";

export default function Sponser() {
  return (
    <section className=" h-auto py-8">
      <div className="md:mx-8 mx-3">
        <div className="pb-4 max-w-4xl">
          <h1 className="md:text-[40px] text-xl font-bold">SPONSERS</h1>
        </div>
        <div className="bg-slate-700 py-8 rounded-xl text-gray-200">
          {/* <h1 className="md:text-[30px] text-xl font-bold py-8">FOOD SPONERS</h1> */}
          <div className="md:mx-10 md:px-6 mx-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-4 gap-2">
            <div className="card card-compact bg-transparent md:w-40 ">
              <figure className="px-2 md:px-0">
                <img
                  src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1665210898490_Tpah52Jdz3Ui.jpeg?width=16&quality=75&format=auto"
                  alt="Img"
                  className="rounded-full w-full h-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">
                  Satish Suthar s/o Visaram ji Suthar
                </h3>
                <p className="text-gray-400">Bagra</p>
              </div>
            </div>
            <div className="card card-compact bg-transparent md:w-40 ">
              <figure className="px-2 md:px-0">
                <img
                  src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1665210898490_Tpah52Jdz3Ui.jpeg?width=16&quality=75&format=auto"
                  alt="Img"
                  className="rounded-full w-full h-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">
                  Ramesh Suthar s/o Vasana ji Suthar
                </h3>
                <p className="text-gray-400">Bagra</p>
              </div>
            </div>

            <div className="card card-compact bg-transparent md:w-40 sm:block hidden  ">
              <figure className="px-2 md:px-0">
                <img
                  src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1665210898490_Tpah52Jdz3Ui.jpeg?width=16&quality=75&format=auto"
                  alt="Img"
                  className="rounded-full w-full h-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">
                  Satish Suthar s/o Visaram ji Suthar
                </h3>
                <p className="text-gray-400">Bagra</p>
              </div>
            </div>
            <div className="card card-compact bg-transparent md:w-40 sm:block hidden   ">
              <figure className="px-2 md:px-0">
                <img
                  src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1665210898490_Tpah52Jdz3Ui.jpeg?width=16&quality=75&format=auto"
                  alt="Img"
                  className="rounded-full w-full h-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">
                  Satish Suthar s/o Visaram ji Suthar
                </h3>
                <p className="text-gray-400">Bagra</p>
              </div>
            </div>
            <div className="card card-compact bg-transparent md:w-40 sm:block hidden   ">
              <figure className="px-2 md:px-0">
                <img
                  src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1665210898490_Tpah52Jdz3Ui.jpeg?width=16&quality=75&format=auto"
                  alt="Img"
                  className="rounded-full w-full h-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">
                  Satish Suthar s/o Visaram ji Suthar
                </h3>
                <p className="text-gray-400">Bagra</p>
              </div>
            </div>
            {/* <div className="card card-compact bg-transparent md:w-40 ">
              <figure className="px-2 md:px-0">
                <img
                  src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/411803592_868034805016752_4905107543296484106_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIOpiSYbuSjtYDZGUjvJ5Qq4for9NtYKLu1VOdfgs8hKF&oe=66DFA62C&_nc_sid=5e03e0&_nc_cat=105"
                  alt="Img"
                  className="rounded-full w-full h-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">Ramesh Suthar s/o Dhuda ji Suthar</h3>
                <p className="text-gray-400">Bagra</p>
              </div>
            </div>
            <div className="card card-compact bg-transparent md:w-40 ">
              <figure className="px-2 md:px-0">
                <img
                  src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/423956246_786756486613169_7178690588453350797_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIA1WcPVGYdauoxjw1GUTWgKLT5EJ2byXWCKFvqwf7zVG&oe=66DFA5E1&_nc_sid=5e03e0&_nc_cat=108"
                  alt="Img"
                  className="rounded-full w-full h-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">
                  Mahendra Suthar s/o Rama ji Suthar
                </h3>
                <p className="text-gray-400">Akoli</p>
              </div>
            </div>
            <div className="card card-compact bg-transparent md:w-40 ">
              <figure className="px-2 md:px-0">
                <img
                  src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/384817044_1046678703800068_2213166948591631058_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaINHqkKu8CwR64aF_lTfvVcz_zs0yfkHuf_hD7-57YgGw&oe=66DFB1B3&_nc_sid=5e03e0&_nc_cat=107"
                  alt="Img"
                  className="rounded-full w-full h-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">Madan Suthar s/o Pratap ji Suthar</h3>
                <p className="text-gray-400">Bagra</p>
              </div>
            </div> */}
          </div>
          {/* <button className="mx-auto btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
          <div className="text-center lg:hidden">
            <button className="btn btn-sm btn-active">View More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
