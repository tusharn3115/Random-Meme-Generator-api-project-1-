const meme = document.querySelector("#meme");
const title = document.querySelector("#title");
const btn = document.querySelector("#meme-btn");

// Meme API URL
const url = "https://meme-api.com/gimme/";

// Meme of different types
const subreddits = ["memes", "dankmemes", "me_irl"];

// Logic for generating random memes
const getMemes = async () => {
  try {
    const randomSubreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    const response = await fetch(url + randomSubreddit);
    const data = await response.json();
    console.log(data);

    // Display image and title on load
    meme.src = data.url;
    title.textContent = data.title;
  } catch (error) {
    console.error("Error fetching meme:", error);
    title.textContent = "Failed to load meme.";
  }
};

btn.addEventListener("click", getMemes);
window.addEventListener("load", getMemes);
