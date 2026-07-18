'use client'
import OL_Logo from '../public/NEW OL Logo (transparent).png'
import OL_Spotify from '../public/offleash_spotify.png'
import OL_Insta from '../public/offleash_insta.png'
import OL_LinkTree from '../public/offleash_linktree.png'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const mobileScreen = 56
const normalScreen = 64
const largeScreen = 128
const initialScreenSize = 0

interface Props {
    city: string;
    state: string;
    venue: string;
    date: string;
    time: string;
}

export default function Show({city, state, venue, date, time}: Props) {
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
        <div className="border-t-4 border-b-4 border-gray-200 text-lg md:text-xl 2xl:text-4xl w-[75vw]">
            <div className="flex p-2 m-4 justify-between">
                <div className="flex flex-col gap-1 justify-between">
                    <div>
                        {city}, {state}
                    </div>
                    <div>
                        {venue} 
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                        {date}
                    </div>
		    <div>
			@
		    </div>
                    <div>
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );

}
