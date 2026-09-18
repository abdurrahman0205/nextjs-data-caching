import React from 'react';

//Another method of data load/fetch in SSC
// const postPromise = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//   return res.json();
// }

/**
 * GET:
 * POST:
 * UPDATE: put, patch
 * DELETE:
 * 
*/

//Basic formate/system

const getPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  return res.json();
}

//!res.ok, throw new Error
// const getPost = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts")
//   }

//   return res.json();
// }


//try,catch,finally
// const getPost = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//     return res.json();
//   } catch(error) {
//         throw new Error("Failed to fetch posts")
//   } finally {
//         console.log("Finished.");
//   }
// }


const PostPage = async () => {

  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const posts = await res.json();

  const posts = await getPost();

  return (
    <div>
      <h1>Total posts: {posts.length}</h1>
    </div>
  );
};

export default PostPage;