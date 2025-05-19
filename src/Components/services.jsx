import React from 'react'

const services = () => {

    const card = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg",
            name: 'text1',
            description: '20',
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg",
            name: 'text1',
            description: '20',
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg",
            name: 'text1',
            description: '20',
        },

    ]
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

                    <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {card.map((services, index) => (
                            <li>
                                <a href="#" className="block">
                                    <img
                                        key={index}
                                        alt=""
                                        src={services.img}
                                        className="h-64 w-full object-cover sm:h-80 lg:h-96"
                                    />

                                    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{services.name}</h3>

                                    <p className="mt-2 max-w-sm text-gray-700">
                                        {services.description}
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default services
