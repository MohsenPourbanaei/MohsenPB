import ThreeDPhotoCarousel from "../magicui/threedC"

const GridSeven = () => {
  return (
    <div className="h-50 sm:h-80 overflow-hidden md:col-span-2 md:row-span-1 col-span-3 bg-neutral-50/5 backdrop-blur border border-gray-600/50 rounded-[30px] justify-center items-center rounded-bl-xl rounded-tr-[4px]">
      {/* <div id="gallery" class="relative w-full h-full" data-carousel="slide">
          
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              
              <div class="duration-700 ease-in-out" data-carousel-item>
                  <img src="./image-1.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div>
              
              <div class="duration-700 ease-in-out" data-carousel-item="active">
                  <img src="./image-2.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div>
              
              <div class="duration-700 ease-in-out" data-carousel-item>
                  <img src="./image-3.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div>
              
              <div class="duration-700 ease-in-out" data-carousel-item>
                  <img src="./image-4.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div>
              
              <div class="duration-700 ease-in-out" data-carousel-item>
                  <img src="./image-5.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div>
          </div>
          
          <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span class="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span class="sr-only">Next</span>
              </span>
          </button>
      </div> */}
      <ThreeDPhotoCarousel/>
    </div>
  )
}

export default GridSeven