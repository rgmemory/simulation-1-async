import React, {Component} from 'react';
import Bin from '../Bin/Bin';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Shelf.css';

export default class Shelf extends Component{

    constructor(){
        super()

        this.state = {
            bins: []
        }
    }

    componentDidMount(){
        axios.get(`/api/shelf/${this.props.match.params.id}`).then(res => {
            this.setState({
                bins: res.data
            })
        })
    }

    render(){  
        let formattedBins = this.state.bins.map((current, index) => {

            if(current.name === null){
                return(
                    <div key={current + index}>
                        <Link to={`/addbin/${this.props.match.params.id}/${current.bin_id}`}><button className="add_inventory">+ Add Inventory</button></Link>
                    </div>
                )
            }else{
                return (
                    <div key={current + index}>
                        <Link to={`/bin/${this.props.match.params.id}/${current.bin_id}`}><button className="bin_button">Bin {current.bin_id}</button></Link>
                    </div>
                )
            }            
        })

        return(
            <div className="Shelf">               
                <div>
                    Shelf {this.props.match.params.id}
                </div>
                
                <div className="button">
                    {formattedBins}
                </div>
            </div>
        )
    }

}