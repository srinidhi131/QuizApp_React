import React from 'react';
import './homeScreen.css'; 
import { Link } from 'react-router-dom';

class HomeScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="p">
                <div id="a"> <p>Welcome To Quizeal ! </p>
                    <button>
                        <Link id="link" to = '/quiz'>Click To Begin</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default HomeScreen ; 