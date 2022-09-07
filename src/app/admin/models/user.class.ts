export class User {
    public id: number;
    public username: string;
    public password: string;
    public type: string;
    constructor(id: number, username: string, password: string, type: string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.type = type;

    }
}