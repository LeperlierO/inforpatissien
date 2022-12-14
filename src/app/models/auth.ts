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