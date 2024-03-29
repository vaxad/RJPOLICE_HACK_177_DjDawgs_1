"use client"
import store from '../../lib/zustand';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import translate from "translate";

export default function Navbar() {
    const { language, prevLanguage, setPrevLanguage, setLanguage, setEngArr, engArr } = store();
    const [nav, setnav] = useState(false)
    const [nav2, setnav2] = useState(false)

    const changeLang = async (lang) => {
        const p = Array.from(document.getElementsByTagName('p'));
        const h1 = Array.from(document.getElementsByTagName('h1'));
        const h2 = Array.from(document.getElementsByTagName('h2'));
        const h3 = Array.from(document.getElementsByTagName('h3'));
        const a = Array.from(document.getElementsByTagName('a'));
        const button = Array.from(document.getElementsByTagName('button'));
        const text = p.concat(h1, h2, h3, a, button)
        let arr = []
        try {
        for (const element of text) {
            console.log(element.textContent)
            if ((prevLanguage !== "en") && (lang !== "en")) {
                if (engArr.length > 0) {
                    if (element.id !== 'rakshak' && !element.textContent.includes("Rakshakરીત")) {
                        const data = engArr.find(item => item.lang1 == element.textContent)
                        element.textContent = (await translate(data.lang2, lang))
                        arr.push({ lang1: element.textContent, lang2: data.lang2 })
                    }
                } else {
                    alert("Please wait for the page to load")
                    break
                }
            } else {
                if (lang !== "en") {
                    if (element.id !== 'rakshak' && !element.textContent.includes("Rakshakરીત")) {
                        const temp = element.textContent;
                        element.textContent = (await translate(element.textContent, lang));
                        arr.push({ lang1: element.textContent, lang2: temp })
                    }
                } else if (engArr.length > 0) {
                    if (element.id !== 'rakshak' && !element.textContent.includes("Rakshakરીત")) {
                        const data = engArr.find(item => item.lang1 == element.textContent)
                        element.textContent = data.lang2
                    }
                }
            }
        }
    } catch (error) {
            
    }
    setPrevLanguage(lang)
        if (arr.length > 0)
            setEngArr(arr)
    }
    useEffect(() => {
        changeLang(language)
    }, [language])

    return (
        <div className="flex flex-col gap-5 py-6  bg-opacity-60 bg-slate-950 w-full max-w-[100vw] rounded-b-2xl ">
            <div className=" flex flex-row justify-between items-center lg:px-16 px-5 w-full z-20">
                <Link href={"/"} className="logo cursor-pointer">
                    <h1 id='rakshak' className="txtOrange rakshak font-bold lg:text-4xl text-2xl">Rakshakरीत</h1>
                    <p className="subtitle lg:flex hidden">Your Voice, Our Commitment</p>
                </Link>

                <div className="searchbar"></div>

                <div className=" flex flex-row justify-center items-center gap-4">
                    <select value={language} onChange={(e) => {setLanguage(e.target.value); console.log(e.target.value) }} className="language txtOrange cursor-pointer  hover:text-orange-600 bg-transparent border-none ring-0 focus:border-none">
                        <option value={"en"}><p>English</p></option>
                        {/* <option value={"gu"}><p>Gujarati</p></option> */}
                        <option value={"hi"}><p>Hindi</p></option>
                    </select>
                    <svg onClick={() => { setnav(true) }} xmlns="http://www.w3.org/2000/svg" className=' text-[#F86F03] hover:text-orange-600 transition-all lg:hidden block' fill='currentColor' x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                    
                    <svg onClick={() => { setnav2(true) }} xmlns="http://www.w3.org/2000/svg" className=' text-[#F86F03] hover:text-orange-600 transition-all hidden lg:block' fill='currentColor' x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>





            </div>

            <div className="flex-row justify-around items-center  hidden text-slate-100 ">
                <div><Link href="/complain" className="navLinks transition-all">Submit a feedback</Link></div>
                <div><Link href="/stations" className="navLinks transition-all">Police stations near You</Link></div>
                <div><Link href="/working" className="navLinks transition-all">How it works</Link></div>
                <div><Link href="/about" className="navLinks transition-all">About us</Link></div>
             </div>

            <div className={`flex-col justify-center gap-12 bg-[#454545] min-h-[100vh] fixed  top-0 right-0 ${nav ? " translate-y-0" : " -translate-y-full"} transition-all items-center lg:hidden flex w-full text-slate-100 z-50 `} style={{ transitionDuration: "1000ms", transitionDelay: "200ms" }}>
                <div onClick={() => { setnav(false) }} className=" absolute top-5 right-5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" className=' text-[#F86F03] hover:text-orange-600 transition-all lg:hidden block' fill='currentColor' x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg></div>
                <div><Link onClick={() => { setnav(false) }} href="/complain" className="navLinks transition-all">Submit a feedback</Link></div>
                <div><Link onClick={() => { setnav(false) }} href="/stations" className="navLinks transition-all">Police stations near You</Link></div>
                <div><Link onClick={() => { setnav(false) }} href="/working" className="navLinks transition-all">How it works</Link></div>
                <div><Link onClick={() => { setnav(false) }} href="/about" className="navLinks transition-all">About us</Link></div>
             </div>

            <div className={`flex-col justify-center gap-12 bg-[#454545] min-h-[100vh] fixed top-0 right-0 ${nav2 ? " translate-x-0" : " translate-x-full"} transition-all items-center hidden lg:flex w-fit px-24 text-slate-100 z-40 `} style={{ transitionDuration: "1000ms", transitionDelay: "200ms" }}>
                <div onClick={() => { setnav2(false) }} className=" absolute top-12 right-12 transition-all"><svg xmlns="http://www.w3.org/2000/svg" className=' text-[#F86F03] hover:text-orange-600 transition-all hidden lg:block' fill='currentColor' x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg></div>
                <div><Link onClick={() => { setnav2(false) }} href="/complain" className="navLinks transition-all">Submit a feedback</Link></div>
                <div><Link onClick={() => { setnav2(false) }} href="/stations" className="navLinks transition-all">Police stations near You</Link></div>
                <div><Link onClick={() => { setnav2(false) }} href="/working" className="navLinks transition-all">How it works</Link></div>
                <div><Link onClick={() => { setnav2(false) }} href="/about" className="navLinks transition-all">About us</Link></div>
                </div>
        </div>
    )
}
