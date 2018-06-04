import React from 'react';
import {Link} from 'react-router-dom';

export default function Shelfbutton(props){

    let shelfids = ['A', 'B', 'C', 'D']

    let formatedShelfIds = shelfids.map((current, id) => {
        return(
            <div key = {current + id}>
                <Link to="/api/shelf/:id"><button onClick ={() => props.getShelf(current)}> Shelf {current} </button> </Link>
            </div>
        )
    })

    return(
        <div>
            {formatedShelfIds}
        </div>
    )
}