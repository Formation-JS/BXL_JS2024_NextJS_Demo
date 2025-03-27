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