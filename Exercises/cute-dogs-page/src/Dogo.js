import React, {Component} from 'react'
import {Button, Card, Container, Row} from 'react-bootstrap'
import {Redirect, withRouter} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

class Dogo extends Component {

  goBack = () => this.props.history.goBack()

  render() {
    console.log(this.props)
    const dog = this.props.dog
    if (!dog) return <Redirect to='/dogs/'/>
    const age = dog.age
    const name = dog.name
    const src = dog.src
    const facts = dog.facts
    return (<Container>
              <Row>
                <Card style={{ width: '30rem', margin: '0 auto', float: 'none', marginTop:'5vh'}}>
                  <Card.Img variant="top" src={src} />
                  <Card.Body>
                    <Card.Title>{name}, {age}</Card.Title>
                    {facts.map(fact => <Card.Text key={uuid()}> {fact} </Card.Text>)}
                    <Button variant="primary" onClick={this.goBack}>Go back</Button>
                  </Card.Body>
                </Card>
              </Row>
            </Container>)
  }
}

export default withRouter(Dogo)
