import style from './game-count.module.css';

export default async function GameCountSkeleton() {

    return (
        <div className={style['card-game-count']}>
            <p>Nombre de jeu disponible : <span className='bg-purple-200 w-10 h-5 align-text-bottom inline-block'></span></p>
        </div>
    );
}