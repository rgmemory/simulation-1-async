import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import {withRouter} from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Header(props) {
  console.log(
    " shelf",
    props.match.params.shelf_id,
    " bin",
    props.match.params.bin_id
  );
  console.log(props.match.params.shelf_id);
  return (
    <div>
      <Link to="/">
        <button>SHELFIE</button>{" "}
      </Link>

      {props.match.params.shelf_id ? (
        <div>There is a shelf {props.match.params.shelf_id}</div>
      ) : (
        <div>No shelves</div>
      )
      // null
      }

      {props.match.params.bin_id ? (
        <div>Bin {props.match.params.bin_id}</div>
      ) : (
        <div>No bins</div>
      )}

    </div>
  );
}
