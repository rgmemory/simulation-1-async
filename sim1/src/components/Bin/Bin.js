import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Bin.css'
import Header from '../Header/Header'

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
        this.updateName = this.updateName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.delete = this.delete.bind(this);
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

    updateName(value){
        this.setState({
            name: value
        })
    }

    updatePrice(value){
        this.setState({
            price: value
        })
    }

    editable(){
        axios.put(`/api/edit/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`, {name: this.state.name, price: this.state.price}).then(
        )

        this.setState({
            editable: !this.state.editable
        })
    }

    delete(){
        console.log('delete')
        axios.delete(`/api/delete/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then(res => {
            console.log(res);
        })
    }

    render(){
        console.log("Bin", this.props.match)
       return(
        <div>
        <Header match={this.props.match}/>
        <div className="bin">
            {/* <div>Shelf {this.props.match.params.shelf_id} </div>
            <div>Bin {this.props.match.params.bin_id} </div> */}

            <div className="inner-bin">
                
                <div className="image"></div>

                <div className="interactions">
                    
                    <div className="inputs">
                        <div>Name<input onChange={e => {this.updateName(e.target.value)}} type="text" disabled={!this.state.editable} placeholder={this.state.name}/></div>
                        <div>Price<input onChange={e => {this.updatePrice(e.target.value)}} type="text" disabled={!this.state.editable} placeholder={this.state.price}/></div>
                    </div>

                    <div className="buttons">
                        {
                            this.state.editable == false ? 
                            
                            <div className="initial">
                                <button onClick={this.editable}>EDIT</button>
                            </div>
                            :
                            <div className="save">
                                <Link to={`/shelf/${this.props.match.params.shelf_id}`}> <button onClick={this.editable}>SAVE</button> </Link>
                            </div>
                        }

                        <div className="initial">
                            <Link to={`/shelf/${this.props.match.params.shelf_id}`}><button onClick={this.delete}>DELETE</button> </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
       )
        
     
    }

}
////////////get the info to appear in the div