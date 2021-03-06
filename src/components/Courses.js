import React from 'react'
import courses from '../data/courses'
import { Redirect } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react'
import CardGroups from './projectComponent';

class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewCart: false,
      checkout: false,
      search: ''
    }
  }

  searchCourse(course) {
    var num = course.number + ''
    return (num.indexOf(this.state.search) !== -1) ||
    (course.description.toLowerCase().indexOf(this.state.search) !== -1) ||
    (course.title.toLowerCase().indexOf(this.state.search) !== -1)
  }

  render() {
  if (this.state.viewCart) { return <Redirect to='/cart'/>}
  if (this.state.checkout) { return <Redirect to='/checkout'/>}
  if (this.props.selectedClass.dept) { return <Redirect to='/course'/>}
  var search = courses.filter(course => this.searchCourse(course))
    return (
    <div className="viewport">
        <div className="user grid">

          <div className="left col">
            <div>
              <Button style={{backgroundColor:"#82ecff", marginBottom: "2em", marginLeft: "1em", color: "black"}} textAlign="center" className='hvr-underline-from-left'
              onClick={(e) => this.setState({ viewCart: true })}>
                <h2>View Cart ({this.props.cart.length})</h2>
              </Button>
            </div>
            <div>
              <Button style={{backgroundColor:"#82ecff", marginBottom: "2em", marginLeft: "1em", color: "black"}} textAlign="center" className='hvr-underline-from-left'
              onClick={(e) => this.props.clearCart()}>
                <h2>Clear Cart </h2>
              </Button>
            </div>
            <div>
              <Button disabled={!this.props.cart[0]} style={{backgroundColor:"#82ecff", marginBottom: "2em", marginLeft: "1em", color: "black"}} textAlign="center"  className='hvr-underline-from-left'
              onClick={(e) => this.setState({ checkout: true })}>
                <h2>Checkout</h2>
              </Button>
            </div>
          </div>
          <div className="right col wrapper">
            <header className="toolbar  teacher dashboard">
              <div className="right part">
                <div><h2>Add classes to your cart</h2></div>
              </div>
              <div>
                <input icon='search' placeholder='Search for a Class...' onChange={(e) => this.setState({ search: e.target.value })}/>
              </div>
            </header>
                <div className="content dashboard">
                  {search.map((course) => {
                return (
                    <div className="card container" onClick={(e) => this.props.setClass(course)}>
                      <Button className="cardItem hvr-underline-from-left" disabled={this.props.cart.indexOf(course) !== -1}>
                        <CardGroups course={course}/>
                      </Button>
                    </div>
                    )
                  }
                )}
              </div>
        </div>
      </div>
    </div>
  )
  }
}


export default Courses
