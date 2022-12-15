import { dad, mum, sis, bro, bil, beb, User } from "./auth";

export class Comment
{
   constructor(content: string, minutes: number, user:User) { 
       this.content = content;
       this.minutes = minutes;
       this.user = user;
    }  

    user!: User;
    content!: string;
    minutes!: number
}

export const broComments = [];

export const sisComments = [
    new Comment("Mais waaaaaaaaaaaaaaaw ! 🎄", 16, beb),
    new Comment("Bravo pitchounette ton gâteau est digne d'un repas de fêtes !", 58, mum),
    new Comment("Oté le gâteau lé vraiment bo là!", 17, dad),
    new Comment("... 🤮", 17, bil),
    new Comment("J'ai du soucis à me faire mouais, comment je vais faire pour rester la pâtissier de la famille ...", 39, bro),
];

export const dadComments = [
    new Comment("Bravo domi t'es le meilleur !!! 😄", 58, mum),
    new Comment("L'insert caramel est bien coulant et le biscuit bien croustillant, j'adore, bravo domi !", 16, beb),
    new Comment("Waaaaaaaaaaaaaaaaaaw papa inscrit toi au meilleur pâtissier c'est trop bon", 39, bro),
    new Comment("Eh bah domi, chapeau l'artiste ! 👏", 17, bil),
    new Comment("Mhhhhh la ganache vanille j'adore, très distingué", 47, sis),
];

export const mumComments = [
    new Comment("Un super gâteau pascale 😄", 17, bil),
    new Comment("Pascale pascale ... j'aime pas trop trop ... j'adore !!! ", 17, dad),
    new Comment("Enfin un gâteau qui n'a pas cramé 😋", 39, bro),
    new Comment("Très beau gâteau, très bon, j'achète !!", 16, beb),
    new Comment("Maman j'adooooooore ✨", 47, sis),
];