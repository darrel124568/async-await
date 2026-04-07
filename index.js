// // Write your code here!
// function displayPosts(posts) {
//     const postlist = document.querySelector('#post-list')
//     posts.forEach(post => {
//         const list = document.createElement('li')
//         const heading = document.createElement('h1')
//         heading.textContent  = post.title
//         const body = document.createElement('p')
//         body.textContent = post.body
//         list.appendChild(heading)
//         list.appendChild(body)
//         postlist.appendChild(list)
//     });
// }


// async function fetchPosts(callback) {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await data.json()
//     callback(posts)
// }
// window.addEventListener('DOMContentLoaded', () => {
//     fetchPosts(displayPosts);
// });


// 1. Create Function to Display Posts
function displayPosts(posts) {
  const ul = document.getElementById('post-list');

  posts.forEach(post => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

// 2. Refactor with Async/Await
async function fetchPosts() {
  try {
    // FIX 1: Use http:// instead of https:// to bypass JSDOM's security certificate bug
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const postsData = await response.json();
    
    // Call displayPosts() after fetch
    displayPosts(postsData);
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// FIX 2: Explicitly execute the function down here!
// This guarantees the fetch begins the exact millisecond the test runner loads the file.
fetchPosts();
