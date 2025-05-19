import React from 'react'
import Navbar from '../Components/Navbar'
import BackgroundImg from '../assets/Group 21.png'
import BannerImg from '../assets/image 5.png'

function Banner() {
    return (
        <>
            <div className='bg-cover bg-center' style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <Navbar />

                <div className='lg:p-20'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="">
                            <h1>Enjoy your life with our comfortable cars.</h1>
                            <p>Carent, is ready to serve the best experience in car rental.</p>
                            <button>Explore Now</button>
                        </div>
                        <div className=" lg:col-span-2">
                            <img src={BannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
