export class BodyLogin
{
    email!: string;
    password!: string;
}

export class Token{
    token!: string;
    userName!: string;
    gamer!: Boolean;
    connection!: Date;
    avatarUrl!: string;
    difficulty!: number;
    videoUrl!: string;
}

export class User{

    constructor(name: string, nickname:string, gamer:Boolean, avatarUrl:string) { 
        this.name = name;
        this.nickname = nickname;
        this.gamer = gamer;
        this.avatarUrl = avatarUrl;
     }  

    name!: string;
    nickname!: string;
    gamer!: Boolean;
    avatarUrl!: string;
}

export const dad = new User('Dominique', 'elpadre', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/dad.png');
export const mum = new User('Pascale', 'elmadre', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/mum.png');
export const sis = new User('Eva', 'elfashion', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/sis.png');
export const bro = new User('Olivier', 'eljunior', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/bro.png');
export const bil = new User('Ancelin', 'elgolfista', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/bil.png');
export const beb = new User('Linda', 'elbacalao', true, 'https://inforpatissien-api.azurewebsites.net/assets/images/users/beb.png');