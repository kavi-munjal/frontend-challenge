import React from 'react'
import CardGroups from './projectComponent';
import { Link } from 'react-router-dom'

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewCart: false,
      checkout: false
    }
  }

  render() {
    return (
      <div style={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        marginBottom: '1.5rem',
        borderRadius: '4px',
      }}>
      <h4>You've checked out! Thanks for using Penn Course Cart.</h4>
      <div>
      {this.props.cart.map((course) => {
        return (
          <div className="card container">
          <CardGroups course={course}/>
          </div>
        )
      })}
      </div>
      </div>
    )
  }
}

export default Checkout
