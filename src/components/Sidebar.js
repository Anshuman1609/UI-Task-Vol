import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-72 h-screen bg-custom-blue'>
            <button className='bg-custom-red text-white flex justify-between my-24 ml-2 w-56 pl-2 pr-5 pt-2 pb-2 rounded-lg border-2 border-r-4 border-b-4 border-black'>
                <span>
                    Orders
                </span>
                <span className="ml-2">&#62;</span>
            </button>
        </div>
    )
}

export default Sidebar