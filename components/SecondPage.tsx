import Link from "next/link";


export default function SecondPage() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className= 'text-6xl font-bold text-center '>
                Upcoming Shows/Music
            </h1>
            <br />
            <div className='flex justify-center md:gap-10'>
                <Link 
                    href='https://linktr.ee/offleash.mp3'
                    className='bg-main-color rounded-full w-16 h-16 flex items-center justify-center'>
                    LinkTree
                </Link>
                <Link
                    href='https://open.spotify.com/artist/0dFHANOUI4ZVoxOgVvgPjP?si=8IrmyJWjRL65UI5lxgDYWg'
                    className='bg-main-color rounded-full w-16 h-16 flex items-center justify-center'>
                    Spotify
                </Link>
                <Link 
                    href='https://www.instagram.com/offleash.mp3/'
                    className='bg-main-color rounded-full w-16 h-16 flex items-center justify-center'>
                    Insta
                </Link>
            </div>
            <br />
            <h3 className='md:text-xl text-center'>
                No Upcoming Shows :( <br />
                <br />
                BUTT, we are gathering up all our ingredients to cook up some new music for yall <br />
                <br />
                Visit our Socials for quicker updates!
            </h3>
            <br />
            <h3 className='md:text-xl text-center'>
                Need to contact us? Send us a DM on Instagram or email us at offleashbandmedia (at) gmail (dot) com!
            </h3>
        </div>
    )

}