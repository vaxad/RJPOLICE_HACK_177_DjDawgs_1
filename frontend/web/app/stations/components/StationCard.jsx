"use client"
import Link from "next/link";
import 'react-circular-progressbar/dist/styles.css';
import Percent from "./Percent";
import { useRouter } from "next/navigation";

export default function StationCard({ el }) {
    const router = useRouter()
    console.log(el._id)
    const id = ("/feedback/"+el._id.$oid).toString();
    return (
        <div className="stationCard rounded-lg lg:col-span-1 md:col-span-2 col-span-3 w-full p-4">
            <div className="cardContents">
                <div className="imageWithProgress relative border border-slate-950 rounded-md">
                    <div className=" w-full h-[200px] flex flex-row justify-center items-center relative overflow-clip">
                    <img  src={el.qr} className=" w-full blur-sm absolute -top-1/2" alt="" />

                    <img  src={el.qr} className=" h-full z-10" alt="" />
                    </div>
                    <Percent id={el._id.$oid} />
                </div>

                <div className="stationDetails py-3 w-full">
                    <p className="stationsSubtitle font-semibold">{el.name}</p>
                    <div className=" flex w-full justify-between items-center">
                    <p className="addy">ADDRESS:</p>
                    <a target="_blank" className=" underline decoration-red-300  hover:text-black hover:decoration-red-600" href={`https://www.google.com/maps/place/${el.latitude},${el.longitude}`}>View on maps</a>

                    </div>
                    <p>{`${el.area}, ${el.district}, ${el.state}${el.pincode?", "+el.pincode:""}`}</p>
                </div>
                <div className=" flex w-full justify-center items-center">
                    <button onClick={()=>{
                        console.log(typeof(id))
                        router.push(id)
                    }} className="feedbackBtn rounded-full bg-orange-500 flex justify-center items-center hover:scale-105 px-4 py-3 font-medium text-2xl text-slate-50 transition-all w-4/5  "> Give Feedback </button>
                </div>
            </div>
        </div>
    )
}
