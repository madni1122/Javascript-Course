function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

// makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
//   makeHttpRequest(
//     "GET",
//     `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
//     (postsData) => {
//       makeHttpRequest(
//         "GET",
//         `https://dummyjson.com/comments/post/${postsData.posts[0].id}`,
//         (commentsData) => {
//           makeHttpRequest(
//             "GET",
//             `https://dummyjson.com/users/${commentsData.comments[0].user.id}`,
//             (userData) => {
//               console.log(userData);
//             },
//           );
//         },
//       );
//     },
//   );
// });

// function name(method, url) {
//   return fetch()
// }
debugger;
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((usersData) =>
    fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`),
  )
  .then((res) => res.json())
  .then((postsData) =>
    fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`),
  )
  .then((res) => res.json())
  .then((commentsData) =>
    fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`),
  )
  .then((res) => res.json())
  .then(console.log);
