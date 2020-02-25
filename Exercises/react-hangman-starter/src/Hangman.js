import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import {randomWord} from './words.js'

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord(), maxWrong: this.props.maxGuesses};
    this.handleGuess = this.handleGuess.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  isSubset = (firstSet, secondSet) => {
    if (firstSet.size > secondSet.size) return false;
    else {
        for (var elem of firstSet) {
            if (!secondSet.has(elem)) return false;
        }
    }
    return true;
  }


  /** generateButtons: return array of letter buttons to render */
  generateButtons = () => {
    if (this.state.nWrong >= this.props.maxWrong) {
      return (<div>
                <h2>YOU LOSE</h2>
                <p>The word was {this.state.answer}</p>
            </div>)

    } else if (this.isSubset(this.state.answer, this.state.guessed)) {
      return <h2>YOU WIN, CONGRATULATIONS</h2>
    } else {
      return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
        <button
          value={ltr}
          key={ltr}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(ltr)}
        >
          {ltr}
        </button>
      ));
    }
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={this.state.guessed.size.toString()+'/'+this.state.maxWrong.toString()}/>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p> Number of wrong: {this.state.nWrong}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>
      </div>
    );
  }
}


export default Hangman;
