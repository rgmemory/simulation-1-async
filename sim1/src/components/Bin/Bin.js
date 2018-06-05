import React, {Component} from 'react'
import {Link} from 'react';
import axios from 'axios';

export default class Bin extends Component{

    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0
        }
    }

    ///////////////////////write the function that sends the bin over
    componentDidMount(){
        axios.get('/')
    }

    render(){
        return(
            <div>
                
                {/* <Link to="addbin"> <button> Bin {this.props.bin.bin_id} </button> </Link> */}
                <Link to="/addbin"> <button> Bin  </button> </Link>

                
            </div>
        )
    }

}