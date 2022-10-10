const quotes = [
  {
    content:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "...Mother Teresa",
  },
  {
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "...Nelson Mandela",
  },
  {
    content:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking",
    author: "...Steve Jobs",
  },
  {
    content: "The way to get started is to quit talking and begin doing.",
    author: "...Walt Disney",
  },
  {
    content:
      "Don't judge each day by the harvest you reap but by the seeds that you plant",
    author: "...Robert Louis Stevenson",
  },
  {
    content:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    author: "...Benjamin Franklin",
  },
  {
    content: "Whoever is happy will make others happy too.",
    author: "...Anne Frank",
  },
  {
    content:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "...Margaret Mead",
  },
  {
    content:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "...Abraham Lincoln",
  },
  {
    content:
      "Never let the fear of striking out keep you from playing the game. ",
    author: "...Babe Ruth",
  },
  {
    content:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "...Thomas A. Edison",
  },
  {
    content: "Only a life lived for others is a life worthwhile.",
    author: "...Albert Einstein",
  },
  {
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "...Nelson Mandela",
  },
  {
    content: "Life is a long lesson in humility. ",
    author: "...James M. Barrie",
  },
  {
    content: "The purpose of our lives is to be happy.",
    author: "...Dalai Lama",
  },
  {
    content:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "...Thomas A. Edison",
  },
];

let quote = document.getElementById("quote");
let author = document.getElementById("author");

window.addEventListener("load", (e) => {
  e.preventDefault();
  let randomQuote = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[randomQuote].content;
  author.innerHTML = quotes[randomQuote].author;
});
