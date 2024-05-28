import React from 'react';
import "./table.css"
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const TableContent = () => {
    const data = [
        {
            orderId: "TBM1234567",
            tableNo: "1",
            customerName: "Nanice Casale",
            orderType: "Dine In",
            orderStatus: "Order Updated",
            payment: "Paid",
            orderDate: "19 Dec 2022 06:28 PM",
        },
        {
            orderId: "TBM1234568",
            tableNo: "2",
            customerName: "Tim Mante",
            orderType: "Delivery",
            orderStatus: "New Order",
            payment: "Un-Paid",
            orderDate: "19 Dec 2022 06:28 PM",
        },
        {
            orderId: "TOM1234569",
            tableNo: "a",
            customerName: "Anatol Lambertazzi",
            orderType: "Take Away",
            orderStatus: "New Order",
            payment: "Un-Paid",
            orderDate: "19 Dec 2022 06:28 PM",
        },
        {
            orderId: "TBM1334667",
            tableNo: "4",
            customerName: "Nanice Casale",
            orderType: "Dine In",
            orderStatus: "Order Updated",
            payment: "Paid",
            orderDate: "19 Dec 2022 06:28 PM",
        },
        {
            orderId: "TBM1234567",
            tableNo: "5",
            customerName: "Olga Gaylord",
            orderType: "Delivery",
            orderStatus: "New Order",
            payment: "Un-Paid",
            orderDate: "19 Dec 2022 06:28 PM",
        },
        {
            orderId: "TOM1234568",
            tableNo: "6",
            customerName: "Anatal Lambertazzi",
            orderType: "Take Away",
            orderStatus: "New Order",
            payment: "Paid",
            orderDate: "19 Dec 2022 06:28 PM",
        },
        {
            orderId: "TEM1234669",
            tableNo: "7",
            customerName: "Nanice Casale",
            orderType: "Dine In",
            orderStatus: "Order Updated",
            payment: "Paid",
            orderDate: "19 Dec 2022 06:28 PM",
        },
        {
            orderId: "TOM1234562",
            tableNo: "8",
            customerName: "Crystal Rolfson",
            orderType: "Delivery",
            orderStatus: "New Order",
            payment: "Un-Paid",
            orderDate: "19 Dec 2022 06:28 PM",
        },
        {
            orderId: "T8M1234564",
            tableNo: "9",
            customerName: "Anatol Lambertazzi",
            orderType: "Take Away",
            orderStatus: "New Order",
            payment: "Paid",
            orderDate: "19 Dec 2022 06:26 PM",
        }
    ];


    return (
        <div className="overflow-x-auto">
            <table className="custom-table table border-2 border-spacing-6 border-gray-500 w-full bg-white">
                <thead className="thead-dark">
                    <tr className=' text-justify border-b-2 border-gray-300'>
                        <th>Order ID</th>
                        <th>Table No</th>
                        <th>Customer Name</th>
                        <th className='flex items-center gap-1'>
                            <span>
                                Order Type
                            </span>
                            <IoMdArrowDropdown />
                        </th>
                        <th>
                            Order Status
                        </th>
                        <th>Payment</th>
                        <th>Order Date</th>
                        <th>View Order</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr className='border-b-2 border-gray-200' key={index}>
                            <td className='text-blue-600' >{row.orderId}</td>
                            <td>{row.tableNo}</td>
                            <tdv className="font-semibold">{row.customerName}</tdv>
                            <td className={`${index % 3 === 0 ? "text-blue-600" : (index % 3 === 1) ? "text-red-500" : "text-yellow-400"}`}>{row.orderType}</td>
                            <td >
                                <span className={` rounded-lg pl-2 pt-1 pb-1 pr-2 ${index % 3 === 0 ? "bg-purple-300 text-purple-600" : "bg-orange-300 text-orange-600"}`}>
                                    {row.orderStatus}
                                </span>
                            </td>
                            <td>
                                <span className={` rounded-lg pl-2 pt-1 pb-1 pr-2 ${row.payment === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                    {row.payment}
                                </span>
                            </td>
                            <td>{row.orderDate}</td>
                            <td>
                                <a href={`https://example.com/order/${row.orderId}`} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default TableContent;
