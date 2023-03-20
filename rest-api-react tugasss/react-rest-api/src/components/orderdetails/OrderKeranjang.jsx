
    import axios from "axios";
    import { useEffect, useContext, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import SkillContext from "../../Context/SkillContext";

    export const OrderKeranjang = () => {
    const { orders, order } = useContext(SkillContext);
    const navigate = useNavigate();

    const [counter, setCounter] = useState(0);

    const tambah = () => {
        setCounter(counter + 1);
    };    

        const kurang = () => {
        setCounter(counter - 1);
        if (counter <= 0) {
            window.location.reload();
        }
    };
    console.log(order)

    const checkout = () => {
        let data = {
        idpelanggan: order.id,
        pelanggan: order.pelanggan,
        alamat : order.alamat,
        idbarang: orders.id,
        barang: orders.title,
        jumlah: counter,
        harga: orders.price,
        };

        axios.post("order", data);
        navigate("/");
    };

    useEffect(() => {}, []);
    return (
        <div className="mt-12">
        <div className="m-2 flex justify-end p-2">
        </div>
        <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" className="px-6 py-3">
                    Id product
                </th>
                <th scope="col" className="px-6 py-3">
                    Id pelanggan
                </th>
                <th scope="col" className="px-6 py-3">
                    pelanggan
                </th>
                <th scope="col" className="px-6 py-3">
                    Alamat
                </th>
                <th scope="col" className="px-6 py-3">
                    Barang
                </th>
                <th scope="col" className="px-6 py-3">
                    jumlah
                </th>
                <th scope="col" className="px-6 py-3">
                    Harga
                </th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td className="px-6 py-4">{orders.id}</td>
                    <td className="px-6 py-4">{order.id}</td>
                    <td className="px-6 py-4">{order.pelanggan}</td>
                    <td className="px-6 py-4">{order.alamat}</td>
                    <td className="px-6 py-4">{orders.title}</td>
                    <td className="px-6 py-4">
                        <button onClick={kurang}
                            className = "rounded-md bg-red-500 px-4 py-2 text-white hover:bg-white-700"
                        >
                            -   
                        </button>
                        {counter}
                        <button 
                            onClick={tambah}
                            className = "rounded-md bg-green-500 px-4 py-2 text-white hover:bg-white-700"
                        >
                            +
                        </button>
                    </td>
                    <td className="mt-5 flex text-center space-x-2">${orders.price * counter}</td>
                </tr>
            </tbody>
            </table>
            <div className="mt-5 justify-center spacep-x-2">
            <button
                    onClick={checkout}
                    className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-red-700"
                    >
                    checkout
                    </button>
            </div>
        </div>
        </div>
    );
    };