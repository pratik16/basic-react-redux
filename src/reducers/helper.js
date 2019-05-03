import players_data from '../data/players';

export function searchPlayers(id) {
    let player = players_data.find(c => c.id === id);
    return player;
}