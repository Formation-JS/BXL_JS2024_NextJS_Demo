'use server';

import { redirect } from "next/navigation";
import { z } from "zod";

//! Type de donnée pour le state de l'action du formulaire
export type GameFormState = {
    values: FormData | null;
    errors: {
        name?: string[],
        genres?: string[],
        desc?: string[];
    } | null;
};

//! Le validateur du formulaire
//? Validateur d'un objet "complet"
const GameFormValidator = z.object({
    id: z.number(),
    name: z.string()
        .min(1, { message: 'Le nom doit comporter au moins une lettre' }),
    genres: z.string()
        .min(1, { message: 'Le jeu doit posseder au moins un genre' }),
    desc: z.string()
        .nullable()
});
//? Validateur d'un objet pour la création (sans l'id)
const GameFormCreateValidator = GameFormValidator.omit({ id: true });


//! L'action d'ajout d'un jeu
export async function actionNewGame(state: GameFormState, data: FormData): Promise<GameFormState> {

    //! Récuperation et validation des données du formulaire
    //* v1 (A la mano)
    const formFields1 = GameFormCreateValidator.safeParse({
        name: data.get('name'),
        genres: data.get('genres'),
        desc: data.get('desc')
    });
    // v2 (Convertion via "fromEntries" -> Les noms des champs doivent corresponds)
    const formFields2 = GameFormCreateValidator.safeParse(Object.fromEntries(data));

    //! Check si la validation a échoué
    if (!formFields2.success) {
        return {
            values: data,
            errors: formFields2.error.flatten().fieldErrors
        };
    }

    //TODO Envois vers la DB ou vers l'API Backend

    //! Traitement de fin d'action (2 choix)
    //? Redirection
    redirect('/game');
    
    //? Reset du formulaire (pour enchainer les ajouts)
    return {
        values: null,
        errors: null
    };
}