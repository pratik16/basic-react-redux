import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePlayerById } from "../actions";

class SelectedPlayerList extends Component {
    render() {
        console.log(this.props.SelectedPlayers);
        return(
            <div>
                <h4>Selected players</h4>
                <ul className="list-group">
                    {
                        this.props.SelectedPlayers.map(
                            player => {
                                return (
                                    <li key={player.id} className="list-group-item">
                                        <div className="list-item">{player.name}</div>
                                        <div className="list-item right-button" onClick={() => this.props.removePlayerById(player.id)}>X</div>
                                    </li>
                                );
                            })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        SelectedPlayers: state.heros
    }
}

export default connect(mapStateToProps, { removePlayerById })(SelectedPlayerList);