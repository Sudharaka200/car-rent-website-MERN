import React from 'react'

const card = () => {

    const card = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg",
            name: 'text1',
            price: '20',
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg",
            name: 'text1',
            price: '20',
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg",
            name: 'text1',
            price: '20',
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg",
            name: 'text1',
            price: '20',
        },
    ]


    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {card.map((card,index) => (
                            <li>
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    key = {index}
                                    src={card.img}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        {card.name}
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900">{card.price}</span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default card
