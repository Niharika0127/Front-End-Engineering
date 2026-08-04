let url = "https://dummyjson.com/quotes/random";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getQuote);

async function getQuote() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        quote.textContent = data.quote;
        author.textContent = "- " + data.author;
    }
    catch (error) {
        console.log(error);
        quote.textContent = "Unable to fetch quote.";
        author.textContent = "";
    }
}