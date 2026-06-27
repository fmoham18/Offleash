'use client'
import SecondLogo from '../public/offleash_logo-revised.png' 
import SecondLogo_Sad from '../public/offleash_logo_sad.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const mobileScreen = 320
const normalScreen = 500
const largeScreen = 800
const initialScreenSize = 0

export default function MainPage() {
    const [currentScreenSize, setCurrentScreenSize] = useState(initialScreenSize)
    const [widthSize, setWidthSize] = useState(normalScreen)
    const [defaultFont, setFont] = useState(true)

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

    //use this as a way to change the body font for whole page oowoo
    useEffect(() => {
        if (defaultFont) {
            document.body.className = 'font-edbert'
        } else {
            document.body.className = 'font-sans'
        }
    }, [defaultFont])

    return (
        <div className='flex justify-center'>
            <Image
                src={defaultFont ? SecondLogo : SecondLogo_Sad}
                alt='Our cool second logo that cannot load :('
                width={widthSize}
                onClick={() => { setFont(!defaultFont) }}
                className='cursor-pointer mb-16'
            />
        </div>
    )
}
