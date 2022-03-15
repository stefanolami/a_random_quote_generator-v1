/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Life is what happens when you're busy making other plans",
    source: "John Lennon"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "The important thing is not to stop questioning. Curiosity has its own reason for existence",
    source: "Albert Einstein",
    citation: "LIFE Magazine",
    year: "2 May 1955"
  },
  {
    quote: "Not only is the Universe stranger than we think, it is stranger than we can think",
    source: "Werner Heisenberg",
    tag: "#physics"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light",
    source: "Aristotle"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game",
    source: "Babe Ruth"
  }
]

/* function for random background-color */

const getRandomColor = () => {
  const randomColorNum = Math.floor(Math.random()*16777215).toString(16);
  const randomColor = `#${randomColorNum}`;
  return randomColor;
}

/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  const randomNumber = Math.floor((Math.random() * quotes.length));        //   returns a random number between 0 and 5
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/

const printQuote = () => {
  const quote = getRandomQuote();
  let quoteHTML = `<p class="quote"> ${quote.quote} </p><p class="source"> ${quote.source}`;
  if (quote.citation) {
    quoteHTML += `<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year) {
    quoteHTML += `<span class="year"> ${quote.year} </span>`
  }
  if (quote.tag) {
    quoteHTML += `<span class="tag"> ${quote.tag} </span>`
  }
  quoteHTML += '</p>';
  document.getElementById('quote-box').innerHTML = quoteHTML;
  document.querySelector('body').style.backgroundColor = getRandomColor();
}

setInterval(printQuote, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);