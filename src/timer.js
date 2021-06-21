import React from 'react';
import {BrowserRouter as Router, Link } from "react-router-dom";

class Timer extends React.Component{
    componentDidMount() {
        document.getElementById("button").click()
    }
    constructor(props){
        super(props)
        this.state = {
            time: 300
        }
        this.time = this.time.bind(this)
        this.timer = this.timer.bind(this)
    }
    time(){
        var count = this.state.time
        var minutes  = Math.floor(count / 60)
        var seconds = count - (minutes * 60)
        if(minutes < 10){minutes = "0" + minutes }
        if(seconds < 10){seconds = "0" + seconds }
        return(minutes + ":" + seconds)
      }
      timer(){
        const interval = setInterval(() => {
            if(this.state.time > 0){
                this.setState({
                    time : this.state.time - 1
                })}
            else{
                clearInterval(interval)
                console.log("hi")
                document.getElementById("link").click()
            }
        },1000)
    }
    render(){
        return(
            <div>
            <div id="time-left">{this.time()}</div>
            <button id="button" ref={this.clickButton} onClick = {this.timer} style={{display: "none"}}> controls </button>
            <button id="result" style={{display: "none"}}>
                <Link id="link" to = '/result'>Submit</Link>
            </button>
            </div>
        )
    }
}
export default Timer