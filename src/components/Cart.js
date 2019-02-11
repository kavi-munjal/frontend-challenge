import React from 'react'
import CardGroups from './projectComponent';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewCart: false,
      checkout: false
    }
  }

  render() {
    console.log(this.props.cart)
    return (
      <div style={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        marginBottom: '1.5rem',
        borderRadius: '4px',
      }}>
      <h4>Course Cart</h4>
{this.props.cart[0] ?
  <div>
  {this.props.cart.map((course,index) => {
    return (
      <div className="card container">
      <CardGroups course={course}/>
      <Button onClick={(e) => this.props.removeClass(index)}>Remove</Button>
      </div>
    )
  })}
  <Link to={'/checkout'}>Checkout</Link>
  </div>
  :
  <div>Course cart is empty, add some courses!</div>
}
        <Link to={'/'}>Return to courses</Link>
        <div></div>
      </div>
    )
  }
}

export default Cart
