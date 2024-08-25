import React from 'react'

export default function AdvertiseComponent() {
  return (
    <section className='h-auto py-16'>
        <div className='mx-16'>
          <div className="pb-16 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold">New Advertize Slide</h1>
          </div>
          <div>
            {/* <h1 className="md:text-[40px] text-xl font-bold py-8">Heroes of 2023</h1> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="card card-compact bg-transparent md:w-40">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="w-full h-auto"
                  />
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="w-full h-auto"
                  />
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="w-full h-auto"
                  />
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="w-full h-auto"
                  />
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="w-full h-auto"
                  /> 
              </div>
              <div className="bg-transparent md:w-40">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="w-full h-auto"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
