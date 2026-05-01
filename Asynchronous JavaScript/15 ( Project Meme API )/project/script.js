const generateBtn = document.querySelector(".generate-btn");
async function getMeme() {
  const res = await fetch("https://meme-api.com/gimme/wholesomememes");
  const data = await res.json();
  updateDOM(data);
}

function updateDOM({ title, url, author }) {
  document.querySelector("#title").innerText = title;
  document.querySelector("#memeImage").src = url;
  document.querySelector("#author").innerText = `Meme by: ${author}`;
}
debugger;
getMeme();
console.log(getMeme());
generateBtn.addEventListener("click", () => {
  getMeme();
});
