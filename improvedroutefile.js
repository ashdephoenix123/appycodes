// import { NextResponse } from "next/server";

// export async function GET(request) {
//   const postsURL = 'https://jsonplaceholder.typicode.com/posts';
//   const photosURL = 'https://jsonplaceholder.typicode.com/photos';

//   try {
//     const postsResponse = await fetch(postsURL);
//     const photosResponse = await fetch(photosURL);

//     const posts = await postsResponse.json();
//     const photos = await photosResponse.json();

//     const updatedPosts = posts.map(post => {
//       const correspondingPhoto = photos.find(photo => photo.id === post.id);
//       return {
//         ...post,
//         url: correspondingPhoto ? correspondingPhoto.url : null
//       };
//     });

//     return NextResponse.json({ status: true, data: updatedPosts });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return NextResponse.error();
//   }
// }


import { NextResponse } from "next/server";

export async function GET(request) {
  const postsURL = 'https://jsonplaceholder.typicode.com/posts';
  const photosURL = 'https://jsonplaceholder.typicode.com/photos';

  try {
    const postsResponse = await fetch(postsURL);
    const photosResponse = await fetch(photosURL);

    const posts = await postsResponse.json();
    const photos = await photosResponse.json();

    const photoMap = {};
    for (const photo of photos) {
      photoMap[photo.id] = photo;
    }

    const updatedPosts = posts.map(post => {
      const correspondingPhoto = photoMap[post.id];
      return {
        ...post,
        url: correspondingPhoto ? correspondingPhoto.url : null
      };
    });

    return NextResponse.json({ status: true, data: updatedPosts });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.error();
  }
}
