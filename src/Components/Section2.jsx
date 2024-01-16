import React from 'react'

import facebook from '/src/images/icon-facebook.svg'
import twitter from '/src/images/icon-twitter.svg'
import instagram from '/src/images/icon-instagram.svg'
import youtube from '/src/images/icon-youtube.svg'
import iconUp from "/src/images/icon-up.svg";
import iconDown from "/src/images/icon-down.svg";

export default function Section2() {



    const sections = [
        {
            logo: facebook,
            title: "Page Views",
            followers: 87,
            up: 3,
        },
        {
            logo: facebook,
            title: "Likes",
            followers: 52,
            down: 2,
        },
        {
            logo: instagram,
            title: "Likes",
            followers: 5462,
            up: 2257,
        },
        {
            logo: instagram,
            title: "Profile Views",
            followers: "52k",
            up: 1375,
        },
        {
            logo: twitter,
            title: "Retweets",
            followers: "117",
            up: 303,
        },
        {
            logo: twitter,
            title: "Likes",
            followers: 507,
            up: 553,
        },
        {
            logo: youtube,
            title: "Likes",
            followers: 107,
            down: 19,
        },
        {
            logo: youtube,
            title: "Total Views",
            followers: 1407,
            down: 12,
        },
    ];
    return (
        <div className='font-Inter px-10 mt-2 gap-y-10 grid justify-center items-center lg:grid-cols-4 lg:gap-x-5 lg:gap-y-5'>
            {sections.map((card, index) => (
                <div key={index} className='gap-y-2 p-10 flex flex-col justify-center items-center w-[400px]  lg:w-[250px]  h-[100px]  cardbg rounded-lg '>
                    <div className='w-full flex flex-row justify-between'>
                        <p>{card.title}</p>
                        <img src={card.logo} />
                    </div>

                    <div className='  w-full flex flex-row justify-between'>
                        <p className='font-bold text-[30px]'>{card.followers}</p>
                        <div className=' flex flex-row p-0 gap-x-1 justify-center items-center'>
                            <img className="scale-[0.7] "
                                src={card.up ? iconUp : iconDown} />
                            <p className={`${card.up ? "text-lime" : "text-BrightRed"}`}>{card.up ? card.up : card.down} <span>%</span>
                            </p></div>
                    </div>
                </div>

            ))
            }

        </div>
    )
}
