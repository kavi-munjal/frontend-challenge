import React from 'react'
import { Card } from 'semantic-ui-react'



class CardGroups extends React.Component {


  render() {

    return (
      <Card.Group itemsPerRow={3} >
        <Card className="cardItem" raised>
          <Card.Content>
            <Card.Header>{this.props.course.dept + ' ' + this.props.course.number}</Card.Header>
            <Card.Description>
              {this.props.course.title}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}


export default CardGroups
