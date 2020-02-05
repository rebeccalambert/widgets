import React from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {

  constructor() {
    super();
    let date = new Date();


    this.state = {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: (date.getHours() < 12) ? date.getHours() : (date.getHours() - 12),
      meridiem: (date.getHours() < 12) ? "AM" : "PM",
      time: "0:0:0 AM"
    };
    
     setInterval(this.tick.bind(this), 1000 );
  }

  render() {
    return (
      <h1> 
        {this.state.time}
      </h1>)
  }

  printTime() {
    return `${this.state.hours}:${this.state.minutes}:${this.state.seconds} ${meridiem}`
  }

  tick() {
    let secs = this.state.seconds
    this.setState({seconds: secs})

    this.state.seconds += 1
    if (this.state.seconds === 60) {
      this.setState({ seconds: 0 })
      let mins = this.state.minutes
      this.setState({ minutes: mins })
    }

     if (this.state.minutes === 60){
       this.setState({ minutes: 0 })
       let hour = this.state.hours
       this.setState({ hours: hour })
    }
  
    if (this.state.hours > 12) {
      this.setState({ hours: 1 })
    }
    
    this.setState( {time: `${this.state.hours}:${this.state.minutes}:${this.state.seconds} ${this.state.meridiem}`})
  }

}
