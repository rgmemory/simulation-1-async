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
                    <Link to={`/bin/${this.props.match.params.id}/${current.bin_id}`}><button>Bin {current.bin_id}</button></Link>
                    {/* <Link to="/bin"><Bin bin={current}/></Link> */}
                </div>
            )
        })

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