import React from 'react'
import TableContent from './table/TableContent';
import { CiFilter } from 'react-icons/ci';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

const MainContent = () => {
    return (
        <div className='flex flex-col space-y-4 bg-custom-yellow w-full pl-5 pr-5 pt-10'>
            <span className='text-4xl font-bold mb-5'>Order details</span>
            <nav className='flex gap-32'>
                <input type="text" className='w-3/5 p-2 border-2 border-gray-400' placeholder="🔍 Search" />
                <button className='flex justify-between items-center text-xl bg-white gap-2 pl-6 pr-6 rounded-lg border-2 border-solid border-gray-300'>
                    <CiFilter /> Filter
                </button>
                <button className='flex justify-between items-center text-xl bg-white pl-2 pr-2 gap-6 rounded-lg border-2 border-solid border-gray-300n'>
                    <MdOutlineCalendarMonth /> Today <IoIosArrowDown />
                </button>
            </nav>
            <TableContent />
        </div>
    )
}

export default MainContent