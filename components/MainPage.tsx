'use client'
import SecondLogo from '../public/offleash_logo-revised.png' 
import SecondLogo_Sad from '../public/offleash_logo_sad.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const mobileScreen = 320
const normalScreen = 600
const largeScreen = 800
const initialScreenSize = 0

export default function MainPage() {
    const [currentScreenSize, setCurrentScreenSize] = useState(initialScreenSize)
    const [widthSize, setWidthSize] = useState(normalScreen)
    // const [defaultFont, setFont] = useState(true)

    useEffect(() =>{

        setCurrentScreenSize(window.innerWidth)

        const onResize = () =>{
            setCurrentScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', onResize)


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


    //NOTE: We may use this for something else in the future.

    //use this as a way to change the body font for whole page oowoo
    // useEffect(() => {
    //     if (defaultFont) {
    //         document.body.className = 'font-serif'
    //     } else {
    //         document.body.className = 'font-sans'
    //     }
    // }, [defaultFont])


    //NOTE: Will need to change margins for different screen heights, as it's affecting the spacing of the image at the center

    return (
        <div className='flex justify-center z-0'>
            <Image
                src={SecondLogo}
                alt='Our cool second logo that cannot load :('
                width={widthSize}
                // onClick={() => { setFont(!defaultFont) }}
                className='mb-12'
            />
        </div>
    )
}
