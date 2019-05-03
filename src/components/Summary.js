import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/index.css';

class Summary extends Component {
    speed() {
        let speed = 0;
        this.props.final.forEach(hero => speed += hero.power);
        return speed;
    }
    render() {
        return (
            <div>
                Summay of speed
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Speed of hero: </b> {this.speed()}
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        final: state.heros  
    }
}

export default connect(mapStateToProps, null)(Summary);