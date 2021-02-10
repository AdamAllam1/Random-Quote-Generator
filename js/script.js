/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: `I don't stop when I'm tired. I stop when I'm done.`, 
    source: 'David Goggins'
  },
  {
    quote: `The fears we don't face become our limits`, 
    source: 'Robin Sharma',
    year: '5/7/2016'
  },
  {
    quote: `If people are doubting how far you can go, go so far you can't hear them anymore`, 
    source: 'Michele Ruiz'
  },
  {
    quote: `Make your life a masterpiece; imagine no limitations on what you can be, have or do.`, 
    source: 'Brian Tracy'
  },
  {
    quote: `If you're offered a seat on a rocket ship, don't ask what seat! Just get on.`, 
    source: 'Sheryl Sandberg'
  },
  {
    quote: `That's the beauty of argument, if you argue correctly, you're never wrong.`, 
    source: 'Nick Naylor',
    citation: 'Thank You For Smoking'
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
let randomNumber = Math.floor(Math.random()*quotes.length);
let randomQuote = quotes[randomNumber];
return randomQuote;
}


/***
 * `printQuote` function
***/

function printQuote() {
let html = '';

let theQuote = getRandomQuote();

html += `<p class="quote">${theQuote.quote}</p> 
<p class="source">${theQuote.source}</p>`;

document.getElementById("quote-box").innerHTML = html;
return html;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);