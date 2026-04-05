const imageElem = document.querySelector("img");
const imgLoadingElem = document.querySelector("#imgLoading");

console.log();

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    imageElem.src = data.message;
    imgLoadingElem.style.display = "none";
    imageElem.style.display = "block";
    console.log();
  });
