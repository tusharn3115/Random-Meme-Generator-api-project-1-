let meme = document.querySelector('#meme')
let title = document.querySelector('#title')
let btn = document.querySelector('#meme-btn')

// meme api url
let url = "https://meme-api.com/gimme"

// meme of different types
let memeArr = ["catmemes", "dankmemes", "dogmemes", "wholesomemes", "m_irl"]


// logic for generating random memes
let getMemes = () => {
    let randomMemes = memeArr[Math.floor(Math.random()*memeArr.length)]
    console.log(randomMemes);
    
}


btn.addEventListener('click', getMemes)
window.addEventListener('load', getMemes)