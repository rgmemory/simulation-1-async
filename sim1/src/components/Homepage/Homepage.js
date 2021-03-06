import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Homepage.css';
import Header from '../Header/Header'

export default class Homepage extends Component{

    constructor(){
        super()

        this.state = {

        }
    }   

    render(){
        return(
            <div>
            <Header match={this.props.match} />
            <div className="Homepage">

                <Link to="/shelf/A"> <button>Shelf A </button></Link>
                <Link to="/shelf/B"> <button>Shelf B </button></Link>
                <Link to="/shelf/C"> <button>Shelf C </button></Link>
                <Link to="/shelf/D"> <button>Shelf D </button></Link>

            </div>
            </div>
        )
    }

}
