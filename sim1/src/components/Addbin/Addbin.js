import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Addbin.css'
import Header from '../Header/Header'

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
        this.setState({
            name: value
        })
    }

    addPrice(value){
        this.setState({
            price: value
        })
    }

    addInventory(){
        axios.post(`/api/add/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`, {name: this.state.name, price: this.state.price})
    }

    componentDidMount(){
        axios.get(`/api/getbin/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then(res => {
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
            <div className="addbin">

                <Header match={this.props.match}/>

                <div className="user-interactions">

                    <div className="user-inputs">

                        <div className="input">
                            <div>Name</div>
                            <div><input type="text" onChange={e => {this.addName(e.target.value)}} placeholder={this.state.name}/></div>

                            <div>Price</div>
                            <div><input type="text" onChange={e => {this.addPrice(e.target.value)}}
                            placeholder={this.state.price}/></div>
                        </div>

                    </div>

                    <Link to={`/shelf/${this.props.match.params.shelf_id}`}>
                        <button className="add_button" onClick={this.addInventory}>+ Add Inventory</button>
                    </Link>

                </div>

                
            </div>
        )
    }

}