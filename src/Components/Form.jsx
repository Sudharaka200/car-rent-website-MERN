import React from 'react'

function Form() {
    return (
        <div>
            <form action="">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="">
                        <label htmlFor="Email">
                            <span className="text-sm font-medium text-gray-700"> Email </span>

                            <input
                                type="email"
                                id="Email"
                                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className="">
                        <label htmlFor="Email">
                            <span className="text-sm font-medium text-gray-700"> Email </span>

                            <input
                                type="email"
                                id="Email"
                                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className="">
                        <label htmlFor="Email">
                            <span className="text-sm font-medium text-gray-700"> Email </span>

                            <input
                                type="email"
                                id="Email"
                                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                    <div className="">
                        <label htmlFor="Email">
                            <span className="text-sm font-medium text-gray-700"> Email </span>

                            <input
                                type="email"
                                id="Email"
                                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className="">
                        <label htmlFor="Email">
                            <span className="text-sm font-medium text-gray-700"> Email </span>

                            <input
                                type="email"
                                id="Email"
                                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className="">
                        <label htmlFor="Email">
                            <span className="text-sm font-medium text-gray-700"> Email </span>

                            <input
                                type="email"
                                id="Email"
                                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className="">
                        <button type='submit' className='bg-orange-400 pt-2 pb-2 pl-5 pr-5 mt-5 rounded-md'> Book Now</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
