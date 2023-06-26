// "use client";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

// import { useEffect, useState } from "react";
// import Card from "./components/Card";

// export default async function Home() {
//     const [posts, setPosts] = useState([]);
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch("/api/getAllData");
//             const data = await res.json();
//             console.log(res);
//             const { postsData, imageData } = data;
//             // if (data.status) {
//             //     setPosts(postsData);
//             //     setImages(imageData);
//             // }
//         };
//         fetchData();
//     }, []);

//     console.log(posts, images);

//     return (
//         <>
//             <main className="min-h-screen">
//                 <h1>Blog Cards</h1>
//                 {/* <Card posts={allData}/> */}
//             </main>
//         </>
//     );
// }

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newData = await res.json();

    const res2 = await fetch("https://jsonplaceholder.typicode.com/photos");
    const newData2 = await res2.json();

    let AllData = newData.map((item, i) => Object.assign({}, item, newData2[i]));
    return AllData;
};

export default async function Home() {
    const data = await getData();

    return (
        <>
            <main className="min-h-screen">
                <h1 className="text-xl font-semibold text-center">Blog Cards</h1>
                {/* <SearchBar /> */}
                <Card allData={data} />
            </main>
        </>
    );
}
