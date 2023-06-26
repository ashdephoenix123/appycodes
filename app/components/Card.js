"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ allData }) => {
    const [newData, setNewData] = useState(allData);
    const [searchInput, setSearchInput] = useState("");

    const handleSearchbar = (e) => {
        const { value } = e.target;
        setSearchInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let a = allData.filter((item, index) => {
            return item.title.includes(searchInput);
        });
        setNewData(a);
    };
    return (
        <section className="px-6 py-4">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={handleSearchbar}
                    className="border border-black my-4 rounded px-2"
                    placeholder="Search"
                />
            </form>
            <div className="parent">
                {newData?.map((item) => {
                    return (
                        <div className="child relative" key={item.id}>
                            <Image
                                src={item.url}
                                width="500"
                                height="500"
                                alt="Image1"
                                className="w-full h-[150px] object-cover"
                            ></Image>
                            <h3 className="px-3 py-2 font-semibold">{item.title.toUpperCase()}</h3>
                            <p className="px-3 py-2">{item.body}</p>
                            <Link
                                href={item.id.toString()}
                                className="bg-blue-500 text-white py-2 px-1 rounded my-2 mx-3 inline-block"
                            >
                                Read More
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Card;
