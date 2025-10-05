import Contactme from "../../data/Contactme.json"
import { Meteors } from '../magicui/meteors'


const GridSix = () => {
  return (
    <div id="contact" className="h-80 md:col-span-full md:row-span-1 col-span-full overflow-hidden bg-neutral-50/5 border border-gray-600/50 backdrop-blur rounded-[30px] flex justify-center items-end relative rounded-bl-[4px] rounded-tr-xl">
		<Meteors number={30}/>
		{/* <img className="absolute right-0 z-0 h-5/6 -bottom-10 grayscale object-cover pointer-events-none" draggable="false" src="./globedark.svg" /> */}
		<div className="absolute top-0 left-0 p-5 text-white font-normal">
				{Contactme.title}<br/>
			<span className="font-normal text-sm text-justify text-[#919398]">{Contactme.sub}</span>
		</div>
			<div className="absolute left-0 pb-9 pl-11 lg:pl-14 flex flex-col items-center p-3 text-white">
			<div className="w-14 h-14 rounded-md rounded-b-none bg-neutral-50/5 hover:bg-neutral-50/10 hover:border-gray-300/90 duration-200 backdrop-blur border border-gray-400/30 mr-2 flex justify-center items-center">
				<a href="tel:+989355473072">
				<svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z"></path></svg>
				</a>
				</div>
			<div className="w-14 h-14 rounded-md rounded-t-none bg-neutral-50/5 hover:bg-neutral-50/10 hover:border-gray-300/90 duration-200 backdrop-blur border border-gray-400/30 mr-2 flex justify-center items-center">
				<a href="mailto:mohsen.pourbanaei@gmail.com">
				<svg className="w-5 h-5" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path></svg>
				</a>
			</div>
		</div>
	</div>
  )
}

export default GridSix