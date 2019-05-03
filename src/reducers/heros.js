import { ADD_PLAYERS, REMOVE_PLAYERS } from "../actions";
import { searchPlayers } from "./helper";

export function heros(state = [], action) {
    let heros;
    switch (action.type) {
        case ADD_PLAYERS:
            heros = [...state, searchPlayers(action.id)];
            return heros;
        case REMOVE_PLAYERS:
            heros = state.filter(item => item.id !== action.id);
            return heros;
        default:
            return state;
    }
}