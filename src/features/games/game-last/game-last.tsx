import { fetchGameLast } from "@/services/game.service";
import style from './game-last.module.css';

export default async function GameLast() {

    const last = await fetchGameLast();

    return (
        <div className={style['card-game-last']}>
            <p>Dernier jeu : </p>
            <p className={style['game-name']}>{last?.name ?? 'Aucun donnée !'}</p>
            <p className={style['game-genres']}>{last?.genres?.join(' / ')}</p>
        </div>
    );
}