import style from './game-last.module.css';

export default async function GameLastSkeleton() {


    return (
        <div className={style['card-game-last']}>
            <p> <span className='bg-purple-700 h-5 w-22 align-text-bottom inline-block'></span></p>
            <p> <span className='bg-purple-700 h-5 w-36 align-text-bottom inline-block'></span></p>
            <p> <span className='bg-purple-700 h-5 w-18 align-text-bottom inline-block'></span></p>
        </div>
    );
}