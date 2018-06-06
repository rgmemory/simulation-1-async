import React, {Component} from 'react'
// import Shelfbutton from './Shelfbutton/Shelfbutton'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Homepage.css';

export default class Homepage extends Component{

    constructor(){
        super()

        this.state = {

        }

        this.getShelf = this.getShelf.bind(this);
    }

   

    getShelf(id){
        console.log(id, "current");
        axios.get('/api/shelf/' + id).then(res => {
            console.log(res.data, " is the result")
        })
    }

    render(){
        return(
            <div className="Homepage">
                

                <Link to="/shelf/A"> <button>Shelf A </button></Link>
                <Link to="/shelf/B"> <button>Shelf B </button></Link>
                <Link to="/shelf/C"> <button>Shelf C </button></Link>
                <Link to="/shelf/D"> <button>Shelf D </button></Link>

            </div>
        )
    }

}