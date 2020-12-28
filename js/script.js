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
    quote:"Nut milk is NOT milk.",
    author:"Anonymous User",
    citation:"Reddit",
    year:"2020",
    tag:"Internet"
  },
  {
    quote:"Talk is cheap. Show me the code.",
    author:"Linus Torvalds",
    year:"",
    tag:""
  },
  {
    quote:"You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author:"Steve Jobs",
    year:"",
    tag:"" 
  },
  {
    quote:"You donut!",
    author:"Gordon Ramsay",
    citation:"Hells Kitchen",
    year:"2010",
    tag:"TV"
  },
  {
    quote:"Programming in Basic causes brain damage.",
    author:"Edsger W. Dijkstra",
    year:"",
    tag:""
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let random = randomNumber(quotes.length);
  let randomQuote = quotes[random];
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote(){
  const quoteBox = document.getElementsByClassName("quote")[0];
  const sourceBox = document.getElementsByClassName("source")[0];
    
  let randomQuote = getRandomQuote();
  quoteBox.textContent = ""

  quoteBox.innerHTML = `${randomQuote.quote}`;
  sourceBox.innerHTML = `<span class="citation">${randomQuote.author}</span><span class="year">${randomQuote.year}</span><span class="tags">${randomQuote.tag}</span>`;
  randomColor();
}


// Additional Functions 
function randomNumber(max){
    let number = Math.floor(Math.random() * Math.floor(max))
    return number;
}

function randomColor(){
 let color = "#3ac162";
 let colorArr = [];
  for(let i = 0; i < 6; i++){
    colorArr.push(randomNumber(9));
  }
  color  = `#${colorArr.join("",)}`
  document.body.style.background = color;
}

function refreshQuote(){
  setInterval(printQuote, 10000);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


// Dont tell me how to live my life
refreshQuote();