import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from "redux";
import { addPlayerById } from "../actions";

class PlayerList extends Component {
    render() {
        return(
            <div>
                <h4>Players</h4>
                <ul className="list-group">
                    {
                        this.props.players.map(player => {
                            return (
                                <li key={player.id} className="list-group-item">
                                    <div className="list-item">{player.name}</div>
                                    <div className="list-item right-button" onClick={() => this.props.addPlayerById(player.id)}>
                                        +
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addPlayerById }, dispatch);
}*/

function mapStateToProps(state) {
    console.log('state', state);
    return {
        players: state.players
    };
}

export default connect(mapStateToProps, { addPlayerById })(PlayerList);