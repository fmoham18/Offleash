import Logo from '../public/NEW OL Logo (transparent).png' 
import Image from 'next/image'

export default function NavBar() {
    return (
        <div className='grid grid-cols-3 items-center h-16 bg-main-color'>
            <div className='justify-self-left md:hidden'>
                Goods
            </div>

            <div className='hidden md:flex md:justify-self-end md:gap-20 text-black'>
                <button>
                    Merch
                </button>
                <button>
                    Shows/Music
                </button>
            </div>
            <Image 
                src={Logo}
                alt="Our cool logo that cannot load :("
                width={64}
                className='justify-self-center'
            />
            <button className='hidden md:block md:justify-self-start md:text-black'>
                Contact Us
            </button>
        </div>
    )

}
