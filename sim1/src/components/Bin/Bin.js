import React, {Component} from 'react'
import {Link} from 'react-router-dom';
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
        // console.log("bin mounted")
        axios.get(`/api/getbin/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then(res => {
            // console.log(res.data[0].name, res.data[0].price)
            this.setState({
                name: res.data[0].name,
                price: res.data[0].price
            })
        }).catch(e => {
            console.log(e)
        })
    }

    render(){
        return(
            <div>
                <div>Shelf {this.props.match.params.shelf_id}</div>
                <div>Bin {this.props.match.params.bin_id}</div>
                
                

                <div>Name: {this.state.name}</div>
                <div>Price: ${this.state.price}</div>

                {/* <Link to="/edit"> <button>EDIT</button> </Link> */}

                <Link to={`/edit/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`}> <button>Edit </button></Link>
                <button>DELETE</button>
                {/* <Link to="addbin"> <button> Bin {this.props.bin.bin_id} </button> </Link> */}
                {/* <Link to="/addbin"> <button> Bin  </button> </Link> */}

                
            </div>
        )
    }

}