import React, {Component} from 'react'
// import Shelfbutton from './Shelfbutton/Shelfbutton'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Homepage extends Component{

    constructor(){
        super()

        this.state = {

        }

        this.getShelf = this.getShelf.bind(this);
    }

    componentDidMount(){
        // console.log('axios')
        // axios.get('/api/shelves').then(res => {
        //     console.log(res.data)
        // }).catch(e => {
        //     console.log(e);
        // })
    }

    getShelf(id){
        console.log(id, "current");
        axios.get('/api/shelf/' + id).then(res => {
            console.log(res.data, " is the result")
        })
    }

    render(){
        return(
            <div>
                Header
                Homepage

                <Link to="/api/shelf/A"> <button>A </button></Link>
                <Link to="/api/shelf/B"> <button>B </button></Link>
                <Link to="/api/shelf/C"> <button>C </button></Link>
                <Link to="/api/shelf/D"> <button>D </button></Link>

                {/* <Shelfbutton getShelf ={this.getShelf}/> */}
            </div>
        )
    }

}