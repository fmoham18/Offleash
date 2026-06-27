'use client'
import Logo from '../public/NEW OL Logo (transparent).png' 
import OL_Borgor from '../public/offleash_borgor.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const mobileScreen = 56
const normalScreen = 64
const largeScreen = 128
const initialScreenSize = 0

export default function NavBar() {
    const [currentScreenSize, setCurrentScreenSize] = useState(initialScreenSize)
    const [widthSize, setWidthSize] = useState(normalScreen)
    const [isMobile, setIsMobile] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() =>{

        console.log(isClicked)
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

        // console.log('widthsize ' + widthSize)
        // console.log('window size ' + currentScreenSize)
        
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [currentScreenSize])


    return (
       //TODO: Change parent to adapt for mobile. keep parent css empty. 
        <div className='grid grid-cols-3 2xl:text-4xl items-center h-14 md:h-16 2xl:h-30 bg-main-color'>
            { !isMobile ? // ******* Non Mobile Mode
                (<> 
                    <div className='hidden md:flex md:justify-self-end md:gap-20 text-black'>
                        <button className='hidden'>
                            Merch
                        </button>
                        <button>
                            Shows/Music
                        </button>
                    </div>
                    <Image 
                        src={Logo}
                        alt="Our cool logo that cannot load :("
                        width={widthSize}
                        className='justify-self-center'
                    />
                    <button className='hidden md:block md:justify-self-start md:text-black'>
                    Contact Us
                    </button>
                </>)
                : // **************** Mobile Mode
                (<>
                    <button className='justify-self-left' onClick={() => {setIsClicked(!isClicked)}}>
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
                        className='justify-self-center'
                    />
                    <div className={isClicked ? 'bg-amber-600-color text-black w-full h-full' : 'hidden'}>
                        <button className=''>
                            Shows/Music
                        </button>
                        <button className=''>
                            Contact Us
                        </button>
                    </div>
                </>)
            }
        </div>
    )
}