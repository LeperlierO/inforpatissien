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
    new Comment("Bah dis donc, tu t'es donnée ! Hâte de goûter 😋", 16, beb),
    new Comment("Bravo ma grande, ton petit frère a du souci à se faire !!! 👌👌👌", 58, mum),
    new Comment("Oté le gâteau lé vraiment bo là!", 17, dad),
    new Comment("Mouais bof", 17, bil),
    new Comment("Comment je vais faire pour rester le pâtissier de la famille maintenant moi... 😥", 39, bro),
];

export const dadComments = [
    new Comment("Bravo Domi tu t'améliores !!! 😄😄😄", 58, mum),
    new Comment("Beh voilà ! On sait maintenant d'où vient l'instinct pâtissier du Leperlier junior 👏", 16, beb),
    new Comment("L'élève a donc dépassé le maître...", 39, bro),
    new Comment("C'est bon, c'est terminé ? Allez ti' rhum Domi 🍻", 17, bil),
    new Comment("C'est un 10/10, et ça... J'ACHÈTE !!!", 47, sis),
];

export const mumComments = [
    new Comment("Un super gâteau Pascale, encore meilleur que votre tarte aux pommes 😄", 17, bil),
    new Comment("Bon ok, j'avoue... Pour une fois que c'est pas cramé, c'est très bon", 17, dad),
    new Comment("C'est pas bon... C'EST TRÈS BON 😋", 39, bro),
    new Comment("Bon... ça reste entre nous hein, mais c'est encore meilleur que les gâteaux du mini Leperlier 🤫", 16, beb),
    new Comment("Mais voilà, il est toujours temps de se réorienter ! 🍰", 47, sis),
];