import Link from "next/link";
import Navbar from "./components/Navbar";
import Phone from "./components/Phone";
import Blob2 from "./components/Blob2";

export default function Home() {
  return (
    <main className="flex flex-col w-full home min-h-[100vh] h-full  overflow-y-scroll ">
      <div className="area z-10" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <Navbar />
      <div className=" flex flex-col justify-center items-center h-full ">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-12 w-full max-w-[100vw] text-slate-950 z-20  h-full py-16">
          <div className="flex flex-col justify-center items-center w-full px-2 py-2">
            <div className=" flex flex-col justify-center items-center lg:px-12 px-3 lg:py-12 py-2 border-2 border-[#454545] rounded-2xl">
              <Blob2 />
              <div className="content">
                <div className="content__container lg:text-6xl text-3xl md:text-6xl flex-wrap font-extrabold z-20 text-[#FFFFFF]">
                  <p id="rakshak" className="content__container__text">
                    We
                  </p>

                  <ul className="content__container__list">
                    <li className="content__container__list__item">Report !</li>
                    <li className="content__container__list__item">Evaluate !</li>
                    <li className="content__container__list__item">Improve !</li>
                    <li className="content__container__list__item">Protect !</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col py-2 subtitle lg:text-2xl text-xl text-[#FFFFFF]">

                <p>Help us make your community safer.</p>
                <p>Share your feedback with your local police station.</p>
              </div>
              <Link href={"/complain"} className=" px-5 my-2 py-2 rounded-full bg-[#F86F03] lg:text-2xl text-[#FFFFFF] text-xl  hover:scale-105 font-bold transition-all">GIVE FEEDBACK</Link>
            </div>
          </div>

          <div className=" w-full flex justify-center lg:scale-100 scale-95 items-center lg:justify-start h-full lg:w-3/5">
            <Phone />
          </div>

        </div>
        <div className=" flex flex-col gap2 py-6 w-full justify-center h-full  items-center ">
          <h1 id="rakshak" className=" text-2xl text-center font-bold">अपनी प्रतिक्रिया अपनी भाषा में प्राप्त करें!</h1>
          <h1 id="rakshak" className=" text-2xl text-center font-bold">सुरक्षा, राजस्थान की आवाज़!</h1>
        </div>
      </div>

    </main>
  )
}
