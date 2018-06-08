import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Addbin from './components/Addbin/Addbin';
import Bin from './components/Bin/Bin';
import Homepage from './components/Homepage/Homepage';
import Shelf from './components/Shelf/Shelf';
import Edit from './components/Edit/Edit';

export default(
    <Switch >
        <Route exact path ="/" component={Homepage}/>
        <Route path="/shelf/:shelf_id" component={Shelf}/>
        <Route path="/bin/:shelf_id/:bin_id" component={Bin}/>
        <Route path="/addbin/:shelf_id/:bin_id" component={Addbin}/>
    </Switch>
)