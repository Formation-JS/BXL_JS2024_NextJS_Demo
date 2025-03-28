import GameCount from "@/features/games/game-count/game-count";
import GameCountSkeleton from "@/features/games/game-count/game-count-skeleton";
import GameLast from "@/features/games/game-last/game-last";
import GameLastSkeleton from "@/features/games/game-last/game-last-skeleton";
import Image from "next/image";
import { Suspense } from "react";

export default function HomePage() {

  return (
    <>
      <h1 className="text-3xl">
        My Game library !
      </h1>
      
      <Suspense fallback={<GameCountSkeleton />}>
        <GameCount />
      </Suspense>
      <Suspense fallback={<GameLastSkeleton />}>
        <GameLast />
      </Suspense>

      <Image
        src='/banner_landscape.png'
        alt='Banniere du site'
        width={2048}
        height={720}
        className="hidden sm:block"
      />
      <Image
        src='/banner_mobile.jfif'
        alt='Banniere du site'
        width={520}
        height={520}
        className="block sm:hidden"
      />
    </>
  );
}
