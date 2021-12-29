const quotes = [
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King, Jr",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson",
    },

]

const randomQuote = Math.floor(Math.random() * quotes.length)
const todaysQuote = quotes[randomQuote]
console.log(todaysQuote)

const quoteElement = document.querySelector("#quote span:first-child")
const authorElement = document.querySelector("#quote span:last-child")


quoteElement.innerText = todaysQuote.quote
authorElement.innerText = todaysQuote.author