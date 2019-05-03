import { ADD_PLAYERS, REMOVE_PLAYERS } from "../actions";
import players_data from '../data/players';
import { searchPlayers } from "./helper";

export function players(state = players_data, action) {
    let player;
    switch (action.type) {
        case ADD_PLAYERS:
            player = state.filter(item => item.id !== action.id);
            return player;
        case REMOVE_PLAYERS:
            player = [...state, searchPlayers(action.id)];
            return player;
        default:
            return state;
    }
}