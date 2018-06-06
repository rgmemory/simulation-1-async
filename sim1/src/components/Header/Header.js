import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header(props){

  

    return(
        <div className="Header">
            {/* {formatedShelfIds} */}

            <Link to='/'><button>SHELFIE</button> </Link>
        </div>
    )
}