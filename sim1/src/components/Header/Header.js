import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import {withRouter} from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Header(props) {
  //   console.log(
  //     " shelf",
  //     props.match.params.shelf_id,
  //     " bin",
  //     props.match.params.bin_id
  //   );
  //   console.log(props.match.params.shelf_id);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <button>SHELFIE</button>
        </Link>
      </div>

      {!props.match.params.shelf_id && !props.match.params.bin_id ? (
        <div className="nothing">There is nothing to display</div>
      ) : null}

      {props.match.params.shelf_id ? (
        <div className="shelf">
          There is a shelf {props.match.params.shelf_id}
        </div>
      ) : (
        <div>No shelves</div>
      )
      // null
      }

      {props.match.params.bin_id ? (
        <div className="bin">Bin {props.match.params.bin_id}</div>
      ) : (
        <div>No bins</div>
      )}
    </div>
  );
}
