import type { Game, GameRequestData } from "@/@types/game";
import axios from "axios";

// http://localhost:4002/games?isDeleted=false&?_page=1&_limit=3
const apiRequester = axios.create({
    baseURL: 'http://localhost:4002',
    params: {
        isDeleted: false
    }
});

export async function fetchGames(page = 1, perPage = 3): Promise<Game[]> {

    //! Fausse latence... Ne pas faire ça en production (╯°□°）╯︵ ┻━┻
    await (new Promise((resolve) => setTimeout(resolve, 3_000)));

    //* Requete vers l'api (en NextJS, on pourrait aussi être un call DB)
    const result = await apiRequester.get<GameRequestData[]>('/games', {
        params: {
            _page: page,
            _limit: perPage
        }
    });

    // Envoi des données mappées
    return result.data.map(elem => ({
        id: elem.id,
        name: elem.name,
        genres: elem.genres.split(',').map(g => g.trim())
    }));
}