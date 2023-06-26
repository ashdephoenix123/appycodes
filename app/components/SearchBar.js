"use client";

import React, { useState } from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchbar = (e) => {
        const { value } = e.target;
        setSearchInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={handleSearchbar}
                    className="border border-black mx-6 my-4 rounded"
                    placeholder="Search"
                />
            </form>
        </>
    );
};

export default SearchBar;
