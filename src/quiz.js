import React ,{useEffect,useState} from 'react';
import './quiz.css'; 
import Timer from './timer';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';


const quizQuestions = [
    {
        question: "Ctrl, Shift and Alt are called .......... keys.",
        answer: [
            {option1 : "modifier" },
            {option2 : "function" },
            {option3 : "alphanumeric" },
            {option4 : "adjustment" },
        ]
    },
    {
        question: "A computer cannot \"boot\" if it does not have the _____.",
        answer: [
            {option1 : "Compiler" },
            {option2 : "Loader" },
            {option3 : "Assembler" },
            {option4 : "Operating system" },
        ]
    },
    {
        question: "________ is the process of dividing the disk into tracks and sectors.",
        answer: [
            {option1 : "Tracking" },
            {option2 : "Formatting" },
            {option3 : "Allotting" },
            {option4 : "Crashing" },
        ]
    },
    {
        question: "Microsoft Office is an example of a",
        answer: [
            {option1 : "Closed source software" },
            {option2 : "Open source software" },
            {option3 : "Horizontal market software" },
            {option4 : "Vertical market software" },
        ]
    },
    {
        question: "By default, your documents print in ________ mode.",
        answer: [
            {option1 : "Landscape" },
            {option2 : "Portrait" },
            {option3 : "Page Setup" },
            {option4 : "Print View" },
        ]
    },
    {
        question: "Storage capacity of magnetic disk depends on",
        answer: [
            {option1 : "disk pack in disk surface" },
            {option2 : "tracks per inch of surface" },
            {option3 : "bits per inch of tracks" },
            {option4 : "All of the above" },
        ]
    },
    {
        question: "The computer's processor consists of the following parts",
        answer: [
            {option1 : "CPU and Main Memory" },
            {option2 : "Hard Disk and Floppy Drive" },
            {option3 : "Control Unit and ALU" },
            {option4 : "Operating System and Application" },
        ]
    },
    {
        question: "Where is RAM located?",
        answer: [
            {option1 : "Mother Board" },
            {option2 : "Expansion Board" },
            {option3 : "External Drive" },
            {option4 : "None" },
        ]
    },
    {
        question: "The first computer was programmed using ........",
        answer: [
            {option1 : "Assembly language" },
            {option2 : "Machine language" },
            {option3 : "Spaghetti code" },
            {option4 : "Source code" },
        ]
    },
    {
        question: "In MICR, C stands for...........",
        answer: [
            {option1 : "Code" },
            {option2 : "Colour" },
            {option3 : "Computer" },
            {option4 : "Character" },
        ]
    }
]
export const actualAnswer = ["modifier","Operating system" ,"Formatting","Horizontal market software",
"Portrait","All of the above","Control Unit and ALU","Mother Board","Machine language","Character"]
var count = 0;
export var answer = [];


class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            question: quizQuestions[count].question,
            option1: Object.values(quizQuestions[count].answer[0]),
            option2: Object.values(quizQuestions[count].answer[1]),
            option3: Object.values(quizQuestions[count].answer[2]),
            option4: Object.values(quizQuestions[count].answer[3])
        }  
        this.handleChange = this.handleChange.bind(this)
        this.next = this.next.bind(this)
        this.uncheck = this.uncheck.bind(this)
        this.previous = this.previous.bind(this)
        this.check = this.check.bind(this)
        window.onbeforeunload = (event) => {
            const e = event || window.event;
            e.preventDefault();
            if (e) {
              e.returnValue = ''; 
            }
            return ''; 
          };
    };
    handleChange(event){
        answer[count] = (event.target.value)
    }
    uncheck(){
        for(var i = 0 ; i<4 ; i++){
        document.getElementsByName("answer")[i].checked = false;
        }
    }
    check(){

        for(var i = 0 ; i<4 ; i++){
            if(document.getElementsByName("answer")[i].value === answer[count]){
                document.getElementsByName("answer")[i].checked = true;
                break;
        }
        }
    }
    next(){
        
        if(answer[count] === undefined){
            alert("Please Choose an Option")
        }
        else{
        if(count<9){
        this.uncheck()
        count += 1;
        console.log(count)
        this.setState({  question: quizQuestions[count].question,
            option1: Object.values(quizQuestions[count].answer[0]),
            option2: Object.values(quizQuestions[count].answer[1]),
            option3: Object.values(quizQuestions[count].answer[2]),
            option4: Object.values(quizQuestions[count].answer[3]) });
        }
    }
    }
    previous(){
        if(count>0){
        count -= 1;
        console.log("Prev")
        this.setState({  question: quizQuestions[count].question,
            option1: Object.values(quizQuestions[count].answer[0]),
            option2: Object.values(quizQuestions[count].answer[1]),
            option3: Object.values(quizQuestions[count].answer[2]),
            option4: Object.values(quizQuestions[count].answer[3]) 
        },() => {
           this.check();
          });
        }
    }  
    render(){
        let prevbutton;
        let nextbutton;
        if (count<=0) {
            prevbutton = <button id= "prev" className = "previous" style={{display: "none"}} onClick={this.previous}></button>;
            nextbutton = <button id="next" onClick = {this.next}>Next</button>
          }
        else if(1<=count<8){
            prevbutton = <button id= "prev" className = "previous" onClick={this.previous}>Previous</button>;
            nextbutton = <button id="next" onClick = {this.next}>Next</button>
        }
        if(count === 9){
            prevbutton = <button id= "prev" className = "previous" style={{display: "none"}} onClick={this.previous}></button>
            nextbutton = <button id="next"><Link id="link" to = '/result'>Submit</Link></button>
        }
        return(
            <div id="main">
                <div id = "head"> Quizeal ! </div><br/>
                <div id = "qa">
                    <div id="time"><Timer /></div>
                    <div>Question: {count+1}/10</div>
                    <div className='question-text'>{this.state.question}</div>
                    <br/>
                    <div id = "answer">
                    <input id="radio" type="radio"  name="answer" onChange = {this.handleChange} value = {this.state.option1} /> {this.state.option1}<br/>
                    <input id="radio" type="radio"  name="answer" onChange = {this.handleChange} value = {this.state.option2} /> {this.state.option2}<br/>
                    <input id="radio" type="radio"  name="answer" onChange = {this.handleChange} value = {this.state.option3} /> {this.state.option3}<br/>
                    <input id="radio" type="radio"  name="answer" onChange = {this.handleChange} value = {this.state.option4} /> {this.state.option4}<br/>
                    </div>
                    {prevbutton}
                    {nextbutton}
                </div>
            </div>
        )
    }
}

export default Quiz;