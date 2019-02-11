import React from 'react'
import courses from '../data/courses'
import { Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

class CourseInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewCart: false,
      checkout: false
    }
  }

  render() {
if (!this.props.selectedClass.dept) { return <Redirect to='/'/>}
    return (
    <div className="viewport">
        <div className="user grid">

          <div className="left col">
          {this.props.cart.indexOf(this.props.selectedClass) == -1 ?
            <div>
              <Button style={{backgroundColor:"#82ecff", marginBottom: "2em", marginLeft: "1em", color: "black"}} textAlign="center" className='hvr-underline-from-left'
              onClick={(e) => this.props.addClass(this.props.selectedClass)}>
                <h2>Add to Cart</h2>
              </Button>
            </div>
            :
            <div>
              <Button style={{backgroundColor:"#82ecff", marginBottom: "2em", marginLeft: "1em", color: "black"}} textAlign="center" className='hvr-underline-from-left'
              onClick={(e) => this.props.removeClass(this.props.selectedClass)}>
                <h2>Remove from Cart</h2>
              </Button>
            </div>

          }

            <div>
              <Button style={{backgroundColor:"#82ecff", marginBottom: "2em", marginLeft: "1em", color: "black"}} textAlign="center" className='hvr-underline-from-left'
              onClick={(e) => this.props.setClass({})}>
                <h2>Back to Courses</h2>
              </Button>
            </div>
          </div>
          <div className="right col wrapper">
            <header className="toolbar  teacher dashboard">
              <div className="right part">
                <div><h2>{this.props.selectedClass.dept} {this.props.selectedClass.number} </h2></div>
              </div>
            </header>
            <div>
              <h3>{this.props.selectedClass.title}</h3>
              <h4>Prerequisites:{this.props.selectedClass.prereqs ? this.props.selectedClass.prereqs : 'None'}</h4>
              <h4>Cross-listed:{this.props.selectedClass.prereqs ? this.props.selectedClass['cross-listed'] : 'None'}</h4>
              <div>{this.props.selectedClass.description}</div>
          </div>

        </div>
      </div>
    </div>
  )
  }
}


export default CourseInfo
