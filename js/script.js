/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: `I don't stop when I'm done. I stop when I'm tired.`, 
    by: 'David Goggins'
  },
  {
    quote: `The fears we don't face become our limits`, 
    by: 'Robin Sharma'
  },
  {
    quote: `If people are doubting how far you can go, go so far you can't hear them anymore`, 
    by: 'Michele Ruiz'
  },
  {
    quote: `Make your life a masterpiece; imagine no limitations on what you can be, have or do.`, 
    by: 'Brian Tracy'
  },
  {
    quote: `If you're offered a seat on a rocket ship, don't ask what seat! Just get on.`, 
    by: 'Sheryl Sandberg'
  },
  {
    quote: `That's the beauty of argument, if you argue correctly, you're never wrong.`, 
    by: 'Christopher Buckley' 
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
let randomNumber = Math.floor(Math.random()*quotes.length);
let randomQuote = quotes[randomNumber].quote;
return randomQuote;
}


/***
 * `printQuote` function
***/

function printQuote() {
let html = '';
html += `<p>${getRandomQuote()}</p>`;
return html;
}
let html = printQuote() ;


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);