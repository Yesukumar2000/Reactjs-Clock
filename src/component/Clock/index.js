import {Component} from 'react'
import './index.css'

import Calendar from 'react-calendar'; 

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        
        <h1 className="heading">Clock</h1>
        <p className='date'> Date : {this.state.date.toLocaleDateString()}</p>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock;