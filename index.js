const  quoteTxt = document.querySelector(".txt"),
button = document.querySelector("button"),
author = document.querySelector(".name .author")




const generate = () => {
button.innerText = "Loading... "
const quote  = 'https://api.quotable.io/random' 
fetch(quote)
.then(response => response.json())
.then(result =>{ 
    console.log(result)
    quoteTxt.innerHTML = result.content
    author.innerHTML = result.author
    button.innerText = "New Quote "

});
}
button.addEventListener('click', generate)
generate()

