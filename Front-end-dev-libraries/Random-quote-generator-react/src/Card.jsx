import { useState } from "react";


const quotes = [
  {
      text: "Spit on your hands and get busy. Your blood will start circulating; your mind will start ticking—and pretty soon this whole positive upsurge of life in your body will drive worry from your mind. Get busy. Keep busy. It’s the cheapest kind of medicine there is on this earth—and one of the best. ",
      person: "Dale Carnegie"
  },
  {
      text: "Study without desire spoils the memory, and it retains nothing that it takes in",
      person: "Leonardo Da vinci"
  },
  {
      text: "Happiness is like a butterfly: the more you chase it, the more it will evade you, but if you notice the other things around you, it will gently come and sit on your shoulder.",
      person: "Henry David Thoreau"
  },
  {
      text: "Imagine how you want to feel at the end of the day. Start working towards that now",
      person: "Lin-Manuel Miranda"
  },
  {
      text: "The most effective form of learning is practice, not planning.",
      person: "James Clear"
  },
  {
      text: "Be yourself; everyone else is already taken.",
      person: "Oscar Wilde"
  }
  ,
  {
      text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      person: "Marilyn Monroe"
  }
  ,
  {
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      person: "Albert Einstein"
  }
  ,
  {
      text: "So many books, so little time.",
      person: "Frank Zappa"
  }
  ,
  {
      text: "A room without books is like a body without a soul.",
      person: "Marcus Tullius Cicero"
  }
  ,
  {
      text: "To live is the rarest thing in the world. Most people exist, that is all.",
      person: "Oscar Wilde"
  }
  
];

const colors = ["#FAAB78", "#ABC270", "#D7E9B9","#F3DEBA", "#98EECC", "#FFD56B"];


const Card = () => {
  const [quote, setQuote] = useState({text: "A lo Hecho Pecho",person: "Homero"});
  let [color,setColor] = useState("#FFD56B");


  const randomizeColor = () => {
    return  Math.floor(Math.random() * colors.length);
  }
  const randomQuote= ()=> {
    let random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
    let randomColor = colors[randomizeColor()];
    setColor(randomColor);
  }

  return (
    <div className="card"  id="quote-box" style={{backgroundColor: color, transition: "0.5s"}}>
      <p id="text">{quote.text}</p>
      <h2 id="author">{quote.person}</h2>
      <button id="new-quote" onClick={randomQuote}>New Quote</button>
      <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote" className="fa-brands fa-twitter"> tweet</a>
    </div>
  );

}

export default Card;