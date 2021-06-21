import {answer , actualAnswer} from './quiz'
import React from 'react'
import "./result.css"
import { Link } from 'react-router-dom';

var score = 0;

class Result extends React.Component{
    constructor(props){
        super(props)
        this.result = this.result.bind(this)
    }
    result(){
        console.log(answer,actualAnswer)
        for(var i = 0; i<actualAnswer.length ; i++){

            if(answer[i] === actualAnswer[i]){
                score += 1; 
            }
        }
        return score;
    }
    render(){
        {this.result()}
        let message;
            if(score < 5){
                message = "You Can Do Better!"
            }
            else if(score < 8){
                message = "Good Job!"
            }
            else{
                message = "You are a Dynamite!"
            }
        return(
            <div id="box">
                <div id="w"> The Quiz Has Ended ! <br/>
                <div id="time-left"> Score: {score}</div><br/>
                <div>{message}</div>
                <div>
                <button>
                        <Link id="link" to = '/'>Return to Home</Link>
               </button>
               </div>
                </div>
            </div>
        )
    }
}

export default Result