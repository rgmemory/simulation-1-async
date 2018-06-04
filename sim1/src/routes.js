import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Addbin from './components/Addbin/Addbin';
import Bin from './components/Bin/Bin';
import Homepage from './components/Homepage/Homepage';
import Shelf from './components/Shelf/Shelf';

export default(
    <Switch >
        <Route exact path ="/" component={Homepage}/>
        <Route path="/api/shelf/:id" component={Shelf}/>
        <Route path="/bin" component={Bin}/>
        <Route path="/addbin" component={Addbin}/>
    </Switch>
)