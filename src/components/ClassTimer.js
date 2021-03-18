import React, { Component } from 'react'

class ClassTimer extends Component {

  //instance field or class property
  interval
  constructor(props) {
    super(props)
  
    this.state = {
      timer: 0
    }
  }

  //setting up the timer
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }, 1000)
  }

  //clearing up the timer
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <div>
        <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
      </div>
      </div>
      
    )
  }
}

export default ClassTimer
