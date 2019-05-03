export const ADD_PLAYERS = 'ADD_PLAYERS';
export const REMOVE_PLAYERS = 'REMOVE_PLAYERS';

export function addPlayerById(id) {
    const action = {
        type: ADD_PLAYERS,
        id
    }

    return action;
}


export function removePlayerById(id) {
    const action = {
        type: REMOVE_PLAYERS,
        id
    }

    return action;
}