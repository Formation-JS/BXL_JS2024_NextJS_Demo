import type { Game, GameDetail, GameRequestData } from "@/@types/game";
import axios from "axios";
import { unstable_cache as cache } from 'next/cache';

const apiRequester = axios.create({
    baseURL: 'http://localhost:4002',
    params: {
        isDeleted: false
    }
});


export const fetchGames = cache(async (page = 1, perPage = 3): Promise<Game[]> => {

    //! Fausse latence... Ne pas faire ça en production (╯°□°）╯︵ ┻━┻
    await (new Promise((resolve) => setTimeout(resolve, 3_000)));

    //* Requete vers l'api (en NextJS, on pourrait aussi être un call DB)
    // http://localhost:4002/games?isDeleted=false&?_page=1&_limit=3
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

}, undefined, { tags: ['games'] });

export const fetchGameCount = cache(async (): Promise<number> => {

    //! Fausse latence... Ne pas faire ça en production (╯°□°）╯︵ ┻━┻
    await (new Promise((resolve) => setTimeout(resolve, 2_500)));

    //* Requete pour obtenir le nombre d'element via le header (X-Total-Count)
    //http://localhost:4002/games?isDeleted=false&_limit=0
    const result = await apiRequester.get('games', {
        params: { isDeleted: false, _limit: 0 }
    });

    // Récuperation de nombre de jeu via le header (FakeAPI) 
    console.log(result.headers);
    return parseInt(result.headers["x-total-count"] ?? 0);
}, undefined, { tags: ['games'] });

export const fetchGameLast = cache(async (): Promise<Game | null> => {

    //! Fausse latence... Ne pas faire ça en production (╯°□°）╯︵ ┻━┻
    await (new Promise((resolve) => setTimeout(resolve, 10_000)));

    //* Requete pour obtenir le dernier jeu
    // http://localhost:4002/games?isDeleted=false&_sort=id&_order=desc&_limit=1
    const result = await apiRequester.get<GameRequestData[]>('games', {
        params: { isDeleted: false, _sort: 'id', _order: 'desc', _limit: 1 }
    });
    const elem = result.data[0];

    // Renvoi du resultat mappé
    return !elem ? null : {
        id: elem.id,
        name: elem.name,
        genres: elem.genres.split(',').map(g => g.trim())
    };
}, undefined, { tags: ['games'] });

export const fetchDetailGame = cache(async (gameId: number): Promise<GameDetail | null> => {

    //! Fausse latence... Ne pas faire ça en production (╯°□°）╯︵ ┻━┻
    await (new Promise((resolve) => setTimeout(resolve, 1_000)));

    //* Requete vers l'api (en NextJS, on pourrait aussi être un call DB)
    // http://localhost:4002/games?isDeleted=false&id=3
    const result = await apiRequester.get<GameRequestData[]>('/games', {
        params: { id: gameId }
    });
    const elem = result.data[0];

    if(!elem) {
        return null;
    }

    // Envoi des données mappées
    return {
        id: elem.id,
        name: elem.name,
        genres: elem.genres.split(',').map(g => g.trim()),
        desc: elem.desc
    };

}, undefined, { tags: ['games'] });