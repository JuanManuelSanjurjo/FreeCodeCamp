const btn = document.querySelector(".new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");


const quotes = [
    {
        quote: "Spit on your hands and get busy. Your blood will start circulating; your mind will start ticking—and pretty soon this whole positive upsurge of life in your body will drive worry from your mind. Get busy. Keep busy. It’s the cheapest kind of medicine there is on this earth—and one of the best. ",
        person: "Dale Carnegie"
    },
    {
        quote: "Study without desire spoils the memory, and it retains nothing that it takes in",
        person: "Leonardo Da vinci"
    },
    {
        quote: "Happiness is like a butterfly: the more you chase it, the more it will evade you, but if you notice the other things around you, it will gently come and sit on your shoulder.",
        person: "Henry David Thoreau"
    },
    {
        quote: "Imagine how you want to feel at the end of the day. Start working towards that now",
        person: "Lin-Manuel Miranda"
    },
    {
        quote: "The most effective form of learning is practice, not planning.",
        person: "James Clear"
    }
];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})