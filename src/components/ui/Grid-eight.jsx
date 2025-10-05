import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import AnimatedShinyText from '../magicui/animated-shiny-text';
import { BorderBeam } from "../magicui/border-beam";

const GridEight = () => {
  return (
    <div className="h-80 overflow-hidden md:col-span-1 md:row-span-1 col-span-3 bg-neutral-50/5 backdrop-blur border border-gray-600/50 rounded-[30px] justify-center items-center rounded-br-xl rounded-tl-[4px]">
        <img className='object-cover' src='./Luts.png'/>
        <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Download LUT Pack</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
    <BorderBeam size={150} duration={12} delay={9}/>
    </div>
  )
}

export default GridEight