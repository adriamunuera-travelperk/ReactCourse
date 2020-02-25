import React, {Component} from 'react'
import Card from './Card.js'
import axios from 'axios'

import { v4 as uuid } from 'uuid';

let token = ''
const API_ENDPOINT = 'https://deckofcardsapi.com/api/deck/'
const API_ENDPOINT_TOKEN = API_ENDPOINT + 'new/shuffle/'
const CARDS = '/draw/'


class CardDealer extends Component {
  state = {cards:[], API_STATUS:-1, token:'', remaining:52}

  componentDidMount() {
    axios.get(API_ENDPOINT_TOKEN).then(
      response => {
        console.log(response)
        this.setState({token: response.data.deck_id})
        this.setState({API_STATUS: response.status})
      }
    )
  }

  resetState = () => {
    this.setState({cards:[]})
  }

  drawCard = () => {
    if (this.state.API_STATUS == 200 && this.state.remaining > 0) {
      axios.get(API_ENDPOINT + this.state.token + CARDS).then(
        response => {
          if (!response) return
          console.log(response.data.remaining)
          this.setState({remaining: response.data.remaining})
          const card = response.data.cards[0]
          const newCard = {src: card.image, alt: card.value + ' of ' + card.suit}
          this.setState({cards: [...this.state.cards, newCard]})
        }

      )
    }
  }

  render() {
    return (<div>
              {this.state.remaining == 0 ? <h1> All cards dealed! </h1>: ''}
              <button onClick={this.drawCard} className='DealButton'>Draw card</button>
              <div className='CardDiv'>
                {this.state.cards.map(card => {
                  return <Card src={card.src} alt={card.alt} key={uuid()}/>
                })}
              </div>
            </div>)
  }
}

export default CardDealer
