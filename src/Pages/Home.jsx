import React from 'react'
import Banner from '../Components/Banner'
import AboutImg from '../assets/image 6.png'
import BodyContent from '../Components/BodyContent'
import Form from '../Components/form'
import Card from '../Components/card'
import Services from '../Components/services'
import Satisfaction from '../Components/satisfaction'
import ContactImg from '../assets/Rectangle 8.jpg'
import Footer from '../Components/footer'

function Home() {
    return (
        <div>
            <Banner />
            {/* About section */}
            <div>
                <BodyContent title="About us">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                        <div className="">
                            <img className='pl-20' src={AboutImg} alt="" />
                        </div>
                        <div className="">
                            <p className=' pt-20 pr-15 text-2xl'>We are a specialized team committed to providing reliable car rental services. One of the advantages of renting a car from us is offering competitive and transparent prices. By providing services such as comprehensive insurance ......</p>
                            <p className='text-orange-500 text-2xl mt-5'>Read More</p>
                        </div>
                    </div>
                </BodyContent>
            </div>

            {/* Book Now Section */}
            <div className='lg:p-10 bg-orange-100'>
                <BodyContent title="Book Now">
                   <div>
                     <Form/>
                   </div>
                </BodyContent>
            </div>

            {/* Our Featured Cars */}
            <div>
                <BodyContent title="Our Featured Cars">
                    <Card />
                </BodyContent>
            </div>

            {/* Our premium Services */}
            <div className='lg:p-20'>
                <BodyContent title="Our Premium Services">
                    <p>Carent is a reputable car rental company that offers a wide range of useful services for every taste.</p>
                    <Services />
                </BodyContent>
            </div>

            {/* Satisfaction */}
            <div>
                <Satisfaction />
            </div>

            {/* Contact Us */}
            <div className='lg:p-20'>
                <BodyContent title="Contact Us">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                        <div className="">
                            <form action="">
                                <label htmlFor="Email" className="relative">
                                    <input
                                        type="email"
                                        id="Email"
                                        placeholder=""
                                        className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                    />

                                    <span
                                        className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                    >
                                        Email
                                    </span>
                                </label>
                                <label htmlFor="Email" className="relative">
                                    <input
                                        type="email"
                                        id="Email"
                                        placeholder=""
                                        className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                    />

                                    <span
                                        className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                    >
                                        Email
                                    </span>
                                </label>
                                <label htmlFor="Email" className="relative">
                                    <input
                                        type="email"
                                        id="Email"
                                        placeholder=""
                                        className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                    />

                                    <span
                                        className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                    >
                                        Email
                                    </span>
                                </label>
                            </form>
                        </div>
                        <div className="">
                            <img src={ContactImg} alt="" />
                        </div>
                    </div>
                </BodyContent>
            </div>

            <Footer />

        </div>
    )
}

export default Home
