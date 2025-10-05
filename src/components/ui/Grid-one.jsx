import About from "../../data/About.json"
import Social from "../../data/Social.json"

const GridOne = () => {
  return (
    <div id="present" className="sm:h-80 md:col-span-2 md:row-span-1 col-span-full  flex-col border border-gray-600/50 bg-neutral-50/5 backdrop-blur rounded-[30px] flex rounded-tl-xl rounded-br-[4px]">
		<div className="pt-1 m-7 justify-start flex items-center">
			<div className="hidden md:block w-12 h-12 rounded-full  bg-slate-400/50 hover:bg-neutral-50/10 hover:border-gray-300/90 duration-200 backdrop-blur border border-white-400/50 mr-2 justify-center items-center">
			<img className="m-auto" draggable="false" src={About.avatar} alt="" />
			</div>
			<p className="font-sans text-sm">
				{About.header} <br />
				<span className="hidden md:block text-[12px]">{About.subheader}</span>
			</p>
			<div className="flex items-center ml-auto">
				<div className="w-9 h-9 rounded-md bg-neutral-50/5 hover:bg-neutral-50/5 hover:border-gray-500/90 duration-200 backdrop-blur  mr-2 flex justify-center items-center">
					<a href={Social.Linkdin} target="_blank">
					<svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
					</a>
				</div>
				<div className="w-9 h-9 rounded-md bg-neutral-50/5 hover:bg-neutral-50/5 hover:border-gray-500/90 duration-200 backdrop-blur mr-2 flex justify-center items-center">
					<a href={Social.Instagram} target="_blank">
					<svg className="h-5 w-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
					</a>
				</div>
			</div>
		</div>
		<div className="m-3 ml-5 justify-center items-center">
			<div className="font-sans text-2xl ml-3 mb-5">{About.title}</div>
			<p className="font-normal text-sm text-justify text-[#919398] sm:ml-3 sm:mr-6 mb-5">
				{About.description}
			</p>
		</div>
	</div>
  )
}

export default GridOne