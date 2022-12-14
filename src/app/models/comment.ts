import { User } from "./auth";

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

export const broComments = [
    new Comment("Mais c'est trop beau mon petit !!", 17, 
                    new User('Dominique', 'elpadre', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/dad.png')),
    new Comment("Waaaaw junior !!", 32, 
                    new User('Eva', 'fashionweek', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/sis.png')),
];

export const sisComments = [
    new Comment("Mais c'est trop beau ma fille !!", 17, 
                    new User('Dominique', 'elpadre', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/dad.png')),
    new Comment("Waaaaw Fashion Week !!", 32, 
                    new User('Eva', 'fashionweek', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/sis.png')),
];

export const dadComments = [
    new Comment("Mais c'est trop beau moi !!", 17, 
                    new User('Dominique', 'elpadre', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/dad.png')),
    new Comment("Waaaaw Papa !!", 32, 
                    new User('Eva', 'fashionweek', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/sis.png')),
];

export const mumComments = [
    new Comment("Mais c'est trop beau Maman !!", 17, 
                    new User('Dominique', 'elpadre', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/dad.png')),
    new Comment("Waaaaw Maman !!", 32, 
                    new User('Eva', 'fashionweek', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/sis.png')),
];