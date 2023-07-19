var quote = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        name: "― Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        name: "― Marilyn Monroe"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        name: "― Albert Einstein"
    },    
    {
        quote: "“So many books, so little time.”",
        name: "― Frank Zappa"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        name: "― Marcus Tullius Cicero"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        name: "― Bernard M. Baruch"
    },
    {
        quote: "Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
        name: "― William W. Purkey"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        name: "― Dr. Seuss"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        name: "― Mae West"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        name: "― Mahatma Gandhi"
    }
];




var x = null;

function getQuotes() {

    var randomQuote = quote[Math.floor(Math.random() * quote.length)];

    // document.getElementById('demo').innerHTML =`
    //   <h2>${randomQuote.quote}</h2>
    //   <h3>${randomQuote.name}</h3>
    //  `;

    if(randomQuote != x || x == null) {
        x = randomQuote;
        console.log(x);
        document.getElementById('demo').innerHTML = `
    <div class="content">
    <div class="quote-area">
      <i class="fas fa-quote-left"></i>
      <p class="quote">${randomQuote.quote}</p>
      <i class="fas fa-quote-right"></i>
    </div>
    <div class="author">
      <span class="name">${randomQuote.name}</span>
    </div>
  </div>
    `
    }else{
        console.log(x);
        getQuotes();
      };
    
};