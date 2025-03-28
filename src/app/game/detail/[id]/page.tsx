import { fetchDetailGame } from '@/services/game.service';
import { notFound } from 'next/navigation';

type GameDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function GameDetailPage({ params }: GameDetailPageProps) {

    const id = parseInt((await params).id);
    if(isNaN(id)) {
        notFound();
    }

    const game = await fetchDetailGame(id);
    if(!game) {
        notFound();
    }

    return (
        <>
            <h1 className="text-3xl">
                {game.name}
            </h1>
            <ul className='italic text-amber-400'>
                {game.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <p className='mt-2 text-pink-600'>{game.desc}</p>
        </>
    );
}