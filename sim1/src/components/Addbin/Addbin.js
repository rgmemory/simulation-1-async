import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Addbin.css'

export default class Addbin extends Component{

    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0
        }

        this.addName = this.addName.bind(this);
        this.addPrice = this.addPrice.bind(this);
        this.addInventory = this.addInventory.bind(this);
    }

    addName(value){
        console.log(value)
        this.setState({
            name: value
        })
    }

    addPrice(value){
        console.log(value)

        this.setState({
            price: value
        })
    }

    addInventory(){
        console.log('addd')
        axios.post(`/api/add/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`, {name: this.state.name, price: this.state.price})
    }

    componentDidMount(){
        console.log("addbin mounted", this.props.match.params.shelf_id, this.props.match.params.bin_id)
        axios.get(`/api/getbin/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then(res => {
            console.log("addbin", res.data[0].name, res.data[0].price, res.data[0])
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


                <input type="text" onChange={e => {this.addName(e.target.value)}}/>
                <input type="text" onChange={e => {this.addPrice(e.target.value)}}/>


                <Link to={`/shelf/${this.props.match.params.shelf_id}`}>
                    <button className="add_button" onClick={this.addInventory}>+ Add Inventory</button>
                </Link>
              

                
            </div>
        )
    }

}