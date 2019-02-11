import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
import Courses from './components/Courses'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import CourseInfo from './components/CourseInfo'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      selectedClass: {}
    }
  }

  addClass(course) {
    if (this.state.cart.length >= 7) {
      console.log('Cart is full')
    } else if (this.state.cart.indexOf(course) !== -1) {
      console.log('Already in cart')
    }
      else {
      this.setState({ cart: [...this.state.cart, course]})
    }

  }

  removeClass(index) {
    var newCart = this.state.cart.slice()
    newCart.splice(index, 1)
    this.setState({ cart: newCart})

  }

  setClass(course) {
    this.setState({ selectedClass: course })
  }

  clearCart() {
    this.setState({ cart: [] })
  }

  render() {
    console.log(this.state.selectedClass)
    return (
      <>
        <Nav />
        <div style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '0 calc(1rem + 10%)',
        }}>
        <BrowserRouter>
          <div className="style">
            <Route exact={true} path='/' render={ () =>
              <Courses
              setClass={this.setClass.bind(this)}
              clearCart={this.clearCart.bind(this)}
              cart={this.state.cart}
              selectedClass={this.state.selectedClass}/>
            } />
            <Route path='/cart' render={ () =>
              <Cart cart={this.state.cart} removeClass={this.removeClass.bind(this)} selectedClass={this.state.selectedClass}/>
            } />
            <Route path='/checkout' render={ () =>
              <Checkout cart={this.state.cart} />
              }
            />
            <Route path='/course' render={ () =>
              <CourseInfo cart={this.state.cart}
              addClass={this.addClass.bind(this)}
              removeClass={this.removeClass.bind(this)}
              setClass={this.setClass.bind(this)}
              selectedClass={this.state.selectedClass}/>
              }
            />
          </div>
        </BrowserRouter>
          </div>
      </>
    );
  }
}

export default App
