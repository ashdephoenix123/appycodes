import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newData = await res.json();

    const res2 = await fetch("https://jsonplaceholder.typicode.com/photos");
    const newData2 = await res2.json();

    let AllData = newData.map((item, i) => Object.assign({}, item, newData2[i]));
    return AllData;
};

const page = async ({ params }) => {
    const data = await getData();
    const realData = data.filter((item) => {
        return item.id == params.id;
    });
    const fullData = realData[0];
    return (
        <div className="px-12 py-8 text-center">
            <Image
                src={fullData.url}
                width={500}
                height={500}
                className="w-full h-[40vh] object-cover"
                alt="imagehere"
            ></Image>
            <div className="text-center py-4">
                <h3 className="text-xl font-semibold">{fullData.title.toUpperCase()}</h3>
                <p className="py-4">{fullData.body}</p>
                <Link href={"/"} className="text-blue-600 text-sm underline inline-block">
                    Go back to Home Page
                </Link>
            </div>
        </div>
    );
};

export default page;
