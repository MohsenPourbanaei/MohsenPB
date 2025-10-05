import Social from "../../data/Social.json"
import Video from "../../data/Video.json"
import teaser from "../../assets/Teaser.mp4"

const GridFour = () => {
  return (
    <div className="h-80 md:col-span-2 md:row-span-1 overflow-hidden col-span-3 relative bg-neutral-50/5 backdrop-blur border border-gray-600/50 rounded-[30px] flex flex-col justify-center items-start  rounded-l-[4px] rounded-br-xl ">
		<div className="flex flex-row font-sans z-10 gap-2 p-[8px] sm:pt-4 sm:p-0  sm:pl-14 justify-start items-center">
			{Video.title}
			<a href={Social.Youtube}>
			<svg className="hover:fill-white duration-200 hover:-translate-y-1"
				stroke="currentColor" fill="#6c757d" strokeWidth="0" viewBox="0 0 16 16" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"></path></svg>
			</a>
		</div>
		<p className="font-sans z-10 text-xs sm:pl-14 p-[8px] sm:p-0 text-[11px] text-[#919398] relative">{Video.subTitle}</p>
		<div className="w-full md:w-[100%] h-full relative m-auto">
			<video className="absolute bottom-0 w-[100%] blur-xl filter"
			muted
			loop
			autoPlay
			>
				<source src={teaser} type="video/mp4"/>
			</video>
			<video className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-xl w-[80%] m-auto"
			muted
			loop
			autoPlay
			controls
			>
				<source src={teaser} type="video/mp4"/>
			</video>
		</div>
	</div>
  )
}

export default GridFour