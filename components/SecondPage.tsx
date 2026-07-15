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

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [currentScreenSize])

    return (
        <div id='shows' className='flex flex-col items-center  min-h-screen'>
            <h1 className= 'pt-16 mb-6 text-2xl md:text-6xl 2xl:text-9xl font-bold text-center'>
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
            <iframe data-testid="embed-iframe" className="w-72 h-24 xl:w-1/4 2xl:w-2/8 md:h-28 2xl:h-40 mb-6" src="https://open.spotify.com/embed/track/40iucKIMPzr961M9Hd3wVp?utm_source=generator" 
                    allow="autoplay; clipboard-write; encrypted-media; 
                    fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div className='text-lg md:text-xl 2xl:text-4xl text-center'>
                <p className='mb-6'>No Upcoming Shows :( </p>
                <p className='mb-6'>BUTT, we are gathering up all our ingredients to cook up some new music for yall</p>
                <p className='mb-6'>Visit our Socials for quicker updates!</p>
                <p className='mb-6'>Need to contact us? </p>
                <p className='mb-6'>Send us a DM on Instagram or email us at offleashbandmedia (at) gmail (dot) com!</p>
            </div>
        </div>
    )

} 