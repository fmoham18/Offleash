'use client'
import OL_Logo from '../public/NEW OL Logo (transparent).png'
import OL_Spotify from '../public/offleash_spotify.png'
import OL_Insta from '../public/offleash_insta.png'
import OL_LinkTree from '../public/offleash_linktree.png'
import Link from 'next/link'
import Image from 'next/image'
import Show from './Show'
import { useEffect, useState } from 'react'

const mobileScreen = 56
const normalScreen = 64
const largeScreen = 128
const initialScreenSize = 0

const shows = [
    {
        city: "Washington",
        state: "DC",
        venue: "Pearl St Warehouse",
        time: "7 PM",
        date: "Sun, Aug 23rd"
    }
];

const hasShows = shows.length > 0

export default function SecondPage() {
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
        <div id='shows' className='flex flex-col items-center  min-h-screen'>
            <h1 className= 'pt-16 mb-6 text-2xl md:text-6xl 2xl:text-9xl font-bold text-center font-edbert'>
                Upcoming Shows/Music
            </h1>
            <div className='flex justify-center gap-5 mb-6 md:gap-10 2xl:gap-20'>
                <Link 
                    href='https://linktr.ee/offleash.mp3'
                    target='_blank'
                    className='bg-main-color rounded-full md:w-16 md:h-16 2xl:w-28 2xl:h-28'>
                    <Image
                        src={OL_LinkTree}
                        alt='LinkTree Logo'
                        width={widthSize}
                    />
                </Link>
                <Link
                    href='https://open.spotify.com/artist/0dFHANOUI4ZVoxOgVvgPjP?si=8IrmyJWjRL65UI5lxgDYWg'
                    target='_blank'
                    className='bg-main-color rounded-full md:w-16 md:h-16 2xl:w-28 2xl:h-28'>
                    <Image
                        src={OL_Spotify}
                        alt='Spotify Logo'
                        width={widthSize}
                    />
                </Link>
                <Link 
                    href='https://www.instagram.com/offleash.mp3/'
                    target='_blank'
                    className='bg-main-color rounded-full md:w-16 md:h-16 2xl:w-28 2xl:h-28'>
                    <Image
                        src={OL_Insta}
                        alt='Instagram Logo'
                        width={widthSize}
                    />
                </Link>
            </div>
            <br />
            <h3 className='text-lg md:text-xl 2xl:text-4xl text-center'>
                <Show
                    city="Washington"
                    state="DC"
                    venue="Pearl Street Warehouse"
                    time="7 PM"
                    date="Sun, Aug 23rd"
                />
                {/* {
                    hasShows ? 
                        {shows.map((show) =>
                            <Show
                                city={show.city}
                                state={show.state}
                                venue={show.venue}
                                date={show.date}
                                time={show.time}
                            />
                        )}
                        :
                    {
                    No Upcoming Shows :( <br />
                    <br />
                    BUTT, we are gathering up all our ingredients to cook up some new music for yall <br />
                    <br />
                    Visit our Socials for quicker updates!
                    }
                } */}

            </h3>
            <br />
            <h3 className='text-lg md:text-xl 2xl:text-4xl text-center'>
                Need to contact us? 
                <br /><br />
                Send us a DM on Instagram or email us at offleashbandmedia (at) gmail (dot) com!
            </h3>
        </div>
    )

} 