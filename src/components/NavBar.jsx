import data from "../data/Nav.json"
import CV from "../assets/CV.pdf"

const NavBar = () => {
  return (
    <div className="navbar font-medium text-[#919398] text-lg mt-5 p-6 flex justify-between items-center">
          <div className="left-text flex cursor-pointer">
              <span className="text-white">{data.title}</span>
              <p>{data.sub}</p>
          </div>
          <div className="right-items sm:block hidden">
              <a href={data.link1.link} className="mr-4 hover:text-white/90 duration-300">{data.link1.lable}</a>
              <a href={data.link2.link} className="mr-4 hover:text-white/90 duration-300">{data.link2.lable}</a>
              <a href={data.link3.link} className="mr-4 hover:text-white/90 duration-300">{data.link3.lable}</a>
              <a href={CV}>
              <button className="relative inline-flex h-10 overflow-hidden rounded-xl p-[1px] focus:outline-none">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {data.botton}
                  </span>
                </button>
                </a>
          </div>
      </div>
  )
}

export default NavBar

