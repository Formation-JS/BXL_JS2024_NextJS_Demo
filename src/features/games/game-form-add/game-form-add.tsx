'use client';

import { actionNewGame, GameFormState } from "@/actions/game.action";
import { useActionState } from "react";


const initialState: GameFormState = { values: null, errors: null };

export default function GameFormAdd() {

    //! Action pour traiter les données du formulaires
    //? Action serveur dans le composants
    // const handleSubmit = async (data: FormData) => {
    //     'use server';
    //     console.log(data);
    // }

    //? Action serveur dans un fichier avec la directive "user server"
    const [state, action] = useActionState(actionNewGame, initialState);

    return (
        <form action={action} className="flex flex-col gap-2">
            <div className="flex flex-col">
                <label htmlFor="">Nom : </label>
                <input type="text" className="border p-0.5 rounded"
                    name="name" defaultValue={state.values?.get('name')?.toString()} />
                {state.errors?.name && state.errors.name.map((error) => (
                    <span key={error} className="text-pink-500">{error}</span>
                ))}
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Genres : </label>
                <input type="text" className="border p-0.5 rounded"
                    name="genres" defaultValue={state.values?.get('genres')?.toString()} />
                {state.errors?.genres && state.errors.genres.map((error) => (
                    <span key={error} className="text-pink-500">{error}</span>
                ))}
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Description : </label>
                <textarea className="resize-none border p-0.5 rounded"
                    name="desc" defaultValue={state.values?.get('desc')?.toString()} />
                {state.errors?.desc && state.errors.desc.map((error) => (
                    <span key={error} className="text-pink-500">{error}</span>
                ))}
            </div>
            <div>
                <button type="submit" className="bg-purple-700 rounded-3xl text-amber-400 px-3 py-1">
                    Ajouter
                </button>
            </div>
        </form>
    );
}