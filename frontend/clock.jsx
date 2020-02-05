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
      time: "0:0:0 AM",
      month: date.getMonth(),
      year: date.getYear(),
      day: date.getDay(),
      date: "Month 00, Year"
    };
    
     setInterval(this.setDate.bind(this), 6000);
     setInterval(this.tick.bind(this), 1000 );
  }

  render() {
    return (
      <div> 
          <h2>
            {this.state.time}
          </h2>
          <h2>
            {this.state.date}
          </h2>
      </div>)
  }

//   printTime() {
//     return `${this.state.hours}:${this.state.minutes}:${this.state.seconds} ${meridiem}`
//   }

//   printDate() {
//     return `${this.state.month} ${this.state.day}, ${this.state.year}`

//   }

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

    setDate() {
        if (this.state.month === 1) {this.setState({month: "January"})}
        if (this.state.month === 2) {this.setState({month: "February"})}
        if (this.state.month === 3) {this.setState({month: "March"})}
        if (this.state.month === 4) {this.setState({month: "April"})}
        if (this.state.month === 5) {this.setState({month: "May"})}
        if (this.state.month === 6) {this.setState({month: "June"})}
        if (this.state.month === 7) {this.setState({month: "July"})}
        if (this.state.month === 8) {this.setState({month: "August"})}
        if (this.state.month === 9) {this.setState({month: "September"})}
        if (this.state.month === 10) {this.setState({month: "October"})}
        if (this.state.month === 11) {this.setState({month: "November"})}
        if (this.state.month === 12) {this.setState({month: "December"})}

        this.setState( {date: `${this.state.month} ${this.state.date}, ${this.state.year}`})
    }

}
