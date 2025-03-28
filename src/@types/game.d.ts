export type GameRequestData = {
    id: number;
    name: string;
    genres: string;
    desc: string|null;
    isDeleted: boolean
};

export type Game = {
    id: number;
    name: string;
    genres: string[];
};

export type GameDetail = Game & {
    desc: string|null
};

export type GameData = {
    name: string;
    genres: string;
    desc: string|null
};
