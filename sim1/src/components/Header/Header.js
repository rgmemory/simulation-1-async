import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoimg from './logo.png'


export default function Header(props) {

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoimg}/>
        </Link>
      </div>

      {!props.match.params.shelf_id && !props.match.params.bin_id ? null : null}

      {props.match.params.shelf_id ? (
        <div className="shelf">
          <p>Shelf {props.match.params.shelf_id}</p>
        </div>
      ) : null}

      {props.match.params.bin_id ? (
        <div className="bin">
          <p>Bin {props.match.params.bin_id}</p>
        </div>
      ) : null}
    </div>
  );
}
