import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header'

export default class Edit extends Component{

    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0
        }
    }

    componentDidMount(){
        // console.log("edit bin mounted", this.props.match.params.shelf_id)
        axios.get(`/api/getbin/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then(res => {
            console.log(res.data[0].name, res.data[0].price)
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
                
                <Header match={this.props.match}/>

                <div>Shelf {this.props.match.params.shelf_id}</div>
                <div>Bin {this.props.match.params.bin_id}</div>
                
                

                <div>Name: {this.state.name}</div>
                <div>Price: ${this.state.price}</div>


                <Link to="/edit"> <button>Save </button></Link>
                <button>DELETE</button>
              

                
            </div>
        )
    }

}