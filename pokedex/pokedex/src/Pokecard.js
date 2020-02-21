import React, {Component} from 'react'


class Pokecard extends Component {
  render() {
    const name = this.props.name
    const imageURL = this.props.imageURL
    const type = this.props.type
    const experience = this.props.experience
    return (<div className = "Pokecard">
              <img src={imageURL}><br/>
              <h3> {name} </h3><br/>
              <p> Type: {type} </p><br/>
              <p> EXP: {experience} </p>
            </div>)
  }
}

export default Pokecard;
