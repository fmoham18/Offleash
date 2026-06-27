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

        // console.log('widthsize ' + widthSize)
        // console.log('window size ' + currentScreenSize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [currentScreenSize])

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className= 'font-sans text-2xl md:text-6xl 2xl:text-9xl font-bold text-center'>
                Upcoming Shows/Music
            </h1>
            <br />
            <div className='flex justify-center gap-5 md:gap-10 2xl:gap-20'>
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
                No Upcoming Shows :( <br />
                <br />
                BUTT, we are gathering up all our ingredients to cook up some new music for yall <br />
                <br />
                Visit our Socials for quicker updates!
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