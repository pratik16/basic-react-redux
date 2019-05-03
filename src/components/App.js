import React, { Component } from 'react';
import PlayerList from './PlayerList';
import SelectedPlayerList from "./SelectedPlayerList";
import '../style/index.css';
import './Summary';
import Summary from './Summary';

class App extends Component {
    render() {
        return(
            <div className="App">
                <h2>Super heros</h2>
                <div className="col-md-4"><PlayerList /></div>
                
                <div className="col-md-4"><SelectedPlayerList /></div>

                <div className="col-md-4"><Summary /></div>

            </div>
        );
    }
}

export default App;