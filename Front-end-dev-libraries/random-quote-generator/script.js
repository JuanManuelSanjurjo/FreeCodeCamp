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

const colors = ["#B799FF", "#ACBCFF", "#AEE2FF", "#E6FFFD"];


$(document).ready(function() {

function randomize(){
    return  Math.floor(Math.random() * quotes.length);
}
function randomizeColor(){
    return  Math.floor(Math.random() * colors.length);
}



$("#new-quote").on("click", function(){
    let random = quotes[randomize()];
    let randomColor = colors[randomizeColor() +1];

    $("#text").text(random.quote);
    $("#author").text(random.person);
    $("body").css("background-color",randomColor).css("transition", "0.5s");
  
})



});