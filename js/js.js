var quoteHtml = document.getElementById('quote');
var button = document.getElementById('button');


var quote = [
    // quote 1
    {
        quote: "Be yourself; everyone else is already taken.",
        auth: "Oscar Wilde",
    },

    // quote 2
    {
        quote: "Two things are infinite: the universe and human stupidity; and Im not sure about the universe.",
        auth: "Albert Einstein",
    },

    // quote 3
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        auth: "Dr. Seuss",
    },

    // quote 4
    {
        quote: "You only live once, but if you do it right, once is enough.",
        auth: "Mae West",
    },

    // quote 5
    {
        quote: "Be the change that you wish to see in the world.",
        auth: "Mahatma Gandhi",
    },

    // quote 6
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        auth: "Robert Frost",
    },

    // quote 7
    {
        quote: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        auth: "Albert Camus",
    },

    // quote 8
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        auth: "Mark Twain",
    },
    
    // quote 9
    {
        quote: 'Friendship ... is born at the moment when one man says to another <br>"What! You too? I thought that no one but myself . . .',
        auth: "C.S. Lewis, The Four Loves",
    },
    
    // quote 10
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        auth: "Oscar Wilde",
    }
];
var prevsquote ;
function quoteClick() {
    var quoteNum = Math.floor(Math.random() * 10);
    if (prevsquote && prevsquote !== quoteNum) {
        quoteHtml.innerHTML = `
        <p class=" mt-4 w-lg-50 w-100">"${quote[quoteNum].quote}"</p>
        <p class=" mt-4 w-lg-50 w-100">-- ${quote[quoteNum].auth}</p>
    `;
    } else if (prevsquote && prevsquote == quoteNum) {
        quoteNum = Math.floor(Math.random() * 10);
        quoteHtml.innerHTML = `
        <p class=" mt-4 w-lg-50 w-100">"${quote[quoteNum].quote}"</p>
        <p class=" mt-4 w-lg-50 w-100">-- ${quote[quoteNum].auth}</p>
    `;
    } else {
        quoteHtml.innerHTML = `
        <p class=" mt-4 w-lg-50 w-100">"${quote[quoteNum].quote}"</p>
        <p class=" mt-4 w-lg-50 w-100">-- ${quote[quoteNum].auth}</p>
    `;
    }
    prevsquote = quoteNum;
}
