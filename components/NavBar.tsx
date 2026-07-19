'use client'
import Logo from '../public/NEW OL Logo (transparent).png' 
import OL_Borgor from '../public/offleash_borgor.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const mobileScreen = 56
const normalScreen = 64
const largeScreen = 70
const initialScreenSize = 0

export default function NavBar() {
    const [currentScreenSize, setCurrentScreenSize] = useState(initialScreenSize)
    const [widthSize, setWidthSize] = useState(normalScreen)
    const [isMobile, setIsMobile] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() =>{

        setCurrentScreenSize(window.innerWidth)
        setIsClicked(false)

        const onResize = () =>{
            setCurrentScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', onResize)

        if (currentScreenSize < 768 && currentScreenSize != initialScreenSize) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }

        console.log(isMobile)

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
        <div className='relative font-edbert'>
            { !isMobile ? // ******* Non Mobile Mode
                (<div className='grid grid-cols-3 2xl:text-4xl items-center h-14 md:h-16 2xl:h-30 bg-main-color'>
                    <div className='hidden md:flex md:justify-self-end md:gap-20 text-black'>
                        <button className='hidden'>
                            Merch
                        </button>
                        <button className='cursor-pointer' onClick={ () => {document.getElementById('shows')?.scrollIntoView()} }>
                            Shows/Music
                        </button>
                    </div>
                    <Image 
                        src={Logo}
                        alt="Our cool logo that cannot load :("
                        width={widthSize}
                        className='justify-self-center'
                    />
                    <button className='hidden md:block md:justify-self-start md:text-black cursor-pointer' onClick={ () => {document.getElementById('shows')?.scrollIntoView()} }>
                    Contact Us
                    </button>
                </div>)
                : // **************** Mobile Mode
                (<div className='h-14 bg-main-color'>
                    <div className='flex'>
                        <button className='absolute' onClick={() => {setIsClicked(!isClicked)}}>
                            <Image
                                src={OL_Borgor}
                                alt='Borgor Logo'
                                width={widthSize}
                            />
                        </button>
                        <Image 
                            src={Logo}
                            alt="Our cool logo that cannot load :("
                            width={widthSize}
                            className='m-auto'
                        />
                    </div>
                    {isClicked && (
                        <div className='absolute grid grid-rows-2 text-2xl z-50 bg-main-color w-full'>
                            <button className='text-center h-16' onClick={()=>{
                                    document.getElementById('shows')?.scrollIntoView()
                                    setIsClicked(!isClicked)}}>
                                Shows/Music
                            </button>
                            <button className='text-center h-16' onClick={()=>{
                                    document.getElementById('shows')?.scrollIntoView()  
                                    setIsClicked(!isClicked)}}>
                                Contact Us
                            </button>
                    </div>)}
                </div>)
            }
        </div>
    )
}
