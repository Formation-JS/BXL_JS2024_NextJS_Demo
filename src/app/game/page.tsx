import { fetchGames } from "@/services/game.service";

export default async function GamePage() {

    const games = await fetchGames(1, 20);

    return (
        <>
            <h1 className="text-3xl">
                Liste des jeux
            </h1>
            {games.map(game => (
                <article key={game.id}>
                    <p>{game.name}</p>
                    <p>Genre : {game.genres.join(' / ')}</p>
                </article>
            ))}
        </>
    );
}