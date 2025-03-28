import { fetchGameCount } from "@/services/game.service";
import style from './game-count.module.css';

export default async function GameCount() {

    const gameCount = await fetchGameCount();

    return (
        <div className={style['card-game-count']}>
            <p>Nombre de jeu disponible : {gameCount}</p>
        </div>
    );
}