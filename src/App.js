import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: "I don't care that they stole my idea. I care that they don't have any of their own.",
          author: "-Nikola Tesla"
        },
        {
          quote: "Imagination is more important than knowledge.",
          author: "-Albert Einstein"
        },
        {
          quote: "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
          author: "-Maurice Switzer"
        },
        {
          quote: "You must be the change you wish to see in the world.",
          author: "-Mahatma Gandhi"
        },
        {
          quote: "Don’t cry because it’s over, smile because it happened.",
          author: "-Dr Suess"
        },
        {
          quote: "If you want something done right, do it yourself.",
          author: "-Charles-Guillaume Étienne"
        },
        {
          quote: "The unexamined life is not worth living.",
          author: "-Socrates"
        },
        {
          quote: "Better to have loved and lost, than to have never loved at all.",
          author: "-St Augustine"
        },
        {
          quote: "In three words I can sum up everything I’ve learned about life: it goes on.",
          author: "-Robert Frost"
        },
        {
          quote: "Necessity is the mother of invention.",
          author: "-Plato"
        },
        {
          quote: "To err is human; to forgive, divine.",
          author: "-Alexander Pope"
        },
        {
          quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
          author: "-Mark Twain"
        },
        {
          quote: "With great power comes great responsibility.",
          author: "-Voltaire"
        },
        {
          quote: "Believe you can and you’re halfway there.",
          author: "-Theodore Roosevelt"
        },
        {
          quote: "Familiarity breeds contempt.",
          author: "-Aesop"
        },
        {
          quote: "It is always darkest just before the dawn.",
          author: "-Thomas Fuller"
        },
        {
          quote: "Leadership and learning are indispensable to each other.",
          author: "-John F. Kennedy"
        },
        {
          quote: "The ballot is stronger than the bullet.",
          author: "-Lincoln"
        },
        {
          quote: "Whether you think you can or think you can’t – you are right.",
          author: "-Henry Ford"
        },
        {
          quote: "A penny saved is a penny earned.",
          author: "-Benjamin Franklin"
        },
        {
          quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
          author: "-Ralph Waldo Emerson"
        },
        {
          quote: "Ignorance is bliss.",
          author: "-Thomas Gray"
        },
        {
          quote: "Without music, life would be a mistake.",
          author: "-Friedrich Nietzsche"
        },
        {
          quote: "No one can make you feel inferior without your consent.",
          author: "-Eleanor Roosevelt"
        },
        {
          quote: "Dream as if you’ll live forever. Live as if you’ll die today.",
          author: "-James Dean"
        },
        {
          quote: "If at first you don’t succeed, try, try, try again.",
          author: "-William Edward Hickson"
        },
        {
          quote: "I think therefore I am.",
          author: "-Descartes"
        },
        {
          quote: "You only live once, but if you do it right, once is enough.",
          author: "-Mae West"
        },
        {
          quote: "Nothing is certain except for death and taxes.",
          author: "-Christopher Bullock"
        },
        {
          quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
          author: "-Winston Churchill"},
      ],
      randomQuote: {}
    }
  }

  newQuote() {
    const randomQuote = this.state.quotes[Math.floor(Math.random() * 30)]
    this.setState({randomQuote})
  }

  componentDidMount() {
    this.newQuote()
  }

  render() {
    return (
      <div id="quote-box" class="App">
        <div class="main">
          <h1 id="text">"{this.state.randomQuote.quote}"</h1>
          <h2 id="author">{this.state.randomQuote.author}</h2>
        </div>
        <div class="main">
          <button id="new-quote" class="btn btn-default" type="button" name="button" onClick={() => this.newQuote()}>Another quote?</button>
        </div>
        <div class="main">
          <a href={`https://twitter.com/intent/tweet?text="${this.state.randomQuote.quote}" ${this.state.randomQuote.author}`}><button id="tweet-quote" class="btn btn-default" type="button" name="button">Tweet this!</button></a>
        </div>
        <footer>
          <h4><em>by Milan V. Kecojević</em></h4>
        </footer>
      </div>
    )
  }
}

export default App
