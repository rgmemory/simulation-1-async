import React, {Component} from 'react';
import Bin from '../Bin/Bin';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Shelf extends Component{

    constructor(){
        super()

        this.state = {
            bins: []
        }
    }

    componentDidMount(){
        // console.log("this props works")
        axios.get(`/api/shelf/${this.props.match.params.id}`).then(res => {
            this.setState({
                bins: res.data
            })
        })
    }



    render(){

        

        let formattedBins = this.state.bins.map((current, index) => {
            return (
                <div key={current + index}>
                    <Link to="/bin"><button>Bin {current.bin_id}</button></Link>
                </div>
            )
        })

        // console.log("bins", this.state.bins[0])
        return(
            <div>
                
                Shelf
                
                <div>
                    {this.props.match.params.id}
                </div>
                
                {formattedBins}
            </div>
        )
    }

}