import React, { Component } from "react";
import Bin from "../Bin/Bin";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Shelf.css";
import Header from "../Header/Header";

export default class Shelf extends Component {
  constructor() {
    super();

    this.state = {
      bins: []
    };
  }

  componentDidMount() {
    // console.log("shelf called")
    axios.get(`/api/shelf/${this.props.match.params.shelf_id}`).then(res => {
      this.setState({
        bins: res.data
      });
    });
  }

  render() {
    // console.log("shelf", this.props.match.params);

    let formattedBins = this.state.bins.map((current, index) => {
      if (current.name === null) {
        return (
          <div key={current + index}>
            <Link
              to={`/addbin/${this.props.match.params.shelf_id}/${
                current.bin_id
              }`}
            >
              <button className="add_inventory button">+ Add Inventory</button>
            </Link>
          </div>
        );
      } else {
        return (
          <div key={current + index}>
            <Link
              to={`/bin/${this.props.match.params.shelf_id}/${
                current.bin_id
              }`}
            >
              <button className="bin_button button">
                Bin {current.bin_id}
              </button>
            </Link>
          </div>
        );
      }
    });

    return (
      <div>
          <Header match={this.props.match} />
          <div className="Shelf">
          {/* <div className="Shelf">SHELFIE</div> */}

          <div>Shelf {this.props.match.params.shelf_id}</div>

          <div className="button">{formattedBins}</div>
        </div>
      </div>
    );
  }
}
