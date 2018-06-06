import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Bin.css'

export default class Bin extends Component{

    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0,
            editable: false
        }

        this.editable = this.editable.bind(this);
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

    editable(){
        this.setState({
            editable: !this.state.editable
        })
    }

    render(){
        console.log(this.state.editable)

       return(
        <div>
            <div>Shelf {this.props.match.params.shelf_id} </div>
            <div>Bin {this.props.match.params.bin_id} </div>

                <div className="inputs">
                    Name:<input type="text" disabled={!this.state.editable} placeholder={this.state.name}/>
                    Price:<input type="text" disabled={!this.state.editable} placeholder={this.state.price}/>
                </div>
            
                {
                    this.state.editable == false ? 
                    
                    <div className="initial">
                        <button onClick={this.editable}>EDIT</button>
                    </div>

                    :

                    <div className="save">
                        <button onClick={this.editable}>SAVE</button>
                    </div>
                }

            <div className="initial">
                <button >DELETE</button>
            </div>
        </div>
       )
        
     
    }

}