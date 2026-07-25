'use client'
import Logo from '../public/NEW OL Logo (transparent).png' 
import OL_Borgor from '../public/offleash_borgor.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


type Props = {  
    setMenuToggled: React.Dispatch<React.SetStateAction<boolean>>
}

const mobileScreen = 56
const normalScreen = 64
const largeScreen = 70
const initialScreenSize = 0


export default function NavBar({ setMenuToggled } : Props ) {
    const [currentScreenSize, setCurrentScreenSize] = useState(initialScreenSize)
    const [widthSize, setWidthSize] = useState(normalScreen)
    const [isMobile, setIsMobile] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() =>{

        setCurrentScreenSize(window.innerWidth)
        setIsClicked(false)
        setMenuToggled(false)

        const onResize = () =>{
            setCurrentScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', onResize)

        if (currentScreenSize < 768 && currentScreenSize != initialScreenSize) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }


        console.log('Nav inital' + isClicked)

        if (currentScreenSize > 2000) {
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


    useEffect(() => {
        console.log('Nav ' + isClicked) 
    }, [isClicked])

    return (
        <div className='font-edbert'>
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
                (<div className='h-16 bg-main-color'>
                    <button className='absolute' onClick={() => {setIsClicked(!isClicked); setMenuToggled(!isClicked)}}>
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
                    <div className={`${!isClicked ? '-translate-x-full' : 'translate-x-0'} flex flex-col transition-transform duration-300 ease-out text-xl z-50 bg-main-color pt-10 h-screen w-1/2`}>
                        <button className='h-16 cursor-pointer mb-6' onClick={()=>{
                                setIsClicked(!isClicked)
                                setMenuToggled(!isClicked)
                                setTimeout(() => {
                                    document.getElementById('shows')?.scrollIntoView()
                                }, 100)}}>
                            Shows/Music
                        </button>
                        <button className='h-16 cursor-pointer' onClick={()=>{
                                setIsClicked(!isClicked)
                                setMenuToggled(!isClicked)
                                setTimeout(() => {
                                    document.getElementById('shows')?.scrollIntoView()
                                }, 100)}}>
                            Contact Us
                        </button>
                    </div>
                </div>)
         }
        </div>
    )
}
