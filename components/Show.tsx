'use client'
import OL_Logo from '../public/NEW OL Logo (transparent).png'
import OL_Spotify from '../public/offleash_spotify.png'
import OL_Insta from '../public/offleash_insta.png'
import OL_LinkTree from '../public/offleash_linktree.png'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PT_Sans } from 'next/font/google'

const mobileScreen = 56
const normalScreen = 64
const largeScreen = 128
const initialScreenSize = 0

interface ShowElement {
    // id is to appease React runtime warning/error
    id: number;
    city: string;
    state: string;
    venue: string;
    date: string;
    time: string;
    url: string;
}

interface Props {
    shows: ShowElement[];
}

export function ShowFactory({ shows }: Props) {
    return (
        <div>
            {shows.map((show) => (
                <div key={show.id} className={`flex flex-col p-[1vw] m-auto justify-between border-3 w-[75vw] md:w-[50vw] lg:w-[40vw] 2xl:w-[30vw] md:text-4xl mt-[2vw] mb-[2vw]`}>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-xl md:text-4xl">
                            {show.date} @ {show.time}
                        </div>
                        <div className="md:text-2xl">
                            <div>
                                <a href={show.url} className="text-blue-400">{show.venue}</a> 
                            </div>
                            <div>
                                {show.city}, {show.state}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function Show({shows}: Props) {
    const [currentScreenSize, setCurrentScreenSize] = useState(initialScreenSize)
    const [widthSize, setWidthSize] = useState(normalScreen)

    useEffect(() =>{

        setCurrentScreenSize(window.innerWidth)

        const onResize = () =>{
            setCurrentScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', onResize)


        if (currentScreenSize > 1440) {
            setWidthSize(largeScreen)
        } else if (currentScreenSize < 500 && currentScreenSize != initialScreenSize) {
            setWidthSize(mobileScreen)
        } else {
            setWidthSize(normalScreen)
        }

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [currentScreenSize])

    return (
        <ShowFactory shows={shows}/>
    );

}
