import React from 'react'
import facebook from '/src/images/icon-facebook.svg'
import twitter from '/src/images/icon-twitter.svg'
import instagram from '/src/images/icon-instagram.svg'
import youtube from '/src/images/icon-youtube.svg'
import iconUp from "/src/images/icon-up.svg";
import iconDown from "/src/images/icon-down.svg";
import { clsx } from 'clsx';
export default function Section1() {

    const sections = [
        {
            logo: facebook,
            name: "@nathanf",
            followers: 1987,
            title: "followers",
            up: 12,
            color: "border-Facebook",
        },
        {
            logo: twitter,
            name: "@nathanf",
            followers: 1044,
            title: "followers",
            up: 99,
            color: "border-Twitter",
        },
        {
            logo: instagram,
            name: "@realnathanf",
            followers: "11k",
            title: "followers",
            up: 1099,
            color: "border-Insta",
        },
        {
            logo: youtube,
            name: "Realnathanf",
            followers: 8239,
            title: "subscribers",
            down: 144,
            color: "border-YouTube",
        },
    ];

    return (
        <>
            <div className=' font-Inter gap-y-10 mt-5 grid justify-center items-center lg:grid-cols-4 lg:gap-x-5 '>
                {sections.map((card, index) => (

                    <div key={index} className={clsx("border-t-[5px] p-2 flex flex-col justify-center items-center w-[400px] h-[300px] lg:w-[250px] lg:h-[150px]  cardbg rounded-lg", card.color)}>
                        <div className='flex flex-row  gap-x-3 '>
                            <img src={card.logo} />
                            <p className='font-bold'>{card.name}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[100vw]'>
                            <h1 className='font-bold text-[60px] lg:text-[30px] followertextcolor' l>{card.followers}</h1>
                            <p className='tracking-widest text-[20px] lg:text-[10px] uppercase'>{card.title}</p>
                            <div className='flex flex-row justify-center items-center gap-x-2 mt-5'>
                                <img className="scale-[1.2] "
                                    src={card.up ? iconUp : iconDown} />
                                <p className={`${card.up ? "text-lime" : "text-BrightRed"}`}>{card.up ? card.up : card.down} <span>Today</span>
                                </p>
                            </div>
                        </div>

                    </div>
                ))
                }

            </div>
        </>
    )
}
