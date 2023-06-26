import { NextResponse } from "next/server";

export async function GET(request) {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const postsData = await posts.json();
    console.log(postsData);

    const images = await fetch("https://jsonplaceholder.typicode.com/photos");
    const imageData = await images.json();

    // let AllData = postsData.map((item, i) => Object.assign({}, item, imageData[i]));

    return NextResponse.json({ status: true, postsData, imageData });
}
